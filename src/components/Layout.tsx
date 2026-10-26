import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { en } from "../content/en";
import { APP_STORE_URL, PLAY_STORE_URL } from "../site";
import { locales, type Page } from "../seo/pages";

export function Layout({ page, children }: { page: Page; children: ReactNode }) {
  const l = locales.find((x) => x.lang === page.lang)!;
  const homeLangs = page.alternates.filter((a) => a.hreflang !== "x-default");
  const nav = [
    { to: l.paths.home, label: l.ui.nav.home },
    ...(l.lang === "en" ? [{ to: "/apps-for-fussy-eaters", label: en.ui.nav.compare! }] : []),
    ...(l.lang === "en" ? [{ to: "/guides", label: en.ui.nav.guides! }] : []),
    { to: l.paths.faq, label: l.ui.nav.faq },
    { to: l.paths.privacy, label: l.ui.nav.privacy },
  ];
  return (
    <>
      <a className="skip" href="#main">{l.ui.skip}</a>
      <header className="site-header">
        <div className="bar">
          <div className="side">
            <span className="chip" aria-hidden="true">B</span>
            <nav aria-label="Main">
              <ul>
                {nav.slice(0, Math.ceil(nav.length / 2)).map((n) => (
                  <li key={n.to}><Link to={n.to} aria-current={n.to === page.path ? "page" : undefined}>{n.label}</Link></li>
                ))}
              </ul>
            </nav>
          </div>
          <Link to={l.paths.home} className="brand" aria-label="Bitzi">
            Bit<span>zi</span>
          </Link>
          <div className="side end">
            <nav aria-label={l.ui.nav.home + " 2"}>
              <ul>
                {nav.slice(Math.ceil(nav.length / 2)).map((n) => (
                  <li key={n.to}><Link to={n.to} aria-current={n.to === page.path ? "page" : undefined}>{n.label}</Link></li>
                ))}
              </ul>
            </nav>
            {homeLangs.length > 1 && (
              <nav aria-label={l.ui.languageLabel} className="langs">
                <ul>
                  {homeLangs.map((a) => {
                    const t = locales.find((x) => x.hreflang === a.hreflang)!;
                    return (
                      <li key={a.hreflang}>
                        <a href={a.path} lang={t.htmlLang} hrefLang={a.hreflang} aria-label={t.label} aria-current={t.lang === l.lang ? "true" : undefined}>
                          {t.lang.toUpperCase()}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </header>
      <main id="main" className={page.kind === "home" ? "home" : "wrap"}>{children}</main>
      <footer className="site-footer">
        <div className="wrap">
          <p>{APP_STORE_URL || PLAY_STORE_URL ? <strong>{l.ui.footerTitle}</strong> : <><strong>{l.ui.footerTitle}</strong>{" · "}{l.ui.notReleased}</>}</p>
          <p className="small">{l.ui.footerNote}</p>
          {l.ui.onlyEnglish && <p className="small">{l.ui.onlyEnglish}</p>}
          <p className="small">
            {nav.map((n, i) => (
              <span key={n.to}>
                {i > 0 && " · "}
                <Link to={n.to}>{n.label}</Link>
              </span>
            ))}
          </p>
        </div>
      </footer>
    </>
  );
}
