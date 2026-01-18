# Professional CV - Victor R. Menezes

This repository contains my professional curriculum vitae (CV) as a web page.

## Features

- 🌐 **Bilingual Support**: Full i18n implementation with English and Portuguese languages
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, professional design with a beautiful gradient header
- 📄 **Print-Ready**: Optimized styles for printing to PDF
- 💾 **Persistent Language**: Your language preference is saved to localStorage

## Sections

The CV includes all essential sections for a tech professional:

- **Header**: Name, title, and contact information (email, phone, GitHub, LinkedIn)
- **About**: Professional summary
- **Professional Experience**: Detailed work history with responsibilities
- **Education**: Academic degrees and certifications
- **Technical Skills**: Categorized by Programming Languages, Frontend, Backend, Databases, Cloud & DevOps, and Other
- **Contact**: Links to professional profiles

## How to View

Simply open `index.html` in your web browser, or visit the live page.

### Local Development

1. Clone the repository
2. Open `index.html` in a web browser, or serve it with a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server
```

3. Navigate to `http://localhost:8000` in your browser

## Language Switching

Click the language buttons (EN/PT) in the top-right corner to switch between English and Portuguese. Your preference will be saved automatically.

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (ES6+)
- JSON for translations

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with responsive design
├── i18n.js            # Internationalization system
├── locales/
│   ├── en.json        # English translations
│   └── pt.json        # Portuguese translations
└── README.md          # This file
```
