# Bitzi asset brief

Prompt pack for the scroll-driven home page. Run these in Midjourney (stills), then Runway or Kling (image to video). Drop the files into `public/assets/`, set `"enabled": true` for that slot in `public/assets/manifest.json`, rebuild. No code changes.

Until a slot is enabled the site shows CSS placeholders (gradient hills, glossy spheres, clouds, blob characters).

## Generate these first

1. **Style anchor still** (`hero` still, section 3). Everything else references it with `--sref`.
2. **Five character stills** (section 4). Pip first, then the rest with `--oref` or `--cref` on Pip's approved frame for the shared look.
3. **Hero loop** (`scenes/hero.mp4`). Biggest visual win, first thing visitors see.
4. **Portal fly-through** (`scenes/chaining.mp4`).
5. **Celebration burst** (`scenes/celebration.mp4`).
6. The rest: meet, plate, table, closing.

Budget guide: roughly 25 stills and 7 to 14 video generations if you take 1 to 2 attempts per clip.

## 1. Red lines (apply to every prompt)

Include these in every prompt as negatives and check every output against them.

- No real or realistic children, no human faces. Food characters only.
- No calorie, diet, weight or portion imagery: no scales, measuring tapes, rulers, numbers on plates, nutrition labels.
- No reward or prize imagery: no trophies, medals, gold stars, podiums, gift boxes handed over for eating, confetti falling because a plate is empty.
- No clean-plate imagery: no empty plate shown as the goal, no "all gone" framing. Plates in scenes are full, half-eaten or abstract, never presented as finished-and-good.
- Nothing that makes food look like a punishment: no frowning veg, no characters being pushed, hidden or disguised.
- No text, logos, brand marks, real app UI, or screens in frame. The site adds all text.
- No emoji styling, no star ratings, no counters.
- No dating-app or swipe imagery.

Midjourney negative suffix to paste on every prompt:

```
--no text, letters, logo, human, child, face of a person, scale, ruler, trophy, medal, star badge, gift box, calories, numbers, screen, phone
```

(The phone is added by CSS in the plate and table scenes. If you want a phone in the table scene video, generate it separately and remove `phone` from `--no` for that prompt only.)

## 2. Style sheet

One look, every asset.

- **Material:** needle-felted wool toys. Visible fuzzy fibres, tiny stitch seams, slightly uneven hand-made shapes. Real wool texture, not plastic, not clay.
- **Lighting:** soft studio light, large diffused key from upper left, gentle fill, warm bounce from below, no hard shadows.
- **Camera:** 35mm equivalent, eye level, shallow depth of field (f/2.8 look), subject sharp, background softly blurred. Same camera height and lens in every scene.
- **World:** fuzzy moss-green felt hills, glossy pastel glass spheres (pink, lilac, butter yellow) scattered like toys, puffy cotton-wool clouds, pale blue sky shading to blush at the horizon. Dusk and portal scenes shift the sky to slate and violet.
- **Palette** (match the site): slate `#7885AA`, forest `#0B1C05`, olive `#4E540C`, blush `#E7D9E2`, sky `#4D99F9`, royal `#325FDD`, moss `#AEA417`, rose `#AF576C`. Characters add their own food colour.
- **Mood:** calm, playful, slightly dreamy. Never frantic, never "level up".

Style paragraph to paste at the start of every prompt:

```
handmade needle-felted wool toy diorama, visible fuzzy wool fibres and stitched seams, soft diffused studio lighting, shallow depth of field, 35mm lens, fuzzy moss-green felt hills, glossy pastel glass spheres, puffy cotton-wool clouds, palette of slate blue, forest green, olive, blush pink, sky blue, rose, calm and playful, photographed miniature
```

## 3. Scene stills (Midjourney)

Create the anchor still first. Approve one, then use it as `--sref <url>` for everything else (add `--sw 200` if the style drifts).

