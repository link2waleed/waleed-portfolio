import sys
sys.path.insert(0, '/Users/waleedahmad/Library/Python/3.9/lib/python/site-packages')
from PIL import Image, ImageEnhance
from rembg import remove

img_path = '/Users/waleedahmad/.gemini/antigravity-ide/brain/70cec063-1b60-4cef-bea8-a1729c8fc831/media__1784917613377.png'

orig_img = Image.open(img_path).convert('RGB')
w, h = orig_img.size

# Crop vertically right below crossed arms & watch: y = 0.04 to 0.69
crop_box = (int(w*0.14), int(h*0.04), int(w*0.86), int(h*0.69))
cropped = orig_img.crop(crop_box)

print('Running rembg...')
person_rgba = remove(cropped)

# Save transparent PNG
out_cutout = '/Users/waleedahmad/PortfolioWebsite/public/assets/waleed_cutout.png'
out_waleed = '/Users/waleedahmad/PortfolioWebsite/public/assets/waleed.png'

person_rgba.save(out_cutout, 'PNG')
person_rgba.save(out_waleed, 'PNG')

print('Transparent PNG cutout saved!')
