import sys
sys.path.insert(0, '/Users/waleedahmad/Library/Python/3.9/lib/python/site-packages')
from PIL import Image, ImageFilter, ImageDraw
from rembg import remove
import os

img_path = '/Users/waleedahmad/.gemini/antigravity-ide/brain/70cec063-1b60-4cef-bea8-a1729c8fc831/media__1784917613377.png'
orig_img = Image.open(img_path).convert('RGB')

print('Removing background...')
person_rgba = remove(orig_img)

w, h = person_rgba.size
# Crop vertically right below watch: y = h * 0.70 (hides lower torso & desk below arms)
crop_box = (int(w*0.14), int(h*0.04), int(w*0.86), int(h*0.70))
person_cropped = person_rgba.crop(crop_box)
pw, ph = person_cropped.size

# --- Studio Dark Charcoal Gradient Backdrop ---
bg1 = Image.new('RGB', (pw, ph), color='#0d0e15')
draw1 = ImageDraw.Draw(bg1)

for r in range(int(max(pw, ph)*0.85), 0, -5):
    alpha = int(50 * (1.0 - (r / (max(pw, ph)*0.85))))
    color = (25 + int(alpha*1.0), 35 + int(alpha*1.3), 75 + int(alpha*2.2))
    draw1.ellipse((pw//2 - r, ph//3 - r, pw//2 + r, ph//3 + r), fill=color)

bg1 = bg1.filter(ImageFilter.GaussianBlur(radius=25))
comp1 = bg1.copy()
comp1.paste(person_cropped, (0, 0), person_cropped)

out_assets = '/Users/waleedahmad/PortfolioWebsite/public/assets/waleed_studio.png'
comp1.save(out_assets, 'PNG')
comp1.save('/Users/waleedahmad/PortfolioWebsite/public/assets/waleed.png', 'PNG')

print('Successfully saved studio portrait to assets!')
