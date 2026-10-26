// Generates Bitzi stills and characters with Gemini image models (Nano Banana).
// Dry run by default: prints what it would send. Add --go to spend credits.
//   GEMINI_API_KEY=... node scripts/generate-images.mjs --go [--only pip,hero] [--n 3]
// Output goes to art-drafts/ (not public/). Review, then convert and move per ASSET-BRIEF.md.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const args = process.argv.slice(2);
const go = args.includes("--go");
const opt = (k, d) => (args.includes(k) ? args[args.indexOf(k) + 1] : d);
const only = opt("--only", "") ? opt("--only", "").split(",") : null;
const n = Number(opt("--n", "2"));
const MODEL = process.env.GEMINI_IMAGE_MODEL || "gemini-2.5-flash-image";

const STYLE = "handmade needle-felted wool toy look, visible fuzzy fibres and stitched seams, slightly glossy highlights, soft studio light with rim light, moss-green speckled felt hills with tiny blue flowers, glossy pink and lilac spheres, puffy pink and white clouds, saturated blue sky";
const NEG = "No text, no letters, no logos, no people, no children, no faces of real people, no calorie or diet imagery, no trophies, no stars, no confetti, no emoji.";
const CHAR_STYLE = "handmade needle-felted wool toy look, visible fuzzy fibres and stitched seams, slightly glossy highlights, soft studio light with rim light";
const FACE = "wool-toy doll, round face, two big round glossy eyes with a white highlight, small stitched smile, short stubby arms and legs";
const CHAR_BG = "full body, centred, standing, on a plain flat bright green (#00ff00) background with nothing else, so the background can be removed";

const chars = {
  pip: "a pea pod with three round peas peeking out of the top, soft green wool",
  tomo: "a round tomato, warm red wool, small green felt leaf cap",
  bram: "a broccoli with fluffy dark green florets and a short pale stem body",
  pearl: "a pear, butter-yellow wool with a soft green blush and a tiny brown stalk",
  sun: "a small smiling sun, butter-yellow wool, short soft rays",
  dot: "a pasta shell, cream wool with a pink inner swirl",
};
const scenes = {
  hero: "wide landscape, rolling moss-green felt hills in the lower third, three large glossy spheres at different depths (rose, lilac, butter yellow), puffy pink and white clouds, saturated blue sky, clear empty space centre-left for a headline",
  meet: "the same hills at dusk, slate and violet sky, soft glowing spheres, one large glossy pink-purple sphere on the right, open space across the middle",
  plate: "warm dusk sky, one big round felted plate seen from above on a moss hill, abstract soft colour zones in green, orange and cream, no food detail",
  chaining: "a swirling tunnel portal made of concentric felted rings in lilac, violet and blush, glowing centre, depth",
  celebration: "bright sky, felt hills, glossy spheres in rose, lilac and butter yellow bursting outward from the centre, joyful but calm",
};
const jobs = [
  ...Object.entries(chars).map(([id, d]) => ({ id: `char-${id}`, key: id, ratio: "1:1", ref: id !== "pip" ? "char-pip" : null,
    prompt: `${d}. ${FACE}. ${CHAR_BG}. ${CHAR_STYLE}. ${NEG}` })),
  ...Object.entries(scenes).map(([id, d]) => ({ id: `scene-${id}`, key: id, ratio: "16:9", ref: null, prompt: `${d}. ${STYLE}. ${NEG}` })),
].filter((j) => !only || only.includes(j.key));

console.log(`Model ${MODEL}; ${jobs.length} jobs x ${n} variants = ${jobs.length * n} images${go ? "" : " (dry run, pass --go)"}`);
if (!go) { for (const j of jobs) console.log(`\n[${j.id}] ${j.ratio}${j.ref ? " ref " + j.ref : ""}\n${j.prompt}`); process.exit(0); }
const key = process.env.GEMINI_API_KEY;
if (!key) { console.error("Set GEMINI_API_KEY"); process.exit(1); }
await mkdir("art-drafts", { recursive: true });

for (const j of jobs) {
  const refPath = j.ref ? `art-drafts/${j.ref}-1.png` : null;
  const parts = [{ text: j.prompt + (refPath ? " Match the character style, eyes and wool texture of the attached reference." : "") }];
  if (refPath && existsSync(refPath)) parts.push({ inlineData: { mimeType: "image/png", data: (await readFile(refPath)).toString("base64") } });
  for (let i = 1; i <= n; i++) {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
      method: "POST", headers: { "x-goog-api-key": key, "content-type": "application/json" },
      body: JSON.stringify({ contents: [{ parts }], generationConfig: { responseModalities: ["IMAGE"], imageConfig: { aspectRatio: j.ratio } } }),
    });
    const body = await res.json();
    const img = body.candidates?.[0]?.content?.parts?.find((p) => p.inlineData)?.inlineData;
    if (!img) { console.error(`${j.id}-${i}: no image`, JSON.stringify(body).slice(0, 300)); continue; }
    await writeFile(`art-drafts/${j.id}-${i}.png`, Buffer.from(img.data, "base64"));
    console.log(`wrote art-drafts/${j.id}-${i}.png`);
  }
}
