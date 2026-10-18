# Aman Pathiara — Personal Portfolio

A static, responsive portfolio with a curated homepage and separate filterable archive for free GitHub Pages hosting. No build process or paid framework required.

## Preview locally
Open `index.html` in a browser. For a closer-to-live preview, open this folder in VS Code and use Live Server, or run `python -m http.server 8000` and visit `http://localhost:8000`.

## Personalise
1. Open `projects.js`. Set `SITE.showreelId` to the numeric ID from your Vimeo showreel URL.
2. Replace `YOUR_EMAIL@example.com`, Vimeo profile and LinkedIn profile URLs.
3. Add each project's `vimeoId` and (if unlisted) `vimeoHash`. For an unlisted Vimeo URL like `vimeo.com/123456789/abcdef`, use ID `123456789` and hash `abcdef`. Check Vimeo's embed privacy settings and any client permissions.
4. Add archive videos to the `ARCHIVE` array in `projects.js`. Categories must match `ARCHIVE_CATEGORIES` to appear under their filter.\n5. Add approved project thumbnail images in an `images/` folder and set each `image` field, e.g. `"images/dish.jpg"`. If left blank, a typographic placeholder appears.
6. Edit project descriptions and the About text in `index.html` to your liking. Do not publish confidential client work without permission.

## Publish on GitHub Pages
1. Create a public GitHub repository called `YOUR_USERNAME.github.io` (or another repo name).
2. Upload `index.html`, `style.css`, `projects.js`, `script.js`, `archive.html` and `archive.js` to the root of the repository.
3. Go to repository Settings → Pages → Build and deployment. Choose **Deploy from a branch**, branch **main**, folder **/(root)** and save.
4. Your site will appear at `https://YOUR_USERNAME.github.io/` (or `/REPOSITORY_NAME/` for other repos), usually after a short deployment delay.
5. Optional: add a custom domain under Settings → Pages and follow GitHub's DNS instructions. Enable Enforce HTTPS once available.

## Notes
- This is a working starter site with placeholder video IDs, contact address, links and thumbnail artwork; update these before sharing publicly.
- Google Fonts are loaded externally. For a fully self-contained site, switch to system fonts in `style.css`.
- GitHub Pages is public hosting, not suitable for private assets or secrets.
