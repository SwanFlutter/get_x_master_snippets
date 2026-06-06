"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeActionProvider = void 0;
const vscode = require("vscode");
class CodeActionProvider {
    provideCodeActions() {
        const editorX = vscode.window.activeTextEditor;
        if (!editorX) {
            return [];
        }
        // Always show wrap actions — whether or not text is selected.
        // The wrap commands themselves handle both cases correctly.
        const codeActions = [];
        codeActions.push({
            command: "get.wrapInGetx",
            title: "Wrap with GetX"
        });
        codeActions.push({
            command: "get.wrapInGetBuilder",
            title: "Wrap with GetBuilder"
        });
        codeActions.push({
            command: "get.wrapInObx",
            title: "Wrap with Obx"
        });
        return codeActions;
    }
}
exports.CodeActionProvider = CodeActionProvider;
//# sourceMappingURL=code_action.js.map
