"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertSnippet = void 0;
const vscode = require("vscode");
const selected_1 = require("./selected");
function insertSnippet(previously, behind, spacex, substitute, obx) {
    const editorX = vscode.window.activeTextEditor;
    if (editorX && editorX.selection.start !== editorX.selection.end) {
        // If user has an explicit multi-character selection, use it directly.
        // Otherwise fall back to the smart widget-detection logic.
        const hasExplicitSelection = !editorX.selection.isEmpty;
        let selectedRange;
        if (hasExplicitSelection) {
            selectedRange = editorX.selection;
        } else {
            selectedRange = selected_1.selected(editorX);
        }

        var sonny = editorX.document.getText(selectedRange);

        if (substitute) {
            if (sonny.substr(-1) === ",") {
                sonny = sonny.substr(0, sonny.length - 1);
                sonny += "";
            }
        } else {
            if (sonny.substr(-1) === ",") {
                sonny = sonny.substr(0, sonny.length - 1);
                sonny += ";";
            }
        }

        var replaceSonny = previously + sonny + behind;

        if (sonny.substr(-1) === "," ||
            (sonny.substr(-1) === ";" && substitute)) {
            if (obx) {
                replaceSonny += ";";
            } else {
                replaceSonny += ",";
            }
        }

        editorX.insertSnippet(new vscode.SnippetString(replaceSonny), selectedRange);
        vscode.commands.executeCommand("editor.action.formatDocument");
    }
}
exports.insertSnippet = insertSnippet;
//# sourceMappingURL=insert_snippet.js.map
