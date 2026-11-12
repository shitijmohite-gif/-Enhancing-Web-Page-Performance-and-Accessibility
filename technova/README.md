# TechNova Solutions: Fast and Accessible Static Website

A responsive, accessible, single-page website for a fictional IT company, built with plain HTML5, CSS3 and JavaScript. No frameworks, no build step, no external libraries.

## Project files

| File | Purpose |
|------|---------|
| `index.html` | Semantic page: header, hero, about, services, why us, contact form, footer |
| `style.css` | All styling, organised into tokens, base, components, sections, form, responsive |
| `script.js` | Mobile menu, form validation, footer year (about 100 lines) |
| `images/hero.webp`, `images/about.webp` | Compressed WebP images (under 10 KB each) |
| `images/logo.svg` | Vector logo (a few hundred bytes) |
| `report.md` | Internship report on the optimisation and accessibility work |

## How to run

1. Put all files in one folder, keeping the `images/` subfolder.
2. Double-click `index.html`, or serve the folder:
   ```
   python3 -m http.server 8000
   ```
   then open `http://localhost:8000`.

## Key features

- **Accessibility:** skip link, semantic landmarks, one `h1` with a logical heading order, visible focus ring, keyboard-operable menu (Escape closes it), labelled form fields, an error summary plus inline messages, and no reliance on colour alone.
- **Performance:** system font stack (no font downloads), WebP images with `width` and `height` set, `loading="lazy"` on below-the-fold images, hero image preloaded, `defer` on the script, one small CSS file, no libraries.
- **Responsive:** mobile-first CSS using Flexbox, Grid and `min-width` media queries. Text sizes use `rem` and `clamp()`.
- **Motion:** none beyond smooth scrolling, which is switched off for users who prefer reduced motion.

## Production steps (optional)

Minify before deploying. For example, with Node.js installed:

```
npx html-minifier-terser --collapse-whitespace --remove-comments -o index.min.html index.html
npx clean-css-cli -o style.min.css style.css
npx terser script.js -c -m -o script.min.js
```

Then point `index.html` to the `.min` files. If you use Apache, add caching rules such as:

```
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

On Netlify, GitHub Pages or similar hosts, caching is configured by the host.

## How to test

Record your own results in the table at the bottom. Do not copy scores from anywhere else.

1. **Lighthouse:** open the site in Chrome, press F12, open the Lighthouse tab, select Performance, Accessibility, Best Practices and SEO, choose Mobile, then Analyze. Repeat for Desktop.
2. **PageSpeed Insights:** deploy the site to a public URL (for example GitHub Pages or Netlify), then enter it at pagespeed.web.dev.
3. **WAVE:** install the WAVE browser extension, open the page, run it, and review errors, contrast errors and alerts.
4. **axe DevTools:** install the extension, open DevTools, go to the axe DevTools tab, and choose "Scan all of my page".
5. **Responsive testing:** in Chrome DevTools press Ctrl+Shift+M (device toolbar). Check widths 360, 390, 768, 1024 and 1440 pixels. Also try the iPhone and Android presets.
6. **Keyboard test:** use only Tab, Shift+Tab, Enter and Escape. Check the skip link, menu, every link, and the form. Submit an empty form and confirm that errors are announced and focus moves to the summary.
7. **Screen reader test (optional):** try NVDA on Windows or VoiceOver on macOS and iOS.

## Test results (fill in after testing)

| Tool | Device / mode | Date | Result | Notes |
|------|---------------|------|--------|-------|
| Lighthouse Performance | Mobile | | | |
| Lighthouse Accessibility | Mobile | | | |
| Lighthouse Best Practices | Mobile | | | |
| Lighthouse SEO | Mobile | | | |
| Lighthouse (all four) | Desktop | | | |
| PageSpeed Insights | Mobile | | | |
| PageSpeed Insights | Desktop | | | |
| WAVE | Desktop | | | |
| axe DevTools | Desktop | | | |
| Keyboard-only test | | | | |
| Responsive test | Android / iPhone / tablet | | | |

## Notes and limitations

- The contact form has no server. On a valid submit it shows a confirmation message only. Connect it to a form service to receive real messages.
- Social links point to the main pages of each network because the company is fictional.
- The hero and about images are simple generated illustrations. Replace them with your own artwork, keep them compressed, and update the `alt` text.
