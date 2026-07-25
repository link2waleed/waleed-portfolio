import cv2
import numpy as np
from PIL import Image
import os

img_path = '/Users/waleedahmad/PortfolioWebsite/public/assets/waleed.png'
img = Image.open(img_path).convert('RGBA')

np_img = np.array(img)
alpha = np_img[:, :, 3]

# Find bounding box of person
y_indices, x_indices = np.where(alpha > 10)
min_x, max_x = np.min(x_indices), np.max(x_indices)
min_y, max_y = np.min(y_indices), np.max(y_indices)

# Crop person tightly
person_crop = img.crop((min_x, min_y, max_x, max_y))
pw, ph = person_crop.size

# Find face center X in person crop (using upper 35% of head)
crop_alpha = np.array(person_crop)[:, :, 3]
face_alpha = crop_alpha[0:int(ph*0.35), :]
_, face_x_indices = np.where(face_alpha > 10)
face_center_x = int(np.mean(face_x_indices))

# Create a square 800x800 transparent canvas
canvas_size = 800
canvas = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))

# Target scale: fit person height to ~88% of canvas height (700px)
scale_factor = 700.0 / ph
new_pw = int(pw * scale_factor)
new_ph = int(ph * scale_factor)

person_resized = person_crop.resize((new_pw, new_ph), Image.Resampling.LANCZOS)
scaled_face_x = int(face_center_x * scale_factor)

# Position person so face_center is at EXACTLY canvas_size // 2 (400)
pos_x = (canvas_size // 2) - scaled_face_x
# Position vertically so head sits nicely with padding from top (~40px)
pos_y = 40

canvas.paste(person_resized, (pos_x, pos_y), person_resized)

out_path = '/Users/waleedahmad/PortfolioWebsite/public/assets/waleed.png'
canvas.save(out_path, 'PNG')

print('Perfectly centered transparent avatar saved to', out_path)
