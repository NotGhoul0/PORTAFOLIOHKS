# Creative Hacker Portfolio 🚀

A retro-styled, terminal-inspired portfolio website designed for creative developers and visual artists. This project features an 80s computer terminal aesthetic with scanlines, flickering CRT effects, and interactive elements.

## 🌟 Features
- **Retro Terminal Aesthetic**: Green-on-black color scheme with phosphor glow.
- **CRT Simulation**: Scanlines and subtle screen flickering for authenticity.
- **Typing Animation**: Commands are typed out character-by-character.
- **Interactive Project Cards**: Hover effects and 3D parallax movement.
- **Responsive Design**: Works across different screen sizes while maintaining the terminal feel.
- **Modular CSS**: Uses variables for easy customization.

## 🛠️ Installation

1. **Clone or Download**: Save this project folder to your local machine.
2. **Open the Project**: Simply open `index.html` in any modern web browser.
3. **No Setup Needed**: This is a vanilla HTML/CSS/JS project. No `npm install` or complex build steps are required.

## 🎨 Personalization

### 1. Modifying Colors & Styles
All visual settings are controlled via CSS variables at the top of `style.css`.
- Open `style.css` and locate the `:root` block.
- **Change the main color**: Modify `--main-green` to any color (e.g., `#ff00ff` for a neon pink aesthetic).
- **Adjust Glow**: Change `--glow-strength` to increase or decrease the glow effect.

### 2. Customizing Terminal Content
To change the text inside the terminal:
- Open `index.html`.
- Find the `<span class="typing">` tags.
- Change the `data-text` attribute to your desired command.
- Modify the content inside the `<div class="output">` tag directly below it.

### 3. Adding/Removing Projects
The projects are located in the `<section class="projects-container">` of `index.html`.
- **To Remove**: Simply delete the `<div class="project-card">` block you don't want.
- **To Add**: Copy an existing `.project-card` block and paste it inside the container.
- **To Change Icons**: Replace the Font Awesome class in the `<i>` tag (e.g., replace `fas fa-code` with `fas fa-palette` for a design icon).
- **To Change Names**: Update the text inside `<span class="project-name">`.

## 📂 Project Structure
- `index.html`: The main structural file.
- `style.css`: The styling system, including CRT effects and variables.
- `script.js`: Interactive logic and terminal typing animations.
- `docs/`: (Optional) Detailed technical documentation.

## 🚀 Deployment
Since this is a static site, you can deploy it to:
- **GitHub Pages**: Upload the files to a repository and enable Pages in settings.
- **Netlify/Vercel**: Drag and drop the folder into their deployment dashboard.

---
*Created with ❤️ by Creative Hacker*