| Slot | Prompt (after the style paragraph) | Aspect |
|---|---|---|
| hero | `wide landscape, rolling moss-green felt hills in the lower third, three large glossy spheres floating at different depths (rose, lilac, butter yellow), puffy cotton clouds, pale blue sky, clear empty centre-left for headline space --ar 16:9 --v 7 --style raw` | 16:9 |
| meet | `same hills at dusk, slate and violet sky, soft glowing spheres, open space on the right third, small felted food characters arriving over the hill crest in the left two thirds --ar 16:9` | 16:9 |
| plate | `warm dusk sky, one big round ceramic-look felted plate seen from above on a moss hill, abstract soft colour zones in green, orange and cream, no food detail, no numbers --ar 16:9` | 16:9 |
| table | `night-blue hills, a single large softly glowing pink glass sphere high in the frame, cosy and quiet, empty foreground --ar 16:9` | 16:9 |
| chaining | `a swirling tunnel portal made of concentric felted rings in lilac, violet and blush, glowing centre, depth, one small felted character floating in front --ar 16:9` | 16:9 |
| celebration | `bright sky, felt hills, glossy spheres in rose, lilac and butter yellow bursting outward from the centre, joyful but calm, no confetti, no trophies --ar 16:9` | 16:9 |
| closing | `flying above a thick sea of cotton-wool clouds, bright sky blue gradient to white at the horizon, one large glossy lilac-and-blush rounded-square icon card floating, no letters on it --ar 16:9` | 16:9 |

Portrait versions for mobile: repeat each prompt with `--ar 9:16` and the same `--sref`, keeping the headline space on the lower third.

## 4. Cast

Five original characters. Each has a one-line personality that never involves eating well, prizes or finishing food. Colours are suggestions.

| id | Character | Look | Personality |
|---|---|---|---|
| `pip` | Pip | felted pea pod, soft green, three round peas peeking out, tiny curly tendril | curious |
| `tomo` | Tomo | round felted tomato, warm red, little green leaf cap | friendly waver |
| `bram` | Bram | felted broccoli, deep green, fluffy florets like a tree, stout stem body | steady, small steps |
| `pearl` | Pearl | felted pear, butter-yellow, soft green blush, tiny stalk | sociable |
| `dot` | Dot | felted pasta shell, cream with a pink inner swirl | cheerful |

All have: two small black bead eyes, a small stitched smile, short stubby felted arms and legs, about the same height.

Base prompt (Pip), after the style paragraph:

```
full body character, a cute felted pea pod toy with three round peas peeking out of the top, two black bead eyes, small stitched smile, tiny stubby arms and legs, standing on a moss felt mound, plain soft blush background, centred, eye-level camera --ar 1:1 --v 7
```

Swap the first clause for the other characters:

- Tomo: `a round felted tomato toy with a small green felt leaf cap, warm red wool`
- Bram: `a felted broccoli toy with fluffy dark green florets and a short pale stem body`
- Pearl: `a felted pear toy, butter-yellow wool with a soft green blush and a tiny brown stalk`
- Dot: `a felted pasta shell toy, cream wool with a pink inner swirl`

### Consistency tips

- Approve Pip first. Take the best frame and use it as the character reference for the others, keeping the felt style the same:
  - Midjourney V7: `--oref <pip-url> --ow 60` (omni reference), plus `--sref <anchor-url>`.
  - Midjourney V6: `--cref <pip-url> --cw 40` (low weight so the food shape can change, only the face and felt carry over).
  - Check the current Midjourney docs: reference flags have changed between versions.
- Generate on a plain `#E7D9E2` blush background first. Cut out the background in a second step (remove.bg, Photoshop or Firefly) for the transparent WebP.
- Keep the same camera line in every prompt: `eye-level camera, 35mm lens`.
- If faces drift, reuse the exact phrase: `two black bead eyes, small stitched smile`.
- Reject any frame with teeth, tongue, eyebrows that look angry or sad, or hands holding food.

### Character delivery

