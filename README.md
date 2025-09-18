# Fred Kaloki — Personal Portfolio

This repository contains a responsive personal portfolio website for Fred Kaloki(me). The site showcases education, skills, projects, and contact information, built with HTML, CSS, and JavaScript and designed to be lightweight and easy to host as a static site.

## Overview

The portfolio is focused on presenting a blend of Business/Accounting background and growing technical skills (Python, data analysis, and web development). It includes:

- A hero section with a theme (dark/light) toggle and quick contact actions.
- Detailed pages for About, Education, Skills, Projects, and Contact.
- Interactive UI elements: animated skill progress bars, counters, project modals, FAQ accordion, mobile menu, and a back-to-top button.
- Accessibility-minded enhancements (ARIA attributes, live region for skill announcements).

## Features

- Responsive layout — designed to work across phones, tablets, and desktops.
- Dark / Light theme toggle preserving preference in `localStorage`.
- Animated skill progress bars and counters.
- Project cards that open modal detail views.
- Contact form with frontend validation.
- Mobile-friendly menu and keyboard accessibility (Escape to close modals/menus).
- Uses Lucide icons and Tailwind utility classes (via CDN in markup).

## Pages

- `index.html` — Home / Hero and previews of about, education, skills, and projects.
- `about.html` — More detailed personal background, interests, and career goals.
- `education.html` — Education history, training, certifications, and professional development.
- `skills.html` — Detailed skills with animated progress bars and a skills development timeline.
- `projects.html` — Project gallery with modal details for each project.
- `contact.html` — Contact information, contact form, and FAQ.

## Tech Stack

- HTML5
- CSS (custom styles + responsive rules in `css/`) — Tailwind utility classes are used via CDN.
- JavaScript (`js/script.js`) — page behavior (theme toggle, animations, modals, form validation).
- Icons: Lucide (via CDN)

## File structure

```text
/ (project root)
├─ index.html
├─ about.html
├─ education.html
├─ skills.html
├─ projects.html
├─ contact.html
├─ css/
│  ├─ styles.css
│  └─ responsive.css
├─ js/
│  └─ script.js
├─ images/
│  └─ me.jpg (or me.png)
└─ README.md
```

## Run locally

You can serve the site locally with a simple static server. From the project root run one of the following commands:

- Using Python 3:

```bash
python3 -m http.server 8000
```

- Open your browser to `http://localhost:8000/` and navigate the pages. This ensures relative paths to CSS/JS/images work correctly.

## Development notes

- Main JavaScript behavior is in `js/script.js`. Recent improvements include IntersectionObserver-based skill animations, staggered progress-bar delays, and ARIA attributes for better accessibility.
- Styles live in `css/styles.css` and `css/responsive.css`. The project uses custom CSS variables for color themes and small helper classes like `.sr-only` for screen-reader-only content.
- Icons are loaded from Lucide via CDN; Tailwind is used through the Tailwind CDN script tag.

### Editing tips

- To change a skill percentage, edit the `data-skill-level` attribute on the progress bar elements in `skills.html` — the JavaScript normalizes numeric values to percentages.
- To add a project, create a new `.project-card` entry in `projects.html` and add the corresponding content in the `projectData` object inside `js/script.js` (used by the modal logic).

## Accessibility

- Progress bars include `role="progressbar"`, `aria-valuenow`, and `aria-valuetext` attributes to convey state to assistive tech.
- A hidden `aria-live` region announces loaded skills when the animation runs.
- Keyboard accessibility: Escape closes open modals and the mobile menu.

## Testing & Validation

- Quick syntax check for `js/script.js` can be done with Node:

```bash
node --check js/script.js
```

- Manually test in multiple viewports, and check keyboard navigation and a screen reader to confirm announcements and focus behavior.

## Contact

- Email: `charlesfred285@gmail.com`
- Phone: `+254 706 367 840`
- GitHub: [https://github.com/fredxotic](https://github.com/fredxotic)
- Instagram: [https://www.instagram.com/fredxotic](https://www.instagram.com/fredxotic)
