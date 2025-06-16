---
sidebar_position: 1
---

# Module - Astroid Layout

The **Astroid Layout Module** is a Joomla module that allows you to render layouts created using the **Astroid Framework’s Layout Builder**. With this module, you can display custom sections or blocks anywhere on your site by assigning them to module positions — without altering the main template structure.

---

## ⚙️ Configuration

Go to **Extensions → Modules → Astroid Layout** to configure its settings.

### 1. Basic Tab

- **Astroid Layout Module** (`astroid_module_layout`):  
  Astroid Framework’s Layout Builder gives you full control over your Joomla template’s structure using a visual drag-and-drop interface. The layout is organized as a nested tree. Learn more about the Layout Builder in the [Astroid Layout Builder documentation](../layout-builder).

### 2. Advanced Tab

- **Alternative Layout** (`layout`):  
  Choose an alternative layout if available. This depends on the template’s support for layout overrides.

- **Module Class Suffix** (`moduleclass_sfx`):  
  Add a custom CSS class suffix to modify the appearance or styling of the module. Example: `boxed`, `custom-style`.

- **Caching** (`cache`):
    - `Use Global`: Follows the site’s global cache settings.
    - `No Caching`: Disables caching for this module.

- **Cache Time** (`cache_time`):  
  The duration (in seconds) the module output is cached. Default is `900`.

---

## 📍 Display Positions

- The module can be published to any available module position in your template.
- Recommended positions include `debug`, `top`, or custom positions depending on your template.

---

## ✅ Use Cases

- Embed a layout section (like a call-to-action or feature block) designed with the Astroid Builder.
- Create reusable layout components that appear only on specific pages.
- Combine with Joomla’s module assignment rules for dynamic display.

---

## 🧠 Notes

- This module **requires the Astroid Framework** to be installed and active.
- Language files:
    - `language/en-GB/mod_astroid_layout.ini`
    - `language/en-GB/mod_astroid_layout.sys.ini`