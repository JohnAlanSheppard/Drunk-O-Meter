# 🍺 Drunk-O-Meter Deluxe

A hilarious, R-rated quiz web app that measures how drunk someone is through 100 brutally honest questions. Features a progressively drunker leprechaun character, smooth animations, and a dark bar/nightlife theme.

## 🚀 Features

- **100 Hilarious Questions**: R-rated questions that get progressively more ridiculous
- **20 Drunk Levels**: From "Sober Form" to "Obliterated Demigod"
- **Animated Leprechaun**: Progressively drunker character with smooth animations
- **Smooth Transitions**: Framer Motion animations throughout
- **Confetti Celebration**: Party effects on results screen
- **Share Functionality**: Share your results with friends
- **Fully Responsive**: Works on all screen sizes
- **Dark Theme**: Beautiful bar/nightlife aesthetic

## 🛠️ Tech Stack

- **React 18.3+** with **TypeScript**
- **Vite** (for fast builds and GitHub Pages deployment)
- **Tailwind CSS** (for styling)
- **Framer Motion** (for smooth animations)
- **react-confetti** (for celebration effects)
- **Lucide React** (for icons)

## 📦 Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

## 🌐 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

Create a new repository named `drunk-o-meter` on GitHub.

### Step 2: Update Vite Config

Make sure `vite.config.ts` has the correct base path:
```typescript
base: '/drunk-o-meter/',  // Change to match your repo name
```

### Step 3: Initialize Git and Push

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/drunk-o-meter.git
git push -u origin main
```

### Step 4: Deploy

```bash
npm run deploy
```

### Step 5: Enable GitHub Pages

1. Go to your repository Settings
2. Navigate to Pages section
3. Source: Deploy from branch
4. Branch: `gh-pages` → `/root`
5. Save

Your app will be live at: `https://YOUR_USERNAME.github.io/drunk-o-meter/`

## 📁 Project Structure

```
drunk-o-meter/
├── public/
│   └── leprechaun-states/     # Folder for leprechaun images (optional)
├── src/
│   ├── components/
│   │   ├── QuizQuestion.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── ResultsScreen.tsx
│   │   ├── StartScreen.tsx
│   │   └── LeprechaunDisplay.tsx
│   ├── data/
│   │   ├── questions.ts
│   │   └── drunkLevels.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the custom colors:
- `bar-dark`: Dark bar background
- `bar-darker`: Darker background
- `neon-green`: Primary accent color
- `neon-pink`: Secondary accent color
- `beer-gold`: Gold accent color

### Drunk Levels

Edit `src/data/drunkLevels.ts` to modify messages, score ranges, or emojis.

### Questions

Edit `src/data/questions.ts` to modify questions and answers.

### Animations

Adjust timing in Framer Motion `transition` properties throughout components.

## 🖼️ Leprechaun Images (Optional)

For custom drunk leprechaun images, use AI image generation:

### Prompt Template for Each Level:

```
"A cartoon leprechaun character in a bar setting, [LEVEL_SPECIFIC_STATE], 
simple vector art style, transparent background, facing forward, 
full body, vibrant colors, comic style"

Level 1: alert and sober, clear eyes, standing straight
Level 5: slightly tipsy, one eye squinting, slight lean
Level 10: wobbling, dizzy stars, holding onto bar stool
Level 15: very drunk, eyes spinning, barely standing
Level 20: completely wasted, passed out, stars and birds circling head
```

Save as: `public/leprechaun-states/level-1.png` through `level-20.png`

## 📱 Future Mobile App Conversion

When ready for iOS/Android:

### Install Capacitor:

```bash
npm install @capacitor/core @capacitor/cli
npx cap init DrunkOMeter com.yourname.drunkometer
npm install @capacitor/ios @capacitor/android
```

### Build and add platforms:

```bash
npm run build
npx cap add ios
npx cap add android
npx cap sync
```

### Open in native IDE:

```bash
npx cap open ios      # Opens Xcode
npx cap open android  # Opens Android Studio
```

## ⚠️ Disclaimer

This app is for entertainment purposes only. Please drink responsibly! 🍺

## 📝 License

This project is open source and available for personal use.

## 🎉 Enjoy!

Have fun discovering your drunk level! Remember to drink responsibly and never drink and drive.

