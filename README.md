# Safer Web Tweak by Abdul Manan

This browser extension is designed to improve your experience on the SAFER website (https://safer.fmcsa.dot.gov/). It offers persistent search functionality, numeric input restriction, and an elegant, responsive popup interface for enhanced usability.

---

## Features
- **Persistent Search Input**: Automatically saves your last search and restores it when you revisit the page.
- **Numeric Input Restriction**: Ensures only numbers can be entered in the search field.
- **Popup Interface**: A visually appealing popup provides branding and quick access to the extension.

---

## Installation

### 1. Clone or Download the Repository
Download the files `popup.html`, `manifest.json`, and `content.js` to your local machine.

### 2. Load the Extension in Your Browser
#### For Google Chrome:
1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer mode** (toggle in the top-right corner).
3. Click **Load unpacked** and select the folder containing the downloaded files.

#### For Microsoft Edge:
1. Open Edge and navigate to `edge://extensions/`.
2. Enable **Developer mode** (toggle in the bottom-left corner).
3. Click **Load unpacked** and select the folder containing the downloaded files.

---

## Usage
1. Visit the SAFER website at [https://safer.fmcsa.dot.gov/query.asp](https://safer.fmcsa.dot.gov/query.asp).
2. Use the search field as usual.
3. The extension will:
   - Save your search input in the session.
   - Restore the last search input on page reload or revisit.
   - Restrict the search field to numeric input only.
4. Open the popup via the browser toolbar to see the extension’s branding.

---

## Files Overview

### `popup.html`
- Provides a fixed-size, visually pleasing popup interface with branding and a starry background.

### `manifest.json`
- Contains metadata and configurations for the extension.
- Defines:
  - The popup interface (`popup.html`).
  - Content scripts (`content.js`) for SAFER website-specific functionality.

### `content.js`
- Handles:
  - Saving and restoring search input using `sessionStorage`.
  - Converting the search input field to accept only numeric values.
  - Automatically focusing and selecting the search field for quick user interaction.

---

## Example
1. Search for a numeric value like "12345" on the SAFER website.
2. Reload the page or revisit it later.
3. The search field will automatically display "12345".

---

## License
This project is open-source and licensed under the MIT License. You are free to modify and distribute it as per the license terms.

---

## Credits
Created by **Abdul Manan** using HTML, CSS, and JavaScript.
