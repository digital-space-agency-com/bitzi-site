"""Cut a sheet of characters/poses into separate transparent WebPs.
Usage: python scripts/slice-sheet.py sheet.png out_dir name1,name2,... [--size 1024]
Names are assigned in reading order (top-left to bottom-right). Needs rembg + Pillow + scipy."""
import sys, os
from PIL import Image
from rembg import remove, new_session
import numpy as np
from scipy import ndimage

src, out, names = sys.argv[1], sys.argv[2], sys.argv[3].split(",")
size = int(sys.argv[sys.argv.index("--size") + 1]) if "--size" in sys.argv else 1024
os.makedirs(out, exist_ok=True)
img = Image.open(src).convert("RGB")
cut = remove(img, session=new_session("isnet-general-use"))
a = np.array(cut)[..., 3] > 40
a = ndimage.binary_dilation(a, iterations=25)  # merge arms/leaves into one blob
lab, n = ndimage.label(a)
objs = [(s, i + 1) for i, s in enumerate(ndimage.find_objects(lab)) if (s[0].stop - s[0].start) * (s[1].stop - s[1].start) > 0.004 * img.width * img.height]
if len(objs) != len(names):
    sys.exit(f"found {len(objs)} figures, got {len(names)} names; regenerate the sheet or adjust names")
rowh = img.height / 3
objs.sort(key=lambda o: (round((o[0][0].start + o[0][0].stop) / 2 / rowh), o[0][1].start))
for (sl, _), name in zip(objs, names):
    tile = cut.crop((sl[1].start, sl[0].start, sl[1].stop, sl[0].stop))
    tile = tile.crop(tile.getbbox())
    s = size * 0.9 / max(tile.size)
    tile = tile.resize((int(tile.width * s), int(tile.height * s)), Image.LANCZOS)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    canvas.paste(tile, ((size - tile.width) // 2, (size - tile.height) // 2), tile)
    canvas.save(f"{out}/{name}.webp", quality=88)
    print(name, tile.size)
