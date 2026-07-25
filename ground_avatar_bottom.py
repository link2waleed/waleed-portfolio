import cv2
import numpy as np
from PIL import Image, ImageDraw
import os

img_path = '/Users/waleedahmad/.gemini/antigravity-ide/brain/70cec063-1b60-4cef-bea8-a1729c8fc831/media__1784917613377.png'

# Load original standing photo
orig_img = Image.open(img_path).convert('RGB')
w, h = orig_img.size

# Crop vertically from top of hair (y: 0.04) to right below watch/hands (y: 0.69)
crop_box = (int(w*0.14), int(h*0.04), int(w*0.86), int(h*0.69))
cropped = orig_img.crop(crop_box)

from rembg import remove
print('Removing background using neural rembg...')
person_rgba = remove(cropped)

# Get bounding box of person inside cutout
np_img = np.array(person_rgba)
alpha = np_img[:, :, 3]

y_indices, x_indices = np.where(alpha > 10)
min_x, max_x = np.min(x_indices), np.max(x_indices)
min_y, max_y = np.min(y_indices), np.max(y_indices)

# Tight crop around person
person_tight = person_rgba.crop((min_x, min_y, max_x, max_y))
pw, ph = person_tight.size

# Find face center X in person crop (upper 35% of head)
crop_alpha = np.array(person_tight)[:, :, 3]
face_alpha = crop_alpha[0:int(ph*0.35), :]
_, face_x_indices = np.where(face_alpha > 10)
face_center_x = int(np.mean(face_x_indices))

# Create 800x800 transparent canvas
canvas_size = 800
canvas = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))

# Scale person so height fits nicely (~750px)
target_height = 750
scale = target_height / float(ph)
new_pw = int(pw * scale)
new_ph = int(ph * scale)

person_resized = person_tight.resize((new_pw, new_ph), Image.Resampling.LANCZOS)
scaled_face_x = int(face_center_x * scale)

# Position horizontally so face center is at EXACTLY 400 (50.0%)
pos_x = (canvas_size // 2) - scaled_face_x

# Position vertically so bottom of hands rests AT THE VERY BOTTOM BASELINE (canvas_size - new_ph)
pos_y = canvas_size - new_ph  # 800 - 750 = 50px from top, 0px gap at bottom!

# Soft bottom gradient fade on alpha mask (bottom 30px) to prevent any sharp cutoff line
p_arr = np.array(person_resized)
fade_height = 35
for i in range(fade_height):
    alpha_factor = (i / float(fade_height)) ** 1.5
    row_idx = new_ph - fade_height + i
    p_arr[row_idx, :, 3] = (p_arr[row_idx, :, 3] * alpha_factor).astype(np.uint8)

person_faded = Image.fromarray(p_arr)

# Paste onto 800x800 canvas
canvas.paste(person_faded, (pos_x, pos_y), person_faded)

out_path = '/Users/waleedahmad/PortfolioWebsite/public/assets/waleed.png'
canvas.save(out_path, 'PNG')

print('Grounded avatar with soft bottom fade successfully saved!')
