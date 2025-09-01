"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceX = void 0;
const vscode = require("vscode");
function SpaceX() {
    const editorX = vscode.window.activeTextEditor;
    if (editorX && editorX.options.insertSpaces) {
        return " ".repeat(editorX.options.tabSize);
    }
    return "\t";
}
exports.SpaceX = SpaceX;
//# sourceMappingURL=space.js.map