import { SITE_URL, SITE_NAME, LAST_MOD } from "../site";
import { en } from "../content/en";
import { es } from "../content/es";
import { de } from "../content/de";
import { articles, guidesIndex } from "../content/articles";
import { compare } from "../content/compare";
import type { Locale } from "../content/types";

export type PageKind = "home" | "faq" | "privacy" | "compare" | "guides" | "article";
export type Alternate = { hreflang: string; path: string };
export type Page = {
  path: string;
  kind: PageKind;
  lang: Locale["lang"];
  htmlLang: string;
  ogLocale: string;
  title: string;
  description: string;
  alternates: Alternate[];
  jsonLd: object[];
  lastmod: string;
  slug?: string;
};

export const locales: Locale[] = [en, es, de];
export const url = (path: string) => `${SITE_URL}${path}`;

const org = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#org`,
  name: SITE_NAME,
  url: SITE_URL,
};

const translated = (key: "home" | "faq" | "privacy"): Alternate[] => [
  ...locales.map((l) => ({ hreflang: l.hreflang, path: l.paths[key] })),
  { hreflang: "x-default", path: en.paths[key] },
];
const single = (path: string, hreflang = "en-GB"): Alternate[] => [
  { hreflang, path },
  { hreflang: "x-default", path },
];

const crumb = (items: [string, string][]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: url(path),
  })),
});

const pages: Page[] = [];

for (const l of locales) {
  const base = { lang: l.lang, htmlLang: l.htmlLang, ogLocale: l.ogLocale, lastmod: LAST_MOD };
  pages.push({
    ...base,
    path: l.paths.home,
    kind: "home",
    title: l.home.title,
    description: l.home.description,
    alternates: translated("home"),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@graph": [
          org,
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#site`,
            url: SITE_URL,
            name: SITE_NAME,
            inLanguage: l.hreflang,
            publisher: { "@id": `${SITE_URL}/#org` },
          },
          {
            "@type": "MobileApplication",
            name: SITE_NAME,
            description: l.home.definition,
            applicationCategory: "LifestyleApplication",
            operatingSystem: "iOS, Android",
            inLanguage: l.hreflang,
            publisher: { "@id": `${SITE_URL}/#org` },
          },
        ],
      },
    ],
  });
  pages.push({
    ...base,
    path: l.paths.faq,
    kind: "faq",
    title: l.faq.title,
    description: l.faq.description,
    alternates: translated("faq"),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        inLanguage: l.hreflang,
        mainEntity: l.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  });
  pages.push({
    ...base,
    path: l.paths.privacy,
    kind: "privacy",
    title: l.privacy.title,
    description: l.privacy.description,
    alternates: translated("privacy"),
    jsonLd: [],
  });
}

const enBase = { lang: "en" as const, htmlLang: en.htmlLang, ogLocale: en.ogLocale, lastmod: LAST_MOD };

pages.push({
  ...enBase,
  path: compare.path,
  kind: "compare",
  title: compare.title,
  description: compare.description,
  alternates: single(compare.path),
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: compare.h1,
      itemListElement: compare.rows.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: r.name,
        description: `${r.kind}. ${r.good} ${r.limits}`,
      })),
    },
    crumb([["Home", "/"], [compare.h1, compare.path]]),
  ],
});

pages.push({
  ...enBase,
  path: guidesIndex.path,
  kind: "guides",
  title: guidesIndex.title,
  description: guidesIndex.description,
  alternates: single(guidesIndex.path),
  jsonLd: [crumb([["Home", "/"], [guidesIndex.h1, guidesIndex.path]])],
});

for (const a of articles) {
  pages.push({
    ...enBase,
    path: a.path,
    kind: "article",
    slug: a.slug,
    title: a.title,
    description: a.description,
    alternates: single(a.path),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: a.h1,
        description: a.description,
        inLanguage: "en-GB",
        datePublished: LAST_MOD,
        dateModified: LAST_MOD,
        author: { "@id": `${SITE_URL}/#org` },
        publisher: org,
        mainEntityOfPage: url(a.path),
        citation: a.sources.map((s) => s.url),
      },
      crumb([["Home", "/"], [guidesIndex.h1, guidesIndex.path], [a.h1, a.path]]),
    ],
  });
}

export { pages };
export const pageByPath = (p: string) => pages.find((x) => x.path === p);
