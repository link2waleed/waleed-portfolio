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

print('Removing background using rembg...')
person_rgba = remove(cropped)

# Enhance contrast and sharpness slightly on RGB channels
r, g, b, a = person_rgba.split()
rgb = Image.merge('RGB', (r, g, b))
rgb_enhanced = ImageEnhance.Sharpness(ImageEnhance.Contrast(rgb).enhance(1.06)).enhance(1.08)

er, eg, eb = rgb_enhanced.split()
final_rgba = Image.merge('RGBA', (er, eg, eb, a))

out1 = '/Users/waleedahmad/PortfolioWebsite/public/assets/waleed_cutout.png'
out2 = '/Users/waleedahmad/PortfolioWebsite/public/assets/waleed.png'

final_rgba.save(out1, 'PNG')
final_rgba.save(out2, 'PNG')

print('Saved transparent PNG cutout successfully!')
