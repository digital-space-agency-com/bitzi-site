"""Cut a sheet of characters/poses into separate transparent images.
Usage: python scripts/slice-sheet.py sheet.png out_dir name1,name2,... [--size 1024] [--png] [--grid CxR] [--key]
--grid 2x2 cuts the sheet into equal cells first (best for pose sheets, one figure per cell).
Without --grid, figures are found automatically and named in reading order.
Needs rembg + Pillow + scipy. Poses on one sheet share one scale and baseline."""
import sys, os
from PIL import Image
from rembg import remove, new_session
import numpy as np
from scipy import ndimage

src, out, names = sys.argv[1], sys.argv[2], sys.argv[3].split(",")
arg = lambda k, d: sys.argv[sys.argv.index(k) + 1] if k in sys.argv else d
size = int(arg("--size", 1024))
grid = arg("--grid", None)
os.makedirs(out, exist_ok=True)
img = Image.open(src).convert("RGB")
sess = new_session("isnet-general-use")

def cutout(im):
    """rembg, then keep the biggest piece and fill holes (a green leaf in a mouth is not background)."""
    c = remove(im, session=sess)
    a = np.array(c)
    solid = a[..., 3] > 40
    if "--key" in sys.argv:  # also keep anything clearly not the green backdrop (rescues red/yellow bodies rembg drops)
        rgb = np.array(im).astype(int)
        edge = np.concatenate([rgb[0], rgb[-1], rgb[:, 0], rgb[:, -1]])
        solid |= np.abs(rgb - np.median(edge, axis=0)).sum(2) > 150
        a[..., 3] = np.where(solid, np.maximum(a[..., 3], 255), a[..., 3])
        a[..., :3] = np.where((a[..., 3:4] > 0) & (np.array(remove(im, session=sess))[..., 3:4] < 40), rgb, a[..., :3])
    lab, n = ndimage.label(ndimage.binary_dilation(solid, iterations=12))
    if n > 1:
        big = np.argmax(ndimage.sum(solid, lab, range(1, n + 1))) + 1
        solid &= ndimage.binary_dilation(lab == big, iterations=2)
    filled = ndimage.binary_fill_holes(solid)
    rgb = np.array(im)
    a[..., :3] = np.where(filled[..., None] & ~solid[..., None], rgb, a[..., :3])
    a[..., 3] = np.where(filled & ~solid, 255, np.where(solid, np.maximum(a[..., 3], 255 * 0 + a[..., 3]), 0))
    a[..., 3] = np.where(filled, np.where(a[..., 3] < 255, np.maximum(a[..., 3], 230), 255), 0)
    return Image.fromarray(a, "RGBA")

if grid:
    cols, rows = map(int, grid.split("x"))
    if cols * rows != len(names):
        sys.exit(f"grid has {cols * rows} cells, got {len(names)} names")
    w, h = img.width // cols, img.height // rows
    cells = [img.crop((c * w, r * h, (c + 1) * w, (r + 1) * h)) for r in range(rows) for c in range(cols)]
    tiles = [cutout(c) for c in cells]
else:
    cut = remove(img, session=sess)
    a = ndimage.binary_dilation(np.array(cut)[..., 3] > 40, iterations=25)
    lab, n = ndimage.label(a)
    objs = [(s, i + 1) for i, s in enumerate(ndimage.find_objects(lab)) if (s[0].stop - s[0].start) * (s[1].stop - s[1].start) > 0.004 * img.width * img.height]
    if len(objs) != len(names):
        sys.exit(f"found {len(objs)} figures, got {len(names)} names; regenerate the sheet, add --grid, or fix names")
    rowh = img.height / 3
    objs.sort(key=lambda o: (round((o[0][0].start + o[0][0].stop) / 2 / rowh), o[0][1].start))
    tiles = [cut.crop((s[1].start, s[0].start, s[1].stop, s[0].stop)) for s, _ in objs]

tiles = [t.crop(t.getbbox()) for t in tiles]
s = size * 0.9 / max(max(t.size) for t in tiles)
for name, tile in zip(names, tiles):
    tile = tile.resize((int(tile.width * s), int(tile.height * s)), Image.LANCZOS)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    canvas.paste(tile, ((size - tile.width) // 2, int(size * 0.95) - tile.height), tile)
    canvas.save(f"{out}/{name}.png") if "--png" in sys.argv else canvas.save(f"{out}/{name}.webp", quality=88)
    print(name, tile.size)