| File | Size | Format | Target |
|---|---|---|---|
| `public/assets/characters/pip.webp` (and tomo, bram, pearl, dot) | 1024 x 1024, transparent, subject centred with 8% margin | WebP, quality 85 | under 150 KB each |

## 5. Image-to-video prompts (Runway Gen-4 or Kling)

Use the matching Midjourney still as the first frame. Settings: 16:9, 5 to 10 s, motion slider low to medium, no audio. Generate portrait 9:16 versions from the portrait stills for mobile.

Shared suffix on every video prompt:

```
handmade needle-felted look, soft studio light, smooth slow motion, no cuts, no text, no people, camera and lighting stay consistent
```

| Scene | Prompt | Mode |
|---|---|---|
| hero drift | `The camera drifts slowly forward over the felt hills while the glossy spheres float gently up and down and the cotton clouds slide slowly to the right. Very subtle, calm.` | loop |
| meet | `Small felted characters bob gently in place on the hill crest, spheres drift softly, slow camera push in.` | loop |
| plate | `Camera slowly descends and tilts down toward the large felted plate on the hill, soft light sweeps across it.` | scrub |
| table | `Camera slowly pulls back and lowers as the sky darkens to night blue and the pink sphere glows softer.` | scrub |
| character float | `The felted character floats gently in front of the swirling tunnel, rocking slightly, felt fibres catching the light, rings rotate slowly.` | scrub |
| portal fly-through | `Smooth fast-then-slow fly-through along the centre of the concentric felted ring tunnel, rings rushing past the camera, soft glow growing at the end.` | scrub |
| cloud fly-through | `Camera flies upward through thick cotton-wool clouds into a bright blue sky, then levels out above a sea of clouds.` | scrub |
| celebration burst | `Glossy pastel spheres burst outward from the centre in a soft slow-motion bloom, a felted character bounces gently in the middle, spheres drift and settle, calm and joyful.` | scrub |

Scene to filename mapping:

| Slot | Clip |
|---|---|
| hero | hero drift |
| meet | meet |
| plate | plate |
| table | table |
| chaining | character float into portal fly-through (join with a cut-free transition or generate as one 8 to 10 s clip) |
| celebration | celebration burst |
| closing | cloud fly-through |

## 6. Files, resolutions, formats

All under `public/assets/scenes/`. Replace the placeholder by dropping the file and enabling the slot.

| Slot | Desktop MP4 | Mobile MP4 | Poster | Duration | Mode |
|---|---|---|---|---|---|
| hero | `hero.mp4` 1920x1080 | `hero-m.mp4` 720x1280 | `hero-poster.jpg` 1920x1080 | 6 to 8 s, seamless loop | loop |
| meet | `meet.mp4` | `meet-m.mp4` | `meet-poster.jpg` | 6 s, seamless loop | loop |
| plate | `plate.mp4` | `plate-m.mp4` | `plate-poster.jpg` | 4 s | scrub |
| table | `table.mp4` | `table-m.mp4` | `table-poster.jpg` | 4 s | scrub |
| chaining | `chaining.mp4` | `chaining-m.mp4` | `chaining-poster.jpg` | 5 s | scrub |
| celebration | `celebration.mp4` | `celebration-m.mp4` | `celebration-poster.jpg` | 4 s | scrub |
| closing | `closing.mp4` | `closing-m.mp4` | `closing-poster.jpg` | 5 s | scrub |

Optional `*.webm` for loop clips only (`"webm": "scenes/hero.webm"` in the manifest). Remove the `webm` key from scrub slots: WebM seeking is slower and MP4 is enough.

### Encoding

Scrub clips must be keyframe-dense or seeking will stutter: every frame a keyframe.

