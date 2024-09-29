YUI.add('moodle-atto_aceinlineassistant-button', function (Y, NAME) {

/*jshint browser: true */
/*global M */
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
 * Atto text editor aceinlineassistant map plugin
 *
 * @module moodle-atto_aceinlineassistant-button
 */

var COMPONENTNAME = 'atto_aceinlineassistant',
    CSS = {
        BUTTON: 'atto_aceinlineassistant_button',
        ACEINLINEASSISTANT: 'atto_aceinlineassistant_selector',
        BUTTON_ROW: 'atto_aceinlineassistant_button_row',
        BUTTON_LABEL: 'atto_aceinlineassistant_button_label',
        DIALOGUE_BUTTON: 'atto_aceinlineassistant_dialogue_button'
    },
    /*
     * Map of texts to be inserted.
     *
     * Each entries contains in order:
     * - {String} Button text
     * - {String} Text to be inserted
     * - {Boolean} Whether or not to include it in the list
     * - {String} The language string key
     * - {String} Additional label text
     *
     * @property ACEINLINEASSISTANT
     * @type {Array}
     */
    ACEINLINEASSISTANT = [
        ['ace-highlight-code',
        '<pre class="ace-highlight-code" contenteditable="false">' +
        'print("Some squares")\nfor i in range(10):\n    print(i, i ** 2)</pre>',
        true, 'ace-highlight-code', 'Text1'],
        ['ace-interactive-code',
        '<pre class="ace-interactive-code">print("Some squares")\nfor i in range(10):\n    print(i, i ** 2)</pre>',
        true, 'ace-interactive-code', 'Text2'],
        ['data-stdin-taid',
        '<p><textarea id="areatextoid" cols="50" rows="4">\n' +
                  'Some squares\n' +
                  '</textarea></p>\n' +
                  '<pre class="ace-interactive-code" data-stdin-taid="areatextoid">\n' +
                  'print(input())\n' +
                  'for i in range(10):\n    print(i, i ** 2)</pre>',
        true, 'data-stdin-taid', 'Text3'],
        ['data-file-upload-id',
        '<p><input id="file-uploader" multiple="multiple" type="file"></p>\n' +
                  '<pre class="ace-interactive-code" data-file-upload-id="file-uploader">\n' +
                  'import os\n' +
                  'from html import escape\n' +
                  'text_files = [filename for filename in os.listdir() if filename.endswith(".txt")]\n' +
                  'if len(text_files) == 0:\n' +
                  '    print("No .txt files found!")\n' +
                  'elif len(text_files) != 1:\n' +
                  '    print("Please upload only a single .txt file")\n' +
                  'else:\n' +
                  '    with open(text_files[0], "r") as infile:\n' +
                  '      raw = infile.read()\n' +
                  '      if len(raw.strip()) == 0:\n' +
                  '        print("EMPTY FILE!")\n' +
                  '      else:\n' +
                  '        print(escape(raw))</pre>',
        true, 'data-file-upload-id', 'Text4'],
        ['data-ace-lang',
        '<pre class="ace-highlight-code" data-ace-lang="python3">' +
        'print("Some squares")\nfor i in range(10):\n    print(i, i ** 2)</pre>',
        true, 'data-ace-lang', 'Text5'],
        ['data-button-name',
        '<pre class="ace-interactive-code" data-button-name="Run!">' +
        'print("Some squares")\nfor i in range(10):\n    print(i, i ** 2)</pre>',
        true, 'data-button-name', 'Text6'],
        ['data-start-line-number',
        '<pre class="ace-highlight-code" data-start-line-number=none>' +
        'print("Some squares")\nfor i in range(10):\n    print(i, i ** 2)</pre>',
        true, 'data-start-line-number', 'Text7'],
        ['data-readonly',
        '<pre class="ace-interactive-code" data-readonly=true>' +
        'print("Some squares")\nfor i in range(10):\n    print(i, i ** 2)</pre>',
        true, 'data-readonly', 'Text8'],
        ['data-code-mapper',
        '<pre class="ace-interactive-code" contenteditable="false" data-code-mapper="riveFunction"></pre>',
        true, 'data-code-mapper', 'Text9'],
        ['data-dark-theme-mode',
        '<pre class="ace-interactive-code" data-dark-theme-mode=2>' +
        'print("Some squares")\nfor i in range(10):\n    print(i, i ** 2)</pre>',
        true, 'data-readonly', 'Text10'],
        ['data-font-size',
        '<pre class="ace-interactive-code" data-font-size=14>' +
        'print("Some squares")\nfor i in range(10):\n    print(i, i ** 2)</pre>',
        true, 'data-font-size', 'Text11'],
        ['data-html-output',
        '<pre class="ace-interactive-code" contenteditable="false" data-html-output="">' +
        'print("<h2>Im a heading</h2>")\n' +
        'print("<ol><li>Bullet 1</li><li>Bullet 2</li></ol>")' +
        '</pre>',
        true, 'data-html-output', 'Text12'],
        ['data-min-lines',
        '<pre class="ace-interactive-code" data-min-lines=10>' +
        'print("Some squares")\nfor i in range(10):\n    print(i, i ** 2)</pre>',
        true, 'data-min-lines', 'Text13'],
        ['data-max-lines',
        '<pre class="ace-interactive-code" data-max-lines=2>' +
        'print("Some squares")\nfor i in range(10):\n    print(i, i ** 2)</pre>',
        true, 'data-max-lines', 'Text14'],
        ['data-max-output-length',
        '<pre class="ace-interactive-code" data-max-output-length=4>' +
        'print("Some squares")\nfor i in range(10):\n    print(i, i ** 2)</pre>',
        true, 'data-max-output-length', 'Text15'],
        ['data-prefix',
        '<pre class="ace-interactive-code" data-prefix="">' +
        'print("Some squares")\nfor i in range(10):\n    print(i, i ** 2)</pre>',
        true, 'data-prefix', 'Text16'],
        ['data-start-line-number',
        '<pre class="ace-interactive-code" data-start-line-number=4>' +
        'print("Some squares")\nfor i in range(10):\n    print(i, i ** 2)</pre>',
        true, 'data-start-line-number', 'Text17'],
        ['data-suffix',
        '<pre class="ace-interactive-code" data-suffix="">' +
        'print("Some squares")\nfor i in range(10):\n    print(i, i ** 2)</pre>',
        true, 'data-suffix', 'Text18'],
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
            icon: 'icon',
            iconComponent: 'atto_aceinlineassistant',
            callback: this._displayDialogue,
            tags: '.aceinlineassistant-placeholder',
            tagMatchRequiresAll: false
        });
        this.editor.all('.aceinlineassistant-placeholder').setAttribute('contenteditable', 'false');
        this.editor.delegate('dblclick', this._handleDblClick, '.aceinlineassistant-placeholder', this);
        this.editor.delegate('click', this._handleClick, '.aceinlineassistant-placeholder', this);
    },

    /**
     * Display the text button selector.
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
            headerContent: M.util.get_string('inserttext', COMPONENTNAME),
            width: '600px',
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
            '<div class="{{../../CSS.BUTTON_ROW}}">' +
                '<button class="btn btn-secondary btn-sm {{../../CSS.DIALOGUE_BUTTON}}" ' +
                    'aria-label="{{this.[0]}}" ' +
                    'title="{{this.[0]}}" ' +
                    'data-text="{{this.[1]}}" ' +
                '>{{{this.[0]}}}</button>' +
                '<span class="{{../../CSS.BUTTON_LABEL}} aceinlineassistant-text">{{get_string this.[4] ../../component}}</span>' +
            '</div>' +
            '{{/if}}' +
        '{{/each}}' +
    '</div>'
);

        var content = Y.Node.create(template({
            component: COMPONENTNAME,
            CSS: CSS,
            ACEINLINEASSISTANT: ACEINLINEASSISTANT
        }));

        content.delegate('click', this._insertText, '.' + CSS.DIALOGUE_BUTTON, this);
        return content;
    },

    /**
     * Insert the picked text into the editor.
     *
     * @method _insertText
     * @param {EventFacade} e
     * @private
     */
    _insertText: function(e) {
        var text = e.target.getData('text');
        var preformattedText = '<pre>' + text + '</pre>';

        // Hide the dialogue.
        this.getDialogue({
            focusAfterHide: null
        }).hide();

        var host = this.get('host');

        // Focus on the last point.
        host.setSelection(this._currentSelection);

        // And add the preformatted text.
        host.insertContentAtFocusPoint(preformattedText);

        // And mark the text area as updated.
        this.markUpdated();
    }
});

}, '@VERSION@', {"requires": ["moodle-editor_atto-plugin"]});
