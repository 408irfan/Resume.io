# Mohd Abdul Irfan — Resume Website

A clean, responsive personal resume website built with plain HTML, CSS, and
JavaScript — no build step required. Designed to be hosted for free on
**GitHub Pages**.

## ✨ Features

- Fully responsive (mobile → desktop)
- Light / dark mode toggle (remembers your choice, respects system preference)
- Downloadable PDF resume
- Fast, dependency-free static site
- Easy to customize

## 📁 Structure

```
.
├── index.html            # Page content
├── .nojekyll             # Tells GitHub Pages to serve files as-is
└── assets/
    ├── css/style.css     # Styles + theme variables
    ├── js/main.js        # Theme toggle + footer year
    ├── img/avatar.svg    # Profile avatar (swap for a photo if you like)
    └── resume.pdf        # Downloadable resume
```

## 🚀 Deploy to GitHub Pages

1. Push these files to the `main` branch of your repository.
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select branch **`main`** and folder **`/ (root)`**, then click **Save**.
5. Wait ~1 minute. Your site will be live at:

   ```
   https://<your-username>.github.io/<repository-name>/
   ```

   For this repo that is: `https://408irfan.github.io/Resume.io/`

## ✏️ Customizing

- **Text & links:** edit `index.html`.
- **Colors & fonts:** edit the CSS variables at the top of `assets/css/style.css`.
- **Profile photo:** replace `assets/img/avatar.svg` with your own image
  (update the `src` in `index.html` if you change the filename/extension).
- **Resume file:** replace `assets/resume.pdf` with your latest resume.

## 🖥️ Preview locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
