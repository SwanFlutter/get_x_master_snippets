"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertSnippet = void 0;
const vscode = require("vscode");

function insertSnippet(previously, behind, spacex, substitute, obx) {
    const editorX = vscode.window.activeTextEditor;
    if (!editorX) {
        return;
    }

    const document = editorX.document;
    let selectedRange = editorX.selection;
    let sonny = document.getText(selectedRange).trimEnd();

    // اگر انتخاب خالیه یا فقط یک کلمه‌ست، سعی کن کل بلاک ویجت رو پیدا کنی
    if (selectedRange.isEmpty || !sonny.includes("(")) {
        const fullText = document.getText();
        const startOffset = document.offsetAt(selectedRange.start);

        // اولین پرانتز باز بعد از موقعیت فعلی رو پیدا کن
        const openParenIndex = fullText.indexOf("(", startOffset);
        if (openParenIndex !== -1) {
            // مرز ویجت رو با شمارش پرانتزهای متناظر پیدا کن
            let depth = 0;
            let endIndex = -1;
            for (let i = openParenIndex; i < fullText.length; i++) {
                const ch = fullText[i];
                if (ch === "(") depth++;
                else if (ch === ")") {
                    depth--;
                    if (depth === 0) {
                        endIndex = i + 1; // شامل خود پرانتز بسته
                        break;
                    }
                }
            }
            if (endIndex !== -1) {
                const startPos = document.positionAt(startOffset);
                const endPos = document.positionAt(endIndex);
                selectedRange = new vscode.Range(startPos, endPos);
                sonny = document.getText(selectedRange).trimEnd();
            }
        }
    }

    if (!sonny) {
        return;
    }

    // حذف کاما یا سمی‌کالن انتهایی — wrapper خودش بستن رو فراهم می‌کنه
    if (sonny.endsWith(",") || sonny.endsWith(";")) {
        sonny = sonny.slice(0, -1);
    }

    const replaceSonny = previously + sonny + behind;
    editorX.insertSnippet(new vscode.SnippetString(replaceSonny), selectedRange);
    vscode.commands.executeCommand("editor.action.formatDocument");
}
exports.insertSnippet = insertSnippet;
//# sourceMappingURL=insert_snippet.js.map
