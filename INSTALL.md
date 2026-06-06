# نصب لوکال GetX Master Snippets

## روش نصب در VS Code / Kiro

### ۱. از طریق Command Line (سریع‌ترین روش)

ترمینال باز کن و این دستور رو اجرا کن:

```bash
code --install-extension "g:\Android\Pakege\vscode\get_x_master_snippets\get-x-master-snippets-1.0.3.vsix"
```

اگر Kiro رو به عنوان default editor داری:

```bash
kiro --install-extension "g:\Android\Pakege\vscode\get_x_master_snippets\get-x-master-snippets-1.0.3.vsix"
```

---

### ۲. از طریق UI

1. در VS Code / Kiro برو به **Extensions** (Ctrl+Shift+X)
2. بالا سمت راست روی **`...`** (More Actions) کلیک کن
3. گزینه **Install from VSIX...** رو انتخاب کن
4. فایل زیر رو انتخاب کن:
   ```
   g:\Android\Pakege\vscode\get_x_master_snippets\get-x-master-snippets-1.0.3.vsix
   ```
5. بعد از نصب، VS Code / Kiro رو **Reload** کن

---

### ۳. از طریق Command Palette

1. **Ctrl+Shift+P** بزن
2. تایپ کن: `Extensions: Install from VSIX`
3. فایل `get-x-master-snippets-1.0.3.vsix` رو انتخاب کن

---

## تست بعد از نصب

یه فایل `.dart` باز کن و این prefix ها رو تست کن:

| تایپ کن | نتیجه |
|---------|-------|
| `onInit` | override onInit با super |
| `onReady` | override onReady با super |
| `onClose` | override onClose با super |
| `onDelete` | override onDelete با super |
| `getxmasterlifecycle` | هر ۳ lifecycle با هم |
| `getxmastercontrollerfull` | Controller کامل با state و lifecycle |
| `getxmasterworkerever` | ever() worker |
| `getxmasterworkerdebounce` | debounce() worker |
| `getxmasterobx` | Obx widget |
| `getxmastergetbuilder` | GetBuilder widget |

### تست Wrap Commands

1. یه widget چند خطی رو **select** کن
2. راست‌کلیک کن
3. گزینه‌های زیر رو تست کن:
   - **Wrap with GetX**
   - **Wrap with GetBuilder**
   - **Wrap with Obx**

---

## حذف نسخه قدیمی (اگه نصب بود)

```bash
code --uninstall-extension sajjadkarimi.get-x-master-snippets
```

بعد دوباره نصب کن.
