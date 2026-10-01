# MCS AI Conference 2026

Static bilingual React/Vite website for the 18th International Scientific Conference on Mathematics and Artificial Intelligence.

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. For a production preview:

```bash
npm run build
npm run preview
```

## Cloudflare Pages

1. Create a new Cloudflare Pages project connected to this repository.
2. Set the framework preset to **Vite**.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Deploy. No environment variables or backend services are required.

The same `dist` output is compatible with GitHub Pages, Netlify, and Vercel static deployments.

## Updating content

All bilingual conference copy is centralized in `src/data/conference.ts`. Update the matching `en` or `ar` object; the components render the active language from that data structure.

The language switcher stores the selected language in `localStorage` and updates the document language and direction (`en/ltr` or `ar/rtl`).

## Replacing assets

- Logos: `src/assets/logos/`
- Posters / campus imagery: `src/assets/images/`
- AI MCS branding: `src/assets/branding/`

Keep the same filenames or update the imports in `src/main.tsx`. The supplied original logos are used directly; they are not redrawn or generated.

## Notes

This is a static site only. There is no backend, database, authentication, API, registration storage, or payment system.
