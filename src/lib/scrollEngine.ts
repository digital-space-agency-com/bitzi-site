/**
 * Scroll-scrubbed scene engine. Each [data-scene] is a tall section holding a sticky stage.
 * Sets --p (0..1) on the section, scrubs video[data-scrub] and marks the active dot link.
 * Reduced motion never starts it (CSS shows the static layout instead).
 */
export function startScrollEngine(): () => void {
  const scenes = [...document.querySelectorAll<HTMLElement>("[data-scene]")];
  const dots = [...document.querySelectorAll<HTMLAnchorElement>("[data-dot]")];
  if (!scenes.length || matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  let raf = 0;

  const update = () => {
    raf = 0;
    const vh = innerHeight;
    let active = 0;
    scenes.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      if (r.top <= vh * 0.5) active = i;
      if (r.bottom < -vh || r.top > vh * 2) return;
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - vh)));
      el.style.setProperty("--p", p.toFixed(4));
      el.querySelectorAll<HTMLVideoElement>("video[data-scrub]").forEach((v) => {
        if (v.readyState < 1 || !v.duration) return;
        const t = p * v.duration;
        if (Math.abs(v.currentTime - t) > 0.03) v.currentTime = t;
      });
    });
    dots.forEach((a, i) => {
      if (i === active) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  };
  const tick = () => { if (!raf) raf = requestAnimationFrame(update); };

  addEventListener("scroll", tick, { passive: true });
  addEventListener("resize", tick);
  update();
  return () => {
    removeEventListener("scroll", tick);
    removeEventListener("resize", tick);
    cancelAnimationFrame(raf);
  };
}
