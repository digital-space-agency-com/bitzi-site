# Bitzi marketing site

Static, prerendered marketing site for Bitzi (target domain bitzi.app, not registered). Same stack as the ReelMatch site: Vite, React 18, React Router 7, every route prerendered to real HTML with its own head tags (`scripts/prerender.mjs`). Plain CSS, no analytics, no cookies.

```bash
npm install
npm run build   # tsc, client build, SSR build, prerender, sitemap/robots/llms.txt
npm run check   # SEO and red-line checks over dist/
npm run dev
```

## Pages
| en-GB | es-ES | de-DE |
|---|---|---|
| `/` (definition block) | `/es/` | `/de/` |
| `/faq` (FAQPage schema) | `/es/preguntas-frecuentes` | `/de/haeufige-fragen` |
| `/privacy` | `/es/privacidad` | `/de/datenschutz` |
| `/apps-for-fussy-eaters` | English only | English only |
| `/guides`, `/guides/food-chaining`, `/guides/responsive-feeding`, `/guides/division-of-responsibility` | English only | English only |

hreflang pairs (en-GB, es-ES, de-DE, x-default = en-GB) on the three translated page types. en-US is not built (optional; add a `Locale` in `src/content` and a path prefix `/us`, and use one en-US tag).

`npm run check` verifies: title/description lengths, one h1, canonical, hreflang reciprocity, JSON-LD parses, internal links, sitemap coverage, FAQPage schema, and a banned-word/emoji scan of the built text (calorie/diet/weight/portion, reward/bribe/clean-plate, dating wording, user counts, ratings, testimonials, photo-privacy wording).

## What needs Dave
1. **Domain**: register bitzi.app (NS lookup only so far, not WHOIS). Change `SITE_URL` in `src/site.ts` and `SITE_URL` in `scripts/prerender.mjs` if different.
2. **Hosting**: pick one (ReelMatch uses GitHub Pages; any static host works, `dist/` is the output; a custom 404 is `dist/404.html`). Nothing is deployed.
3. **Store links**: set `APP_STORE_URL` and `PLAY_STORE_URL` in `src/site.ts` at launch. The site says "coming soon" until then and has no badges.
4. **Real screenshots and an OG image**: none used. Add screenshots to the home page and a 1200x630 PNG for og:image / twitter:image once real captures exist (no mock UI was drawn).
5. **Privacy policy for the app**: the privacy page only covers the website and says the app policy comes with release. Decide what is stored and whether anything syncs (Supabase family sync question in `discovery.md`) before writing it. Do not add "photos never leave your phone" unless true. Legal review is yours.
6. **Contact email**: set `CONTACT_EMAIL` in `src/site.ts`; privacy page shows it once set.
7. **Named reviewer** (optional): "dietitian/health-visitor reviewed" can only be said once a named person reviews the content.
8. **Spanish and German native review**: es/de copy is written from the store listings but not checked by a native speaker.
9. **Sources**: NHS, HealthyChildren.org (AAP) and Ellyn Satter Institute URLs were opened and read on 2026-10-26 (see `SOURCES_CHECKED`); re-check them at launch. The food chaining attribution to Cheri Fraker's 2007 book is from memory, verify before relying on it. Competitor descriptions on the comparison page come from `discovery.md` store research, not from fresh tests; verify before launch.
10. **Search Console, GA4, IndexNow**: follow the `site-seo-loop` skill after deploy. No analytics is installed, so privacy copy says so; if you add GA4, update the privacy page first.

## Not done
No deploy, no domain purchase, no OpenSEO or paid tool calls, no indexing requests, no rank or AI-visibility baseline (needs a live site and your approval of costs). `llms.txt` effect is unverified.

## Scroll-scene home page

The home page is a sequence of scroll-scrubbed scenes (hills hero, meet the Bitzis, plate check, screen-free table, food chaining portal, celebration, closing). Headlines and copy are real HTML; video is decoration only.

- Engine: `src/lib/scrollEngine.ts` sets `--p` (0 to 1) per scene; CSS does the parallax and card slide-ins.
- Placeholders are pure CSS until you supply assets. To swap one in, add files to `public/assets/` and set `"enabled": true` in `public/assets/manifest.json`. No code changes.
- `prefers-reduced-motion`, no-JS and prerendered HTML get a static stacked layout; Data Saver gets posters.
- Prompts, filenames, resolutions and encoding commands: [ASSET-BRIEF.md](ASSET-BRIEF.md).
- Not verified: the Dribbble reference video could not be opened in the browser pane (blocked by the permission classifier), so the look follows the written scene description, not frames of the video.
