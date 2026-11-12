# Internship Report: Performance Optimization and Accessibility Enhancement of a Static Website

**Project:** TechNova Solutions website
**Technologies:** HTML5, CSS3, JavaScript (no libraries)
**Intern name:** ____________________  **Date:** ____________________

## 1. Introduction

This project builds a website for a fictional IT company, TechNova Solutions, with two main goals: load quickly and be usable by everyone, including people who rely on keyboards or screen readers. This report explains the choices made and how they link to web performance and accessibility (WCAG) principles. Actual test results are left blank for the intern to record (see Section 8).

## 2. Objectives

1. Build a responsive page with navigation, hero, about, services, why us, contact form and footer.
2. Use semantic HTML and follow WCAG guidance.
3. Keep CSS and JavaScript small, clean and easy to read.
4. Reduce page weight and speed up first render.
5. Explain how to test the result with standard tools.

## 3. Design decisions

- **Colour:** deep navy (`#14213d`) for text and dark sections, cobalt blue (`#1f4fd8`) for actions, and a pale blue tint for alternate sections. Colours are stored as CSS variables so they can be changed in one place.
- **Typography:** the system font stack (`system-ui`, Segoe UI, Roboto, and so on). This costs no download, avoids text flashing while a font loads, and looks native on each device.
- **Layout:** a single column on phones that expands to two and then four columns on wider screens. Content is left-aligned, with line length capped at 65 characters for readability.
- **Visual restraint:** no shadows, gradients or entrance animations. Cards use a plain border with a coloured left edge. This keeps CSS small and avoids distracting users.

## 4. HTML optimisation

| Technique | Where | Why it helps |
|-----------|-------|--------------|
| Landmarks: `header`, `nav`, `main`, `section`, `article`, `footer` | Whole page | Screen reader users can jump between regions |
| One `h1`, then `h2` for sections and `h3` for items | Whole page | Logical outline for assistive technology and search engines |
| Descriptive `<title>` and meta description | `<head>` | Better search results and clearer browser tabs |
| `alt` text on informative images; `alt=""` on the decorative logo beside visible text | Images | Avoids repeated or useless announcements |
| `aria-label` on the nav and social list; `aria-expanded` and `aria-controls` on the menu button | Header, footer | Only used where native HTML does not give enough information |
| `aria-hidden="true"` on decorative SVG icons | Cards, footer | Hides graphics that add no meaning |
| Skip link and `tabindex="-1"` on `main` | Top of page | Keyboard users bypass the menu |
| `lang="en"` on `<html>` | Page | Correct pronunciation by screen readers |

## 5. CSS optimisation

- **Single stylesheet, organised by section** with a table of contents comment.
- **Design tokens** (CSS variables) remove repeated colour and spacing values.
- **Simple selectors:** mostly single class selectors, such as `.card` and `.btn`. There are no deep descendant chains and no `!important`.
- **Reusable classes:** `.btn`, `.card`, `.section`, `.container` are used across the page instead of one-off rules.
- **Mobile-first media queries** at 40rem, 52rem and 64rem add columns only when space allows. Flexbox is used for the header and footer, and Grid for cards and sections.
- **No unused styles:** every rule matches something on the page. There are no animations other than optional smooth scrolling, which is disabled under `prefers-reduced-motion`.
- **Relative units** (`rem`, `clamp()`) let text scale with browser settings.

## 6. Accessibility improvements

| Requirement | Implementation |
|-------------|----------------|
| Colour contrast | Text and button colours were chosen to exceed the 4.5:1 ratio for normal text; form borders exceed 3:1. Ratios are noted in `style.css` comments and should be confirmed with a contrast checker. |
| Keyboard access | All controls are native links, buttons and inputs. Tab order follows the visual order. Escape closes the mobile menu and returns focus to its button. |
| Focus visibility | A 3px amber outline with offset on every `:focus-visible` element, visible on both light and dark backgrounds. |
| Forms | Every field has a visible `<label>` linked with `for` and `id`. Required fields are marked with `required` and an asterisk explained in the introduction. `autocomplete` attributes help users fill in details. |
| Validation | Errors appear in an error summary (`role="alert"`, focus moved to it) and next to each field (linked using `aria-describedby`, field marked `aria-invalid`). Summary items are links that move focus to the field. |
| Not colour alone | Error messages begin with the word "Error:" and invalid fields get a thicker border. Social links have text labels as well as icons. |
| Responsive text | `rem` units and `clamp()` for headings; zooming to 200% does not hide content. |
| Reduced motion | `prefers-reduced-motion` turns off smooth scrolling. |
| Progressive enhancement | If JavaScript fails, the menu stays open and the form still has native fields. |

## 7. Performance improvements

| Technique | Implementation |
|-----------|----------------|
| Image compression and WebP | Both images are WebP files under 10 KB, with `width` and `height` attributes to prevent layout shift. |
| Lazy loading | `loading="lazy"` on the About image (below the fold). The hero image is not lazy-loaded because it appears immediately, and is preloaded instead. |
| Minimal JavaScript | About 100 lines, no libraries, loaded with `defer`. |
| Vector graphics | Logo and icons are inline or tiny SVG, so they need few or no extra requests. |
| No external dependencies | No web fonts, CDNs or frameworks, which removes extra connections. |
| Minification | Commands for HTML, CSS and JS are in the README. Source files are kept readable on purpose for learning. |
| Caching | Example Apache rules are in the README. Hosts such as Netlify handle this automatically. |

## 8. Testing methodology and results

Methods are described step by step in the README. Record your own measurements below. No scores are claimed in this report.

| Tool | Mode | Date | Score / issues found | Fixes made |
|------|------|------|----------------------|------------|
| Lighthouse Performance | Mobile | | | |
| Lighthouse Accessibility | Mobile | | | |
| Lighthouse Best Practices | Mobile | | | |
| Lighthouse SEO | Mobile | | | |
| PageSpeed Insights | Mobile and desktop | | | |
| WAVE | Desktop | | | |
| axe DevTools | Desktop | | | |
| Manual keyboard test | | | | |
| Responsive test (360, 390, 768, 1024, 1440 px) | | | | |

Notes: automated tools find roughly a portion of accessibility issues, so manual keyboard and screen reader checks are also needed.

## 9. Challenges and lessons learned

- Making a menu that works with and without JavaScript required a `js` class on the `html` element.
- Error handling for forms needs several parts working together: labels, inline messages, a summary, and focus management.
- Simple choices (system fonts, small images, no libraries) gave larger benefits than complex techniques.

## 10. Limitations and future work

- The form has no back end. A form service or server script would be needed to receive messages.
- Add a dark colour scheme using `prefers-color-scheme`.
- Add multi-page content such as a blog or case studies, each with unique titles and descriptions.
- Add structured data (JSON-LD) for the organisation to improve search listings.

## 11. Conclusion

The project shows that a fast and accessible website mostly comes from careful basics: semantic HTML, readable CSS, small images and restrained JavaScript. The next step is to run the tests in Section 8, record the real results, and fix anything they reveal.
