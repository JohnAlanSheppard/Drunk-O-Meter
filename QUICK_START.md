# ⚡ Quick Start - Get Your App on GitHub

## 🎯 Fastest Method: GitHub Desktop

### Step 1: Install GitHub Desktop
Download and install: https://desktop.github.com/

### Step 2: Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: **drunk-o-meter** (exactly this name)
3. Make it **Public**
4. **DO NOT** check any boxes (no README, no .gitignore, no license)
5. Click **Create repository**

### Step 3: Connect with GitHub Desktop
1. Open GitHub Desktop
2. Click **File** → **Add Local Repository**
3. Click **Choose...** and navigate to:
   ```
   C:\Users\shep_\Shep Div Dropbox\John Sheppard\AI & Automation\Cursor\Drunk-O-Meter
   ```
4. Click **Add repository**

### Step 4: Publish to GitHub
1. In GitHub Desktop, click **Publish repository** button
2. Make sure name is: **drunk-o-meter**
3. Make sure **"Keep this code private"** is **UNCHECKED** (public)
4. Click **Publish repository**

### Step 5: Install Dependencies
Open PowerShell in the Drunk-O-Meter folder and run:
```powershell
npm install
```

### Step 6: Deploy to GitHub Pages
```powershell
npm run deploy
```

### Step 7: Enable GitHub Pages
1. Go to: https://github.com/YOUR_USERNAME/drunk-o-meter
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**:
   - Branch: **gh-pages**
   - Folder: **/ (root)**
5. Click **Save**

### Step 8: Your App is Live! 🎉
Your app URL will be:
```
https://YOUR_USERNAME.github.io/drunk-o-meter/
```

*(Replace YOUR_USERNAME with your actual GitHub username)*

---

## 🔄 Alternative: Command Line Method

If you have Git installed and in your PATH:

```powershell
# 1. Create repo on GitHub first (see Step 2 above)

# 2. Initialize and push
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/drunk-o-meter.git
git push -u origin main

# 3. Install and deploy
npm install
npm run deploy

# 4. Enable GitHub Pages (see Step 7 above)
```

---

## ❓ Need Help?

See `GITHUB_SETUP.md` for detailed troubleshooting and alternative methods.

