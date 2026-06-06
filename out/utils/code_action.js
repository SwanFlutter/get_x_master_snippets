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
        const codeActions = [];
        codeActions.push({ command: "get.wrapInGetx",          title: "Wrap with GetX" });
        codeActions.push({ command: "get.wrapInGetBuilder",    title: "Wrap with GetBuilder" });
        codeActions.push({ command: "get.wrapInObx",           title: "Wrap with Obx" });
        codeActions.push({ command: "get.wrapInObxValue",      title: "Wrap with ObxValue" });
        codeActions.push({ command: "get.wrapInMultiObx",      title: "Wrap with MultiObx" });
        codeActions.push({ command: "get.wrapInGetBuilderObs", title: "Wrap with GetBuilderObs" });
        return codeActions;
    }
}
exports.CodeActionProvider = CodeActionProvider;
//# sourceMappingURL=code_action.js.map
