
# 🌐 Hacker Terminal Loading Screen

🖥️[Hacker Terminal Demo](https://codepen.io/AJESUS_/pen/NWQmdPQ)  
**A stunning hacker-themed terminal simulation featuring realistic animations, matrix effects, and dynamic progress tracking.**

---

## ✨ Features
- 🖥️ **Realistic Terminal Phases**: Customizable loading phases with realistic commands.
- 🌌 **Matrix Animation**: Immersive matrix-style background effect.
- 🎨 **Customizable Themes**: Change colors, background, and styles via configuration.
- 📊 **Dynamic Progress Bar**: Tracks progress with smooth transitions.
- 💥 **Glitch Effects**: Random glitch effects to enhance realism.
- 🖋️ **Typing Animation**: Outputs and commands are typed in real-time.

---

## 🗂️ Project Structure
```plaintext
📁 Project Root
├── index.html      # Main HTML file
├── styles.css      # Terminal styles and animations
├── script.js       # JavaScript for functionality and effects
├── config.js       # Configurations for colors, effects, and phases
```

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (e.g., Chrome, Firefox, Edge).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/AmirhosseinDehghanazar/Hacker-Terminal-Loading-Screen.git
   cd hacker-terminal
   ```
2. Open `index.html` in your preferred web browser.

---

## ⚙️ Configuration Options

| **Configuration**  | **Description**                                    | **Default Value** |
|---------------------|----------------------------------------------------|-------------------|
| `themeColorDefault` | Default text and progress bar color.               | `#00FF00` (Green) |
| `themeColor50`      | Color for 50% progress.                            | `#FFA500` (Orange)|
| `themeColor80`      | Color for 80% progress.                            | `#9cbcf0` (Blue)  |
| `bgColor`           | Background color for the terminal.                 | `#000000` (Black) |
| `typingSpeed`       | Typing animation speed (ms per character).         | `2`               |
| `glitchProbability` | Probability of a glitch effect (0-1).              | `0.2`             |
| `codeScrollSpeed`   | Scrolling speed for the code background (ms).      | `50`              |
| `matrixEffectSpeed` | Animation speed for the matrix effect (ms).        | `33`              |
| `realLoading`       | Toggle real/simulated loading.                     | `true`            |

### Example Customization
To change the typing speed and theme color:
```javascript
const config = {
  themeColorDefault: "#FF4500",  // Bright red theme
  typingSpeed: 5,                // Slower typing animation
  glitchProbability: 0.5,        // Increase glitch effects
};
```

---

## 🛠️ Usage
1. Open the `index.html` file in any modern browser.
2. Observe:
   - Randomly generated "hacker" code scrolling in the background.
   - Terminal-like loading phases with realistic animations.
   - Progress bar reflecting the operation phases.

---

## 🤝 Contributing

We welcome your contributions! Here's how you can get involved:

1. **Fork this repository**.
2. Create a new feature branch:
   ```bash
   git checkout -b feature-branch-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature or fix"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-branch-name
   ```
5. Open a pull request and describe your feature or fix.

---

## 📜 License
This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute this software as long as proper attribution is provided.







---

Made with ❤️ by [AmirhosseinDehghanazar](https://github.com/AmirhosseinDehghanazar).
