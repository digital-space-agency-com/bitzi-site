/**
 * Renders every route to static HTML after the Vite builds, then writes
 * sitemap.xml, robots.txt and llms.txt from the same page data.
 * Run via `npm run build`.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

process.env.NODE_ENV ??= "production";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");
const { render, pages } = await import(
  pathToFileURL(join(root, "dist-ssr", "entry-server.js")).href
);

const SITE_URL = "https://bitzi.app";
const template = readFileSync(join(distDir, "index.html"), "utf8");

const esc = (v) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const jsonLd = (d) =>
  `<script type="application/ld+json">${JSON.stringify(d)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")}</script>`;
const abs = (p) => `${SITE_URL}${p}`;

function head(page) {
  const title = esc(page.title);
  const desc = esc(page.description);
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${desc}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<link rel="canonical" href="${abs(page.path)}" />`,
    ...page.alternates.map(
      (a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${abs(a.path)}" />`,
    ),
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Bitzi" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${desc}" />`,
    `<meta property="og:url" content="${abs(page.path)}" />`,
    `<meta property="og:locale" content="${page.ogLocale}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${desc}" />`,
    ...page.jsonLd.map(jsonLd),
  ].join("\n    ");
}

function outFile(path) {
  if (path === "/") return join(distDir, "index.html");
  const rel = path.replace(/^\/|\/$/g, "");
  return join(distDir, rel, "index.html");
}

for (const page of pages) {
  let html = template
    .replace("<!--seo:head-->", head(page))
    .replace('<html lang="en-GB">', `<html lang="${page.htmlLang}">`)
    .replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`);
  const file = outFile(page.path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

// 404 page: valid shell, noindex.
writeFileSync(
  join(distDir, "404.html"),
  template
    .replace(
      "<!--seo:head-->",
      `<title>Page not found | Bitzi</title>\n    <meta name="robots" content="noindex" />`,
    )
    .replace(
      '<div id="root"></div>',
      '<div id="root"><main class="wrap"><h1>Page not found</h1><p><a href="/">Back to Bitzi</a></p></main></div>',
    ),
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (p) => `  <url>
    <loc>${abs(p.path)}</loc>
    <lastmod>${p.lastmod}</lastmod>
${p.alternates
  .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${abs(a.path)}" />`)
  .join("\n")}
  </url>`,
  )
  .join("\n")}
</urlset>
`;
writeFileSync(join(distDir, "sitemap.xml"), sitemap);

writeFileSync(
  join(distDir, "robots.txt"),
  `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`,
);

const en = pages.filter((p) => p.lang === "en");
writeFileSync(
  join(distDir, "llms.txt"),
  `# Bitzi

> Bitzi is a parent-held mobile app for children aged 18 months to 7 years that helps you serve a plate that suits their age and keep the meal calm and screen-free. You take a photo of the plate for a rough, friendly guide, then hold up the phone for a short celebration of trying, sitting at the table or eating. It is not medical advice and is not yet released.

## Pages
${en.map((p) => `- [${p.title}](${abs(p.path)}): ${p.description}`).join("\n")}

## Other languages
- [Español](${abs("/es/")})
- [Deutsch](${abs("/de/")})
`,
);
console.log(`Prerendered ${pages.length} pages`);
