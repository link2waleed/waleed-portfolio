import cv2
import numpy as np
from PIL import Image
import os

img_path = '/Users/waleedahmad/.gemini/antigravity-ide/brain/70cec063-1b60-4cef-bea8-a1729c8fc831/media__1784917613377.png'

# Load original standing photo
orig_img = Image.open(img_path).convert('RGB')
w, h = orig_img.size

# Crop vertically from top of hair (y: 0.04) to right below watch/hands (y: 0.68)
crop_box = (int(w*0.14), int(h*0.04), int(w*0.86), int(h*0.68))
cropped = orig_img.crop(crop_box)

from rembg import remove
print('Removing background using neural rembg...')
person_rgba = remove(cropped)

# Get tight bounding box of person
np_img = np.array(person_rgba)
alpha = np_img[:, :, 3]

y_indices, x_indices = np.where(alpha > 10)
min_x, max_x = np.min(x_indices), np.max(x_indices)
min_y, max_y = np.min(y_indices), np.max(y_indices)

person_tight = person_rgba.crop((min_x, min_y, max_x, max_y))
pw, ph = person_tight.size

# Find face center X in person crop (upper 35% of head)
crop_alpha = np.array(person_tight)[:, :, 3]
face_alpha = crop_alpha[0:int(ph*0.35), :]
_, face_x_indices = np.where(face_alpha > 10)
face_center_x = int(np.mean(face_x_indices))

# Create 800x800 square transparent canvas
canvas_size = 800
canvas = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))

# Make figure SIGNIFICANTLY MORE PROMINENT: scale height to 880px out of 800px canvas (zooms in by ~16%)
target_ph = 880
scale = target_ph / float(ph)
new_pw = int(pw * scale)
new_ph = int(ph * scale)

person_resized = person_tight.resize((new_pw, new_ph), Image.Resampling.LANCZOS)
scaled_face_x = int(face_center_x * scale)

# Center face horizontally at EXACT 400 (50.0% midpoint)
pos_x = (canvas_size // 2) - scaled_face_x

# Place at VERY BOTTOM baseline so bottom of hands rests AT THE EXACT BOTTOM EDGE
pos_y = canvas_size - new_ph

canvas.paste(person_resized, (pos_x, pos_y), person_resized)

target_file = '/Users/waleedahmad/PortfolioWebsite/public/assets/waleed.png'
canvas.save(target_file, 'PNG')

print(f'Ultra prominent avatar saved to {target_file}!')
