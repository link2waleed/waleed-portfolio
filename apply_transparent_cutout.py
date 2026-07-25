import sys
sys.path.insert(0, '/Users/waleedahmad/Library/Python/3.9/lib/python/site-packages')
from PIL import Image
from rembg import remove

img_path = '/Users/waleedahmad/.gemini/antigravity-ide/brain/70cec063-1b60-4cef-bea8-a1729c8fc831/media__1784917613377.png'

orig_img = Image.open(img_path).convert('RGB')
w, h = orig_img.size

# Crop vertically right below crossed arms & watch (y: 0.04 to 0.69)
crop_box = (int(w*0.14), int(h*0.04), int(w*0.86), int(h*0.69))
cropped = orig_img.crop(crop_box)

print('Removing background using rembg...')
person_rgba = remove(cropped)

# Save directly to public/assets/waleed.png as RGBA transparent PNG
target_path = '/Users/waleedahmad/PortfolioWebsite/public/assets/waleed.png'
person_rgba.save(target_path, 'PNG')

print(f'Transparent cutout successfully saved to {target_path}!')
