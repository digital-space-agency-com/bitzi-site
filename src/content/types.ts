export type Faq = { q: string; a: string };
export type Section = { h: string; p?: string[]; ul?: string[] };
export type Source = { label: string; url: string; note?: string };

export type Locale = {
  lang: "en" | "es" | "de";
  hreflang: "en-GB" | "es-ES" | "de-DE";
  htmlLang: string;
  ogLocale: string;
  label: string;
  base: string; // path prefix, "" for English
  paths: { home: string; faq: string; privacy: string };
  ui: {
    skip: string;
    nav: { home: string; faq: string; privacy: string; compare?: string; guides?: string };
    notReleased: string;
    footerNote: string;
    footerTitle: string;
    onlyEnglish?: string;
    languageLabel: string;
  };
  home: {
    title: string;
    description: string;
    h1: string;
    lede: string;
    definitionH: string;
    definition: string;
    stepsH: string;
    steps: { h: string; p: string }[];
    principlesH: string;
    principles: { h: string; p: string }[];
    limitsH: string;
    limits: string[];
    faqH: string;
    faqCta: string;
    moreH?: string;
    more?: { label: string; path: string }[];
  };
  faq: { title: string; description: string; h1: string; intro: string; items: Faq[] };
  privacy: { title: string; description: string; h1: string; updated: string; sections: Section[] };
};
