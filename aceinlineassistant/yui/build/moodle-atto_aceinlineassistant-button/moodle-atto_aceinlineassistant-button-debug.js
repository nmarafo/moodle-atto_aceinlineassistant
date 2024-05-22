YUI.add('moodle-atto_aceinlineassistant-button', function (Y, NAME) {

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * @package    atto_aceinlineassistant
 * @copyright  2024 Norberto Martín Afonso
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * Atto text editor character map plugin
 *
 * @module moodle-atto_aceinlineassistant-button
 */

var COMPONENTNAME = 'atto_aceinlineassistant',
    CSS = {
        BUTTON: 'atto_aceinlineassistant_character',
        ACEINLINEASSISTANT: 'atto_aceinlineassistant_selector'
    },
    /*
     * Map of special characters, kindly borrowed from TinyMCE.
     *
     * Each entries contains in order:
     * - {String} HTML code
     * - {String} HTML numerical code
     * - {Boolean} Whether or not to include it in the list
     * - {String} The language string key
     *
     * @property ACEINLINEASSISTANT
     * @type {Array}
     */
    ACEINLINEASSISTANT = [
        ['&nbsp;', '&#160;', true, 'nobreakspace'],
        ['&amp;', '&#38;', true, 'ampersand'],
        ['&quot;', '&#34;', true, 'quotationmark'],
        ['&#8253;', '&#8253;', true, 'interrobang'],
        
    ];

/**
 * Atto text editor ACEINLINEASSISTANT plugin.
 *
 * @namespace M.atto_aceinlineassistant
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

Y.namespace('M.atto_aceinlineassistant').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    /**
     * A reference to the current selection at the time that the dialogue
     * was opened.
     *
     * @property _currentSelection
     * @type Range
     * @private
     */
    _currentSelection: null,

    initializer: function() {
        this.addButton({
            icon: 'e/special_character',
            callback: this._displayDialogue
        });
    },

    /**
     * Display the Character Map selector.
     *
     * @method _displayDialogue
     * @private
     */
    _displayDialogue: function() {
        // Store the current selection.
        this._currentSelection = this.get('host').getSelection();
        if (this._currentSelection === false) {
            return;
        }

        var dialogue = this.getDialogue({
            headerContent: M.util.get_string('insertcharacter', COMPONENTNAME),
            focusAfterHide: true
        }, true);

        // Set the dialogue content, and then show the dialogue.
        dialogue.set('bodyContent', this._getDialogueContent())
                .show();
    },

    /**
     * Return the dialogue content for the tool.
     *
     * @method _getDialogueContent
     * @private
     * @return {Node} The content to place in the dialogue.
     */
    _getDialogueContent: function() {
        var template = Y.Handlebars.compile(
            '<div class="{{CSS.ACEINLINEASSISTANT}}">' +
                '{{#each ACEINLINEASSISTANT}}' +
                    '{{#if this.[2]}}' +
                    '<button class="btn btn-secondary btn-sm {{../../CSS.BUTTON}}" ' +
                        'aria-label="{{get_string this.[3] ../../component}}" ' +
                        'title="{{get_string this.[3] ../../component}}" ' +
                        'data-character="{{this.[0]}}" ' +
                    '>{{{this.[0]}}}</button>' +
                    '{{/if}}' +
                '{{/each}}' +
            '</div>'
        );

        var content = Y.Node.create(template({
            component: COMPONENTNAME,
            CSS: CSS,
            ACEINLINEASSISTANT: ACEINLINEASSISTANT
        }));

        content.delegate('click', this._insertChar, '.' + CSS.BUTTON, this);
        return content;
    },

    /**
     * Insert the picked character into the editor.
     *
     * @method _insertChar
     * @param {EventFacade} e
     * @private
     */
    _insertChar: function(e) {
        var character = e.target.getData('character');

        // Hide the dialogue.
        this.getDialogue({
            focusAfterHide: null
        }).hide();

        var host = this.get('host');

        // Focus on the last point.
        host.setSelection(this._currentSelection);

        // And add the character.
        host.insertContentAtFocusPoint(character);

        // And mark the text area as updated.
        this.markUpdated();
    }
});


}, '@VERSION@', {"requires": ["moodle-editor_atto-plugin"]});
