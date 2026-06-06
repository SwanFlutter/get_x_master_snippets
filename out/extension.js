"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = exports.deactivate = void 0;
const vscode = require("vscode");
const space_1 = require("./utils/space");
const code_action_1 = require("./utils/code_action");
const insert_snippet_1 = require("./utils/insert_snippet");
function deactivate() { }
exports.deactivate = deactivate;
exports.activate = (context) => {
    context.subscriptions.push(vscode.languages.registerCodeActionsProvider({ pattern: "**/*.{dart}", scheme: "file" }, new code_action_1.CodeActionProvider()));
    // Wrap with GetX — selection goes directly as the child widget inside builder
    context.subscriptions.push(vscode.commands.registerCommand("get.wrapInGetx", () => {
        const sp = space_1.SpaceX();
        insert_snippet_1.insertSnippet(
            "GetX<${1:MyController}>(\n" +
            sp + "init: ${1:MyController}(),\n" +
            sp + "builder: (_) {\n" +
            sp + sp + "return ",
            ";\n" + sp + "},\n)",
            sp, false, false
        );
        vscode.window.setStatusBarMessage("Wrap Successfully Created", 2000);
    }));
    // Wrap with GetBuilder — selection goes directly as the child widget inside builder
    context.subscriptions.push(vscode.commands.registerCommand("get.wrapInGetBuilder", () => {
        const sp = space_1.SpaceX();
        insert_snippet_1.insertSnippet(
            "GetBuilder<${1:MyController}>(\n" +
            sp + "init: ${1:MyController}(),\n" +
            sp + "builder: (_) {\n" +
            sp + sp + "return ",
            ";\n" + sp + "},\n)",
            sp, false, false
        );
        vscode.window.setStatusBarMessage("Wrap Successfully Created", 2000);
    }));
    // Wrap with Obx — uses block body to support multi-line selections
    context.subscriptions.push(vscode.commands.registerCommand("get.wrapInObx", () => {
        const sp = space_1.SpaceX();
        insert_snippet_1.insertSnippet(
            "Obx(() {\n" + sp + "return ",
            ";\n})",
            sp, false, false
        );
        vscode.window.setStatusBarMessage("Wrap Successfully Created", 2000);
    }));
    // Wrap with ObxValue
    context.subscriptions.push(vscode.commands.registerCommand("get.wrapInObxValue", () => {
        const sp = space_1.SpaceX();
        insert_snippet_1.insertSnippet(
            "ObxValue(\n" + sp + "(${1:data}) => ",
            ",\n" + sp + "${2:false}.obs,\n)",
            sp, false, false
        );
        vscode.window.setStatusBarMessage("Wrap Successfully Created", 2000);
    }));
    // Wrap with MultiObx
    context.subscriptions.push(vscode.commands.registerCommand("get.wrapInMultiObx", () => {
        const sp = space_1.SpaceX();
        insert_snippet_1.insertSnippet(
            "MultiObx(\n" + sp + "observables: [${1:rxVar}],\n" + sp + "builder: () {\n" + sp + sp + "return ",
            ";\n" + sp + "},\n)",
            sp, false, false
        );
        vscode.window.setStatusBarMessage("Wrap Successfully Created", 2000);
    }));
    // Wrap with GetBuilderObs
    context.subscriptions.push(vscode.commands.registerCommand("get.wrapInGetBuilderObs", () => {
        const sp = space_1.SpaceX();
        insert_snippet_1.insertSnippet(
            "GetBuilderObs<${1:My}Controller>(\n" +
            sp + "init: ${1:My}Controller(),\n" +
            sp + "observables: [${2:controller.count}],\n" +
            sp + "filter: (controller) => ${3:controller.count.value},\n" +
            sp + "builder: (controller) {\n" +
            sp + sp + "return ",
            ";\n" + sp + "},\n)",
            sp, false, false
        );
        vscode.window.setStatusBarMessage("Wrap Successfully Created", 2000);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("get.removeKey", () => {
        vscode.window.showWarningMessage('You can now use the lamp by clicking on the name of the widget. The shortcut keys have been disabled.', ...['OK', 'Readme Snippets'])
            .then(selection => {
            if (selection === "Readme Snippets") {
                vscode.env.openExternal(vscode.Uri.parse('https://marketplace.visualstudio.com/items?itemName=get-snippets.get-snippets'));
            }
        });
    }));
};
//# sourceMappingURL=extension.js.map
