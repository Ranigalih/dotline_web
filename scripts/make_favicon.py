from PIL import Image

src = 'public/Icon.png'
dst = 'public/favicon.ico'

im = Image.open(src)
# Ensure image has alpha or is RGB
if im.mode not in ('RGBA', 'RGB'):
    im = im.convert('RGBA')

sizes = [(256,256),(128,128),(64,64),(48,48),(32,32),(16,16)]
im.save(dst, format='ICO', sizes=sizes)
print('favicon created:', dst)
