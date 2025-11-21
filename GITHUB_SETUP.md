# 🚀 GitHub Setup Guide for Drunk-O-Meter

Follow these steps to deploy your app to GitHub Pages:

## Step 1: Install Git (if not already installed)

If git command is not working, you have two options:

### Option A: Install Git for Windows
1. Download from: https://git-scm.com/download/win
2. Install with default settings
3. Restart your terminal/PowerShell

### Option B: Use GitHub Desktop
1. Download from: https://desktop.github.com/
2. This provides a GUI for git operations

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `drunk-o-meter` (must match exactly)
3. Description: "A hilarious quiz app that measures how drunk you are"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 3: Initialize and Push Code

### If using Command Line (Git Bash or PowerShell):

```bash
# Navigate to project directory
cd "C:\Users\shep_\Shep Div Dropbox\John Sheppard\AI & Automation\Cursor\Drunk-O-Meter"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Drunk-O-Meter Deluxe"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/drunk-o-meter.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### If using GitHub Desktop:

1. Open GitHub Desktop
2. File → Add Local Repository
3. Browse to: `C:\Users\shep_\Shep Div Dropbox\John Sheppard\AI & Automation\Cursor\Drunk-O-Meter`
4. Click "Publish repository"
5. Name: `drunk-o-meter`
6. Make sure it's public
7. Click "Publish repository"

## Step 4: Install Dependencies and Deploy

```bash
# Install npm packages
npm install

# Deploy to GitHub Pages
npm run deploy
```

This will:
- Build your app
- Create a `gh-pages` branch
- Push it to GitHub

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/drunk-o-meter`
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

## Step 6: Your App URL

Your app will be live at:
```
https://YOUR_USERNAME.github.io/drunk-o-meter/
```

**Note:** It may take 1-2 minutes for the site to appear after enabling Pages.

## Troubleshooting

### If `npm run deploy` fails:
- Make sure you've installed dependencies: `npm install`
- Make sure `gh-pages` package is installed: `npm install --save-dev gh-pages`
- Make sure you've pushed your code to GitHub first

### If the site shows 404:
- Wait 1-2 minutes for GitHub to build
- Check that the branch is `gh-pages` (not `gh-pages/`)
- Verify the base path in `vite.config.ts` matches your repo name

### If you need to update the site:
Just run `npm run deploy` again after making changes!

## Quick Reference

- **Repository URL**: `https://github.com/YOUR_USERNAME/drunk-o-meter`
- **Live App URL**: `https://YOUR_USERNAME.github.io/drunk-o-meter/`
- **Base Path**: `/drunk-o-meter/` (in vite.config.ts)

