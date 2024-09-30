<?php
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

/**
 * Atto text editor aceinlineassistant plugin lib.
 *
 * @package    atto_aceinlineassistant
 * @copyright  2024 Norberto Martín Afonso
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

/**
 * Initialise the strings required for JS.
 *
 * @return void
 */
function atto_aceinlineassistant_strings_for_js() {
    global $PAGE;

    // In order to prevent extra strings to be imported, comment/uncomment the characters
    // which are enabled in the JavaScript part of this plugin.
    $PAGE->requires->strings_for_js(
        array(
            'Text1',
            'Text2',
            'Text3',
            'Text4',
            'Text5',
            'Text6',
            'Text7',
            'Text8',
            'Text9',
            'Text10',
            'Text11',
            'Text12',
            'Text13',
            'Text14',
            'Text15',
            'Text16',
            'Text17',
            'Text18',
            'inserttext'
        ),
        'atto_aceinlineassistant'
    );
}
