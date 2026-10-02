# my-portfolio

Kong Bunyim’s responsive portfolio, built with Vue 3 and Vite. Content comes from **Kong Bunyim C2-WMAD CV [ 2026 ].pdf**. The original C2 PDF is included as the downloadable CV.

## Run

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The production website is generated in `dist/`. Relative asset paths support deployment under a GitHub Pages repository path. Upload the contents of `dist/` to your static hosting provider, or use the included GitHub Actions workflow.

## Edit

- Update project entries, skills, experience, and contact information in `src/App.vue`.
- Customize colors, typography, and responsive layouts in `src/style.css`.
- Replace images in `public/images/`.
- Update the downloadable CV at `public/Kong-Bunyim-CV.pdf`.

Project links reference public repositories and GitHub Pages deployments for [bunyim-kong](https://github.com/bunyim-kong). GitHub’s public repository API confirmed Pages was enabled for the five linked static websites on October 2, 2026. The Samai application links to its source repository.

The site includes a saved dark/light theme toggle, project card hover effects, project filters, mobile navigation, email copying, CV download, and reduced-motion support. Google Fonts has system font fallbacks.
