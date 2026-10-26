import { Link } from "react-router-dom";
import { FaqList } from "./Faq";
import { Scenes } from "./Scenes";
import { locales, type Page } from "../seo/pages";
import { articles, guidesIndex } from "../content/articles";
import { compare } from "../content/compare";
import { SOURCES_CHECKED } from "../site";
import type { Section } from "../content/types";

const loc = (page: Page) => locales.find((l) => l.lang === page.lang)!;

function Sections({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.h}>
          <h2>{s.h}</h2>
          {s.p?.map((p) => <p key={p}>{p}</p>)}
          {s.ul && <ul>{s.ul.map((i) => <li key={i}>{i}</li>)}</ul>}
        </section>
      ))}
    </>
  );
}

export function Home({ page }: { page: Page }) {
  const l = loc(page);
  const h = l.home;
  return (
    <>
      <Scenes l={l} />
      <div className="wrap details">
        <section>
          <h2>{h.principlesH}</h2>
          <div className="grid">
            {h.principles.map((p) => (
              <div key={p.h} className="card"><h3>{p.h}</h3><p>{p.p}</p></div>
            ))}
          </div>
        </section>
        <section>
          <h2>{h.limitsH}</h2>
          <ul className="limit-pills">{h.limits.map((x) => <li key={x}>{x}</li>)}</ul>
        </section>
        <section>
          <h2>{h.faqH}</h2>
          <FaqList items={l.faq.items.slice(0, 4)} />
          <p><Link className="pill-link" to={l.paths.faq}>{h.faqCta}</Link></p>
        </section>
        {h.more && (
          <section>
            <h2>{h.moreH}</h2>
            <ul className="more-links">{h.more.map((m) => <li key={m.path}><Link to={m.path}>{m.label}</Link></li>)}</ul>
          </section>
        )}
      </div>
    </>
  );
}

export function FaqPage({ page }: { page: Page }) {
  const l = loc(page);
  return (
    <>
      <header className="page-head"><h1>{l.faq.h1}</h1><p className="lede">{l.faq.intro}</p></header>
      <FaqList items={l.faq.items} />
    </>
  );
}

export function PrivacyPage({ page }: { page: Page }) {
  const l = loc(page);
  return (
    <>
      <header className="page-head"><h1>{l.privacy.h1}</h1><p className="lede">{l.privacy.updated}</p></header>
      <Sections sections={l.privacy.sections} />
    </>
  );
}

export function ComparePage() {
  return (
    <>
      <header className="page-head"><h1>{compare.h1}</h1><p className="lede">{compare.lede}</p><p className="note">{compare.disclosure}</p></header>
      <div className="table-wrap">
        <table>
          <caption className="sr">Kinds of apps for fussy eaters and what each does</caption>
          <thead>
            <tr><th scope="col">App or type</th><th scope="col">Focus</th><th scope="col">Good for</th><th scope="col">Limits</th></tr>
          </thead>
          <tbody>
            {compare.rows.map((r) => (
              <tr key={r.name}>
                <th scope="row">{r.name}</th><td>{r.kind}</td><td>{r.good}</td><td>{r.limits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section>
        <h2>{compare.howToChooseH}</h2>
        <ul>{compare.howToChoose.map((x) => <li key={x}>{x}</li>)}</ul>
      </section>
      <section>
        <p>{compare.closing}</p>
        <ul className="more-links">
          {articles.map((a) => <li key={a.slug}><Link to={a.path}>{a.h1}</Link></li>)}
        </ul>
      </section>
    </>
  );
}

export function GuidesPage() {
  return (
    <>
      <header className="page-head"><h1>{guidesIndex.h1}</h1><p className="lede">{guidesIndex.lede}</p></header>
      <ul className="guide-list">
        {articles.map((a) => (
          <li key={a.slug}>
            <h2><Link to={a.path}>{a.h1}</Link></h2>
            <p>{a.lede}</p>
            <Link className="pill-link" to={a.path}>Read the guide</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export function ArticlePage({ page }: { page: Page }) {
  const a = articles.find((x) => x.slug === page.slug)!;
  return (
    <article>
      <header className="page-head">
        <p className="crumbs"><Link className="pill-link" to="/guides">← Guides</Link></p>
        <h1>{a.h1}</h1>
        <p className="lede">{a.lede}</p>
      </header>
      <Sections sections={a.sections} />
      <section>
        <h2>Where Bitzi fits</h2>
        <p>{a.bitzi}</p>
      </section>
      <section>
        <h2>Sources</h2>
        <ul className="more-links">
          {a.sources.map((s) => (
            <li key={s.url}><a href={s.url} rel="noopener">{s.label}</a></li>
          ))}
        </ul>
        <p className="small">Sources read on {SOURCES_CHECKED}. Pages may have changed since. This guide is general information, not medical advice.</p>
      </section>
    </article>
  );
}
