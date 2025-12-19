# 📸 Where to Add Team Member Images

## 📁 Image Location

Place all team member photos in:

```
/Users/prafulkadam/Documents/astan/grampanchayat-website/public/images/members/
```

---

## 📋 Required Images & File Names

### Leadership (3 images):
1. **Sarpanch:** `sarpanch.jpg`
2. **Up-Sarpanch:** `up-sarpanch.jpg`
3. **Gram Vikas Adhikari:** `gram-sevak.jpg`

### Staff (4 images):
4. **Clerk:** `clerk.jpg`
5. **Computer Operator:** `operator.jpg`
6. **Shipai:** `shipai.jpg`
7. **MGNREGA Inspector:** `mgnrega.jpg`

### Panch Members (9 images - optional for now):
8. `panch-1.jpg`, `panch-2.jpg`, ... `panch-9.jpg`

---

## 🎯 Complete File Structure

```
public/images/members/
├── sarpanch.jpg          ← सौ. ज्योती विजय निदाम
├── up-sarpanch.jpg       ← सौ. नर्मदा सुभाष मोरे
├── gram-sevak.jpg        ← श्री. नितीन वाकडे
├── clerk.jpg             ← सौ. ममता मंगेश नातान
├── operator.jpg          ← सौ. प्रीती डायरी पाटील
├── shipai.jpg            ← श्री. संदीप चंद्रा सातारकर
└── mgnrega.jpg           ← सौ. सुज्ञाना तलाती गोपावकर
```

---

## 📝 Step-by-Step Guide

### Step 1: Create Folder (Already Done ✅)
The folder is already created at:
```
public/images/members/
```

### Step 2: Add Your Photos

**Using Finder (Mac):**
1. Open Finder
2. Navigate to: `Documents/astan/grampanchayat-website/public/images/members/`
3. Copy your photos there
4. Rename them to match the names above

**Using Terminal:**
```bash
cd /Users/prafulkadam/Documents/astan/grampanchayat-website

# Copy photos (replace SOURCE with your image paths)
cp "SOURCE/sarpanch-photo.jpg" "public/images/members/sarpanch.jpg"
cp "SOURCE/up-sarpanch-photo.jpg" "public/images/members/up-sarpanch.jpg"
cp "SOURCE/gram-sevak-photo.jpg" "public/images/members/gram-sevak.jpg"
cp "SOURCE/clerk-photo.jpg" "public/images/members/clerk.jpg"
cp "SOURCE/operator-photo.jpg" "public/images/members/operator.jpg"
cp "SOURCE/shipai-photo.jpg" "public/images/members/shipai.jpg"
cp "SOURCE/mgnrega-photo.jpg" "public/images/members/mgnrega.jpg"
```

### Step 3: Verify Files
```bash
ls -la public/images/members/
```

You should see all 7 files listed.

### Step 4: Refresh Browser
- Go to: http://localhost:3000
- Press `Cmd+Shift+R` (hard refresh)
- Photos will appear automatically!

---

## 🖼️ Image Requirements

### Recommended Specifications:
- **Format:** JPG or PNG
- **Size:** 400x400px or larger (square images work best)
- **File size:** Under 500KB each (for fast loading)
- **Aspect ratio:** 1:1 (square) is ideal
- **Quality:** Clear, well-lit photos

### Tips:
- ✅ Use square photos (crop if needed)
- ✅ Good lighting
- ✅ Clear face visible
- ✅ Professional appearance
- ✅ Compress images before adding (use TinyPNG.com)

---

## 🔧 How It Works in Code

The code automatically looks for images at:
- `/images/members/sarpanch.jpg` → Sarpanch photo
- `/images/members/up-sarpanch.jpg` → Up-Sarpanch photo
- etc.

**If image doesn't exist:** Shows a placeholder icon (Users icon)

**If image exists:** Shows the actual photo in a circular frame

---

## ✅ Quick Checklist

- [ ] Folder created: `public/images/members/`
- [ ] Sarpanch photo: `sarpanch.jpg`
- [ ] Up-Sarpanch photo: `up-sarpanch.jpg`
- [ ] Gram Sevak photo: `gram-sevak.jpg`
- [ ] Clerk photo: `clerk.jpg`
- [ ] Operator photo: `operator.jpg`
- [ ] Shipai photo: `shipai.jpg`
- [ ] MGNREGA photo: `mgnrega.jpg`
- [ ] All files are JPG or PNG
- [ ] Images are square (or close to it)
- [ ] Browser refreshed
- [ ] Photos appear on website!

---

## 🎨 Image Display

Once added, photos will appear as:
- **Circular profile pictures** (128x128px)
- **White border** around them
- **Professional appearance**
- **Responsive** (looks good on mobile too)

---

## 💡 Pro Tips

1. **Optimize images first:**
   - Use TinyPNG.com or Squoosh.app
   - Reduces file size by 70-80%
   - Faster website loading

2. **Crop to square:**
   - Use any photo editor
   - Crop to 1:1 ratio
   - Center the face

3. **Consistent style:**
   - Similar lighting for all photos
   - Similar background
   - Professional appearance

4. **File naming:**
   - Must be exactly as listed (lowercase)
   - Use `.jpg` or `.png` extension
   - No spaces in filename

---

## 🆘 Troubleshooting

### Photo Not Showing?

1. **Check file name:**
   - Must be exactly: `sarpanch.jpg` (not `Sarpanch.jpg` or `sarpanch.JPG`)

2. **Check location:**
   - Must be in: `public/images/members/`
   - Not in: `public/images/` or `public/`

3. **Check file exists:**
   ```bash
   ls public/images/members/sarpanch.jpg
   ```

4. **Clear browser cache:**
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+F5` (Windows)

5. **Restart dev server:**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

---

## 📸 Example File Names

**Correct ✅:**
- `sarpanch.jpg`
- `up-sarpanch.jpg`
- `gram-sevak.jpg`

**Wrong ❌:**
- `Sarpanch.jpg` (capital S)
- `sarpanch.JPG` (capital extension)
- `sarpanch photo.jpg` (spaces)
- `sarpanch_image.jpg` (extra text)

---

## 🚀 After Adding Photos

Once all photos are in place:

1. **Test locally:** http://localhost:3000
2. **Verify all photos appear**
3. **Test on mobile** (most villagers use phones)
4. **Deploy to production** (Vercel)

---

**Add your photos and they'll appear automatically! 📸**