```bash
# scrub clip, desktop (target 4 to 6 MB)
ffmpeg -i in.mp4 -an -vf "scale=1920:-2,fps=24" -c:v libx264 -preset slow -crf 24 -g 1 -pix_fmt yuv420p -movflags +faststart scenes/plate.mp4

# scrub clip, mobile (target 1.5 to 2.5 MB)
ffmpeg -i in-portrait.mp4 -an -vf "scale=720:-2,fps=24" -c:v libx264 -preset slow -crf 27 -g 1 -pix_fmt yuv420p -movflags +faststart scenes/plate-m.mp4

# loop clip, desktop (target under 3 MB)
ffmpeg -i in.mp4 -an -vf "scale=1920:-2,fps=24" -c:v libx264 -preset slow -crf 25 -g 48 -pix_fmt yuv420p -movflags +faststart scenes/hero.mp4

# optional webm for loops
ffmpeg -i in.mp4 -an -vf "scale=1920:-2,fps=24" -c:v libvpx-vp9 -crf 34 -b:v 0 scenes/hero.webm

# poster from the first frame (under 200 KB)
ffmpeg -i in.mp4 -frames:v 1 -vf "scale=1920:-2" -q:v 4 scenes/hero-poster.jpg
```

Page weight budget: under 25 MB of video for the whole home page on desktop, under 12 MB on mobile. Videos load only after the page is interactive and are skipped with `prefers-reduced-motion` or Data Saver (the poster shows instead).

## 7. Loop and seam checklist

- [ ] Loop clips: last frame matches first frame (use Runway "loop" or reverse and crossfade the last 12 frames to the first 12 in ffmpeg or DaVinci).
- [ ] No sudden brightness or colour jump at the seam; scrub through it frame by frame.
- [ ] Scrub clips: the motion is monotonic (starts calm, ends settled); no mid-clip direction changes, because scroll can go either way.
- [ ] First frame of each scrub clip looks right as a still: it is what the visitor sees before scrolling.
- [ ] Last frame of a scrub clip matches the first frame of the next scene's sky colour, so scene changes feel continuous (hero ends sky blue, meet starts dusk-blue, table ends night-blue, chaining starts violet).
- [ ] Headline space is clear: left 40% on desktop for plate, table, celebration; lower half on mobile.
- [ ] No text, logos, faces or screens baked in.
- [ ] Open the file at full size and check each red line in section 1.
- [ ] File sizes within the budgets above; `-g 1` for scrub clips.

## 8. Rive celebration poses (Flutter app, later)

For the in-app celebration (Rive). Generate on a plain blush background, remove the background, deliver transparent PNG 2048x2048 under `public/assets/rive/{id}-{pose}.png`. Same felt look as the site characters, same face (`two black bead eyes, small stitched smile`).

| Pose | Prompt addition |
|---|---|
| happy | `arms up, relaxed wide smile, standing` |
| tasting | `one stubby arm raised to its chin, curious head tilt, small open smile, no food in frame` |
| proud | `chest out, hands on hips, warm smile, chin slightly up` |
| wave | `one stubby arm waving, friendly smile, slight lean` |

Rules for the celebration: it marks effort, not eating. Do not generate a clean-plate pose, a trophy pose or any pose with food in hand. "Tasting" is a curious tilt only. Start with Pip in all four poses, then repeat for the other four.

## 9. Manifest reference

`public/assets/manifest.json`

```json
{
  "scenes": {
    "hero": { "enabled": true, "mode": "loop", "mp4": "scenes/hero.mp4", "webm": "scenes/hero.webm", "mobile": "scenes/hero-m.mp4", "poster": "scenes/hero-poster.jpg" }
  },
  "characters": {
    "pip": { "enabled": true, "src": "characters/pip.webp" }
  }
}
```

- `mode: "loop"` autoplays muted and loops. `mode: "scrub"` sets `currentTime` from scroll progress.
- `mobile` is used under 700 px wide. `poster` shows before load, with reduced motion and with Data Saver.
- Any slot with `enabled: false` (or missing) keeps its CSS placeholder.
- Characters are decorative on the page (names and bios are real text), so the image alt stays empty.
