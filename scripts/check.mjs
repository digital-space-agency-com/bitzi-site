/** Basic SEO and red-line check over the built dist/. Exits 1 on failure. */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(resolve(dirname(fileURLToPath(import.meta.url)), ".."), "dist");
const SITE = "https://bitzi.app";
const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") && files.push(p);
  }
})(dist);

const banned = [
  /calor/i, /\bdiets?\b/i, /\bdieta\b/i, /\bweight\b/i, /\bpeso\b/i, /gewicht/i, /portion/i, /porci[oó]n/i,
  /\breward/i, /\bbribe/i, /clean (your )?plate/i, /clear(ing)? (your|the) plate/i, /plato limpio/i, /leer essen/i,
  /tinder/i, /date night/i, /perfect match/i, /swipe/i, /testimonial/i, /\d+\s*(stars|ratings|reviews)/i,
  /\b\d[\d,.]*\s*(\+\s*)?(parents|families|users|downloads)\b/i, /never leave(s)? (your|the) phone/i,
  /your photos?/i, /on[- ]device/i, /processed on your phone/i, /dietitian|paediatric(ian)? approved|pediatric(ian)? approved/i,
  /\p{Extended_Pictographic}/u,
];
const errs = [];
const err = (f, m) => errs.push(`${f.replace(dist, "")}: ${m}`);
const meta = new Map();

for (const f of files) {
  const h = readFileSync(f, "utf8");
  const text = h.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
  if (f.endsWith("404.html")) continue;
  const title = h.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  const desc = h.match(/<meta name="description" content="([^"]*)"/)?.[1];
  const canon = h.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  if (!title || title.length > 60) err(f, `title missing or >60 (${title?.length})`);
  if (!desc || desc.length < 70 || desc.length > 160) err(f, `description length ${desc?.length}`);
  if (!canon?.startsWith(SITE)) err(f, "canonical missing");
  if ((h.match(/<h1[ >]/g) ?? []).length !== 1) err(f, "need exactly one h1");
  if (!/<html lang="[a-z]{2}-[A-Z]{2}">/.test(h)) err(f, "html lang missing");
  if (/<img(?![^>]*alt=)/.test(h)) err(f, "img without alt");
  if (/<h3/.test(h) && !/<h2/.test(h)) err(f, "heading order");
  for (const b of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(b[1].replace(/\\u003c/g, "<").replace(/\\u003e/g, ">").replace(/\\u0026/g, "&")); } catch { err(f, "invalid JSON-LD"); }
  }
  for (const re of banned) { const m = text.match(re); if (m) err(f, `banned: ${m[0]}`); }
  for (const m of h.matchAll(/href="(\/[^"#]*)"/g)) {
    const p = m[1];
    if (/\.(svg|xml|txt|ico|css|js)$/.test(p)) continue;
    const t = join(dist, p, p.endsWith("/") ? "" : "", p === "/" ? "" : "");
    if (!existsSync(join(dist, p, "index.html")) && !existsSync(join(dist, p))) err(f, `broken link ${p}`);
  }
  const hl = [...h.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]);
  meta.set(canon, { f, hl, title, desc });
}
// hreflang reciprocity and uniqueness
for (const [canon, { f, hl }] of meta) {
  if (!hl.some(([, u]) => u === canon)) err(f, "hreflang set lacks self reference");
  for (const [, u] of hl) {
    const o = meta.get(u);
    if (!o) err(f, `hreflang target not built: ${u}`);
    else if (!o.hl.some(([, x]) => x === canon)) err(f, `hreflang not reciprocal with ${u}`);
  }
}
const seen = new Set();
for (const [, { f, title, desc }] of meta) {
  if (seen.has(title)) err(f, "duplicate title"); seen.add(title);
  if (seen.has(desc)) err(f, "duplicate description"); seen.add(desc);
}
const sm = readFileSync(join(dist, "sitemap.xml"), "utf8");
for (const c of meta.keys()) if (!sm.includes(`<loc>${c}</loc>`)) errs.push(`sitemap missing ${c}`);
for (const f of ["robots.txt", "llms.txt", "favicon.svg"]) if (!existsSync(join(dist, f))) errs.push(`missing ${f}`);
const faq = readFileSync(join(dist, "faq/index.html"), "utf8");
if (!faq.includes('"FAQPage"')) errs.push("faq: FAQPage schema missing");
const home = readFileSync(join(dist, "index.html"), "utf8");
if (!/What is Bitzi\?/.test(home)) errs.push("home: definition block missing");
for (const id of ["hero","meet","plate","table","chaining","celebration","closing"]) if (!home.includes(`id="${id}"`)) errs.push(`home: scene ${id} missing`);
if (/<video/.test(home)) errs.push("home: video must be injected client-side, not prerendered");

console.log(`${meta.size} pages checked`);
if (errs.length) { console.error(errs.join("\n")); process.exit(1); }
console.log("SEO and red-line checks passed");
