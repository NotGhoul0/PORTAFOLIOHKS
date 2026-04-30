# Global Documentation: Creative Hacker Portfolio

This document provides a detailed technical overview of the Creative Hacker Portfolio project.

## 1. Code Structure & Architecture

### HTML (index.html)
- **Header**: Contains the persistent terminal prompt and navigation links styled as shell commands/executables.
- **Main**: Split into two primary sections:
    - **Terminal Window**: A stylized container simulating a macOS/Linux terminal app. It uses data attributes (`data-text`) for the JavaScript-driven typing animation.
    - **Projects Container**: A flexbox-based layout for showcasing work cards.
- **Footer**: A simple call-to-action for scrolling.

### CSS (style.css)
- **Design System**: Built around CSS variables (`:root`). This allows for global theme changes from a single location.
- **CRT FX**: 
    - `::before` & `::after` on the body create the scanline and flicker effects.
    - Keyframe animations (`flicker`, `scanline`, `blink`) provide the "living" retro feel.
- **Layout**: Uses Modern Flexbox for responsiveness.

### JavaScript (script.js)
- **Typing Engine**: An asynchronous function that reads `data-text` from elements and types them out. It uses `Promise` and `async/await` to ensure commands are typed sequentially.
- **Interactivity**: 
    - Listens for `mousemove` to apply a 3D parallax effect to the project cards.
    - Handles smooth scrolling for the footer indicator.

## 2. Environment Configuration

### Local Development
1. **Prerequisites**: No specific runtime (like Node.js) is strictly required. 
2. **Setup**:
    - Ensure you have a code editor (VS Code recommended).
    - Use the "Live Server" extension in VS Code to see changes in real-time.
    - Alternatively, just double-click `index.html`.

### Fonts & Icons
- The project uses **Font Awesome 6.0** for icons (linked via CDN in the HTML head).
- The font is set to standard mono-spaced fonts (`Courier New`) to ensure compatibility without extra weight, though Google Fonts can be easily integrated in `style.css`.

## 3. Customization Guide

### Changing the Terminal Output
The outputs are linked to the commands. If you change a command in `index.html`, ensure you also update the corresponding `output` div:
```html
<div class="command-line">
    <span class="prompt-char">$</span> <span class="typing" data-text="new-command"></span>
    <div class="output">New result message</div>
</div>
```

### Adjusting Animation Speed
In `script.js`, change the `speed` parameter in the `typeEffect` function (default is 50ms) to make typing faster or slower.

## 4. Deployment Instructions

### Static Hosting (Recommended)
1. **GitHub Pages**:
   - Push code to a GitHub repo.
   - Go to Settings > Pages.
   - Select the `main` branch and `/root` folder.
2. **Vercel / Netlify**:
   - Connect your repository.
   - It will automatically detect the static project and deploy it.

---
*Technical Documentation v1.0*
