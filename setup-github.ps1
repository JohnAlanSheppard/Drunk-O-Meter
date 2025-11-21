# GitHub Setup Script for Drunk-O-Meter
# Run this script in PowerShell

Write-Host "🍺 Drunk-O-Meter GitHub Setup" -ForegroundColor Green
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: Please run this script from the Drunk-O-Meter directory" -ForegroundColor Red
    exit 1
}

Write-Host "✓ Found project files" -ForegroundColor Green
Write-Host ""

# Check for git
$gitPath = (Get-Command git -ErrorAction SilentlyContinue).Source
if (-not $gitPath) {
    Write-Host "⚠️  Git not found in PATH" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Please choose one of these options:" -ForegroundColor Cyan
    Write-Host "1. Install Git: https://git-scm.com/download/win" -ForegroundColor White
    Write-Host "2. Use GitHub Desktop: https://desktop.github.com/" -ForegroundColor White
    Write-Host "3. Continue with manual setup (see GITHUB_SETUP.md)" -ForegroundColor White
    Write-Host ""
    $choice = Read-Host "Press Enter to continue with manual setup instructions"
    exit 0
}

Write-Host "✓ Git found at: $gitPath" -ForegroundColor Green
Write-Host ""

# Check git status
Write-Host "Checking git status..." -ForegroundColor Cyan
$gitStatus = git status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "Initializing git repository..." -ForegroundColor Cyan
    git init
}

# Check if remote exists
$remote = git remote get-url origin 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "📝 Next Steps:" -ForegroundColor Yellow
    Write-Host "1. Create a repository on GitHub: https://github.com/new" -ForegroundColor White
    Write-Host "   - Name it: drunk-o-meter" -ForegroundColor White
    Write-Host "   - Make it Public" -ForegroundColor White
    Write-Host "   - DON'T initialize with README" -ForegroundColor White
    Write-Host ""
    $username = Read-Host "Enter your GitHub username"
    if ($username) {
        Write-Host ""
        Write-Host "Adding remote and preparing to push..." -ForegroundColor Cyan
        git remote add origin "https://github.com/$username/drunk-o-meter.git"
        Write-Host "✓ Remote added" -ForegroundColor Green
    }
}

# Add and commit files
Write-Host ""
Write-Host "Adding files to git..." -ForegroundColor Cyan
git add .

Write-Host "Committing changes..." -ForegroundColor Cyan
git commit -m "Initial commit: Drunk-O-Meter Deluxe" 2>&1 | Out-Null

# Check current branch
$branch = git branch --show-current 2>&1
if (-not $branch) {
    git branch -M main
}

Write-Host "✓ Files committed" -ForegroundColor Green
Write-Host ""

# Install dependencies
Write-Host "Installing npm dependencies..." -ForegroundColor Cyan
if (Test-Path "node_modules") {
    Write-Host "✓ Dependencies already installed" -ForegroundColor Green
} else {
    npm install
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Dependencies installed" -ForegroundColor Green
    } else {
        Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "🎉 Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Push to GitHub: git push -u origin main" -ForegroundColor White
Write-Host "2. Deploy: npm run deploy" -ForegroundColor White
Write-Host "3. Enable GitHub Pages in repository settings" -ForegroundColor White
Write-Host ""
Write-Host "Your app will be at: https://YOUR_USERNAME.github.io/drunk-o-meter/" -ForegroundColor Cyan
Write-Host ""

