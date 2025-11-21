# 🔍 Diagnostic Steps for Blank Page

## Immediate Checks

### 1. Open Browser Developer Tools
Press **F12** (or right-click → Inspect)

### 2. Check Console Tab
Look for any **red error messages**. Common errors:
- `Failed to load module` → Base path issue
- `Cannot read property` → JavaScript error
- `CORS policy` → Cross-origin issue
- `404` → File not found

**Please share any errors you see here!**

### 3. Check Network Tab
1. Click **Network** tab
2. Refresh the page (F5)
3. Look for these files:
   - `index-DkDePEXr.js` - Status should be **200** (green)
   - `index-DzrBOns5.css` - Status should be **200** (green)

**If you see 404 (red) for either file, that's the problem!**

### 4. Test Direct Asset Access
Try opening these URLs directly in your browser:

**JavaScript file:**
```
https://johnalansheppard.github.io/Drunk-O-Meter/assets/index-DkDePEXr.js
```

**CSS file:**
```
https://johnalansheppard.github.io/Drunk-O-Meter/assets/index-DzrBOns5.css
```

- ✅ If they load: Paths are correct, issue is in the app code
- ❌ If 404: Base path needs to be fixed

## Quick Test

Try accessing the root with a trailing slash:
```
https://johnalansheppard.github.io/Drunk-O-Meter/
```

vs without:
```
https://johnalansheppard.github.io/Drunk-O-Meter
```

## What to Share

Please provide:
1. **Console errors** (copy/paste any red text)
2. **Network tab status** for the JS and CSS files (200 or 404?)
3. **Screenshot** of the browser console (if possible)

With this info, I can fix it immediately! 🚀

