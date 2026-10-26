import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Locale } from "../content/types";
import { APP_STORE_URL, PLAY_STORE_URL } from "../site";
import { ASSET_BASE, loadManifest, type Manifest, type SceneId } from "../lib/manifest";
import { startScrollEngine } from "../lib/scrollEngine";

const ORDER: SceneId[] = ["hero", "meet", "plate", "table", "chaining", "celebration", "closing"];

function Media({ id, m }: { id: SceneId; m: Manifest | null }) {
  const e = m?.scenes[id];
  if (!e?.enabled) return null;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const small = matchMedia("(max-width: 700px)").matches;
  const poster = e.poster ? ASSET_BASE + e.poster : undefined;
  if (e.mode === "still" || !e.mp4) return poster ? <img className="media still" src={poster} alt="" /> : null;
  if (reduce || (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData) {
    return poster ? <img className="media" src={poster} alt="" /> : null;
  }
  const scrub = e.mode === "scrub";
  const mp4 = ASSET_BASE + ((small && e.mobile) || e.mp4 || "");
  return (
    <video className="media" muted playsInline preload="auto" poster={poster} loop={!scrub} autoPlay={!scrub} data-scrub={scrub ? "" : undefined}>
      {e.webm && !(small && e.mobile) && <source src={ASSET_BASE + e.webm} type="video/webm" />}
      <source src={mp4} type="video/mp4" />
    </video>
  );
}

function Char({ id, m }: { id: string; m: Manifest | null }) {
  const e = m?.characters[id];
  if (e?.enabled) return <img className={`char img c-${id}`} src={ASSET_BASE + e.src} alt="" />;
  return <span className={`char c-${id}`} aria-hidden="true"><i /></span>;
}

function Stores({ l }: { l: Locale }) {
  const item = (label: string, url: string | null) =>
    url ? <a className="btn" href={url}>{label}</a> : <span className="btn off" aria-disabled="true">{label}</span>;
  return (
    <div className="stores">
      {item("App Store", APP_STORE_URL)}
      {item("Google Play", PLAY_STORE_URL)}
    </div>
  );
}

const PREV: Record<string, string> = { en: "Previous character", es: "Personaje anterior", de: "Vorherige Figur" };
const NEXT: Record<string, string> = { en: "Next character", es: "Personaje siguiente", de: "Nächste Figur" };
function slide(btn: HTMLElement, dir: number) {
  const ul = btn.closest(".carousel")?.querySelector("ul");
  if (ul) ul.scrollBy({ left: dir * (ul.clientWidth * 0.6), behavior: "smooth" });
}

export function Scenes({ l }: { l: Locale }) {
  const s = l.home.scenes;
  const [m, setM] = useState<Manifest | null>(null);
  useEffect(() => {
    let stop = () => {};
    loadManifest().then((x) => {
      setM(x);
      requestAnimationFrame(() => { stop = startScrollEngine(); });
    });
    return () => stop();
  }, []);
  const has = (id: SceneId) => (m?.scenes[id]?.enabled ? " has-media" : "");

  return (
    <>
      <nav className="dots" aria-label={s.dotsLabel}>
        <ul>
          {ORDER.map((id) => (
            <li key={id}><a data-dot href={`#${id}`} aria-label={s.labels[id]} title={s.labels[id]} /></li>
          ))}
        </ul>
      </nav>

      <section id="hero" className={"scene hero" + has("hero")} data-scene style={{ ["--h" as string]: "170vh" }} aria-labelledby="h1">
        <div className="stage sky">
          <Media id="hero" m={m} />
          <div className="ph" aria-hidden="true">
            <i className="cloud pink" style={{ ["--x" as string]: "-4%", ["--y" as string]: "-2%", ["--d" as string]: "-5" }} />
            <i className="cloud pink" style={{ ["--x" as string]: "66%", ["--y" as string]: "-4%", ["--d" as string]: "-8" }} />
            <i className="cloud" style={{ ["--x" as string]: "34%", ["--y" as string]: "14%", ["--d" as string]: "-6" }} />
            <i className="orb o1" /><i className="orb o2" /><i className="orb o3" />
            <i className="hill h1" /><i className="hill h2" /><i className="hill h3" />
          </div>
          <div className="hero-copy">
            <h1 id="h1">{l.home.h1}<span className="sun-slot"><Char id="sun" m={m} /></span></h1>
            <p className="lede">{l.home.lede}</p>
            <p className="status">{l.ui.notReleased}</p>
            <p className="cta">
              <a className="btn" href="#meet">{s.heroPrimary}</a>
              <Link className="btn ghost" to={l.paths.faq}>{s.heroSecondary}</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="definition" aria-labelledby="what">
        <div className="wrap">
          <h2 id="what">{l.home.definitionH}</h2>
          <p>{l.home.definition}</p>
        </div>
      </section>

      <section id="meet" className={"scene meet" + has("meet")} data-scene style={{ ["--h" as string]: "280vh", ["--n" as string]: s.meet.cast.length }} aria-labelledby="meet-h">
        <div className="stage sky">
          <Media id="meet" m={m} />
          <div className="ph" aria-hidden="true">
            <i className="cloud pink" style={{ ["--x" as string]: "50%", ["--y" as string]: "-4%", ["--d" as string]: "-6" }} />
            <i className="hill h1" /><i className="hill h3" /><i className="orb o2" /><i className="orb big" />
          </div>
          <div className="meet-copy">
            <h2 id="meet-h">{s.meet.h}</h2>
            <p>{s.meet.p}</p>
          </div>
          <div className="carousel">
            <div className="car-nav">
              <button type="button" aria-label={PREV[l.lang]} onClick={(e) => slide(e.currentTarget, -1)}>&#8592;</button>
              <button type="button" aria-label={NEXT[l.lang]} onClick={(e) => slide(e.currentTarget, 1)}>&#8594;</button>
            </div>
            <ul className="cast">
              {s.meet.cast.map((c, i) => (
                <li key={c.id} className={`tone-${i % 4}`} style={{ ["--i" as string]: i }}>
                  <span className="mini"><Char id={c.id} m={m} /></span>
                  <div><h3>{c.name}</h3><p>{c.bio}</p></div>
                  <span className="go" aria-hidden="true"><svg viewBox="0 0 12 12" width="14" height="14"><path d="M2 10 10 2M4 2h6v6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="plate" className={"scene plate" + has("plate")} data-scene style={{ ["--h" as string]: "220vh" }} aria-labelledby="plate-h">
        <div className="stage sky dusk">
          <Media id="plate" m={m} />
          <div className="ph" aria-hidden="true"><i className="cloud" style={{ ["--x" as string]: "55%", ["--y" as string]: "70%", ["--d" as string]: "-8" }} /><i className="hill h1" /></div>
          <div className="copy"><h2 id="plate-h">{s.plate.h}</h2><p>{s.plate.p}</p></div>
          <div className="plate-art" aria-hidden="true"><i className="frame" /><i className="dish" /><i className="scan" /></div>
        </div>
      </section>

      <section id="table" className={"scene table" + has("table")} data-scene style={{ ["--h" as string]: "200vh" }} aria-labelledby="table-h">
        <div className="stage sky night">
          <Media id="table" m={m} />
          <div className="ph" aria-hidden="true"><i className="orb o1" /><i className="orb o3" /><i className="hill h2" /></div>
          <div className="copy"><h2 id="table-h">{s.table.h}</h2><p>{s.table.p}</p></div>
          <div className="phone-art" aria-hidden="true"><i className="slab" /></div>
        </div>
      </section>

      <section id="chaining" className={"scene chaining" + has("chaining")} data-scene style={{ ["--h" as string]: "260vh" }} aria-labelledby="chain-h">
        <div className="stage portal">
          <Media id="chaining" m={m} />
          <div className="ph" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((n) => <i key={n} className="ring" style={{ ["--n" as string]: n }} />)}
          </div>
          <div className="copy"><h2 id="chain-h">{s.chaining.h}</h2><p>{s.chaining.p}</p></div>
          <ol className="chips">
            {s.chaining.chips.map((c, i) => <li key={c} style={{ ["--i" as string]: i }}>{c}</li>)}
          </ol>
        </div>
      </section>

      <section id="celebration" className={"scene celebration" + has("celebration")} data-scene style={{ ["--h" as string]: "220vh" }} aria-labelledby="cel-h">
        <div className="stage sky">
          <Media id="celebration" m={m} />
          <div className="ph" aria-hidden="true">
            <i className="hill h1" /><i className="hill h2" />
            <div className="burst">{Array.from({ length: 10 }, (_, n) => <i key={n} className="orb b" style={{ ["--a" as string]: `${n * 36}deg`, ["--n" as string]: n % 3 }} />)}</div>
            <div className="hero-char"><Char id="pip" m={m} /></div>
          </div>
          <div className="copy"><h2 id="cel-h">{s.celebration.h}</h2><p>{s.celebration.p}</p></div>
        </div>
      </section>

      <section id="closing" className={"scene closing" + has("closing")} data-scene style={{ ["--h" as string]: "170vh" }} aria-labelledby="close-h">
        <div className="stage sky bright">
          <Media id="closing" m={m} />
          <div className="ph" aria-hidden="true">
            <i className="cloud big" style={{ ["--x" as string]: "-5%", ["--y" as string]: "62%", ["--d" as string]: "-14" }} />
            <i className="cloud big" style={{ ["--x" as string]: "50%", ["--y" as string]: "70%", ["--d" as string]: "-18" }} />
            <i className="icon-card"><b>B</b></i>
          </div>
          <div className="copy center">
            <h2 id="close-h">{s.closing.h}</h2>
            <p>{s.closing.p}</p>
            <Stores l={l} />
          </div>
        </div>
      </section>
    </>
  );
}
