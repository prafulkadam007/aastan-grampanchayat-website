# 📸 How to Add Office Image

## ✅ Correct Location

Your office image should be placed at:

```
/Users/prafulkadam/Documents/astan/grampanchayat-website/public/images/office.jpg
```

**Important:** 
- The file must be named exactly: `office.jpg`
- It must be in the `public/images/` folder
- The path in code is `/images/office.jpg` (Next.js serves files from `public/` folder)

---

## 🚀 Quick Steps

### Option 1: Using Terminal (Easiest)

1. **Find your office image file** (wherever you saved it)
   - It might be named: `IMG-20250118-WA0007.jpg` or similar

2. **Copy it to the correct location:**
   ```bash
   cd /Users/prafulkadam/Documents/astan/grampanchayat-website
   
   # Copy your image (replace PATH_TO_YOUR_IMAGE with actual path)
   cp "PATH_TO_YOUR_IMAGE.jpg" "public/images/office.jpg"
   
   # Example if image is in Documents:
   cp "/Users/prafulkadam/Documents/astan/IMG-20250118-WA0007.jpg" "public/images/office.jpg"
   ```

3. **Refresh your browser** - The image will appear!

### Option 2: Using Finder (Mac)

1. **Open Finder**
2. **Navigate to:**
   ```
   /Users/prafulkadam/Documents/astan/grampanchayat-website/public/images/
   ```
3. **Copy your office image** into this folder
4. **Rename it to:** `office.jpg`
5. **Refresh browser**

### Option 3: Drag & Drop in VS Code/Cursor

1. **Open the folder** in your editor:
   ```
   grampanchayat-website/public/images/
   ```
2. **Drag your office image** into this folder
3. **Rename to:** `office.jpg`
4. **Refresh browser**

---

## 📋 Step-by-Step Guide

### Step 1: Locate Your Image
Find where you saved the office photo. Common locations:
- Desktop
- Downloads folder
- Documents/astan folder
- Email attachments

### Step 2: Copy to Correct Location

**Using Terminal:**
```bash
# Navigate to project
cd /Users/prafulkadam/Documents/astan/grampanchayat-website

# Copy image (adjust source path as needed)
cp "/path/to/your/image.jpg" "public/images/office.jpg"
```

**Using Finder:**
1. Open Finder
2. Go to: `Documents/astan/grampanchayat-website/public/images/`
3. Paste your image
4. Right-click → Rename → `office.jpg`

### Step 3: Verify File Exists
```bash
# Check if file is there
ls -la public/images/office.jpg
```

You should see:
```
-rw-r--r--  1 user  staff  123456  Jan 18 12:00 public/images/office.jpg
```

### Step 4: Restart Dev Server (if needed)
```bash
# Stop current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 5: Refresh Browser
- Go to: http://localhost:3000
- Press `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows) to hard refresh
- Image should appear!

---

## 🖼️ Image Requirements

### Recommended:
- **Format:** JPG or PNG
- **Size:** 800x600px or larger (will be auto-resized)
- **File size:** Under 2MB (for fast loading)
- **Name:** Must be exactly `office.jpg`

### Supported Formats:
- ✅ `.jpg` or `.jpeg` (recommended)
- ✅ `.png`
- ✅ `.webp` (best for web)

---

## 🔍 Troubleshooting

### Image Still Not Showing?

1. **Check file exists:**
   ```bash
   ls public/images/office.jpg
   ```
   If it says "No such file", the file isn't there!

2. **Check file name:**
   - Must be exactly: `office.jpg` (lowercase)
   - Not: `Office.jpg`, `office.JPG`, `office_image.jpg`

3. **Check file location:**
   - Must be in: `public/images/`
   - Not in: `public/` or `app/` or root

4. **Clear browser cache:**
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+F5` (Windows)

5. **Restart dev server:**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

6. **Check browser console:**
   - Press F12 → Console tab
   - Look for image loading errors

---

## 📝 Quick Command Reference

```bash
# Navigate to project
cd /Users/prafulkadam/Documents/astan/grampanchayat-website

# Copy image (replace SOURCE with your image path)
cp "SOURCE.jpg" "public/images/office.jpg"

# Verify it's there
ls -lh public/images/office.jpg

# If you need to convert image format
# (requires ImageMagick: brew install imagemagick)
convert "SOURCE.png" "public/images/office.jpg"
```

---

## ✅ Success Checklist

- [ ] Image file exists at `public/images/office.jpg`
- [ ] File name is exactly `office.jpg` (lowercase)
- [ ] File is readable (not corrupted)
- [ ] Dev server restarted (if needed)
- [ ] Browser cache cleared (hard refresh)
- [ ] Image appears on website!

---

## 🎯 Expected Result

Once the image is in the correct location, you should see:

1. **Hero section** (top of page)
2. **Office building photo** on the right side
3. **Beautiful display** with rounded corners and shadow

---

## 💡 Pro Tips

1. **Optimize image first:**
   - Use online tools like TinyPNG or Squoosh
   - Reduces file size for faster loading

2. **Use descriptive alt text:**
   - Already set: "Astan Gram Panchayat Office"
   - Good for accessibility and SEO

3. **Multiple images later:**
   - You can add more images in `public/images/`
   - For members: `public/images/members/sarpanch.jpg`
   - For projects: `public/images/projects/road.jpg`

---

## 🆘 Still Having Issues?

If the image still doesn't show:

1. **Check the exact error:**
   - Open browser DevTools (F12)
   - Go to Console tab
   - Look for red error messages

2. **Verify path in code:**
   - File: `app/[locale]/page.tsx`
   - Line 112: `src="/images/office.jpg"`
   - This is correct! ✅

3. **Try a test image:**
   - Download any image from internet
   - Save as `office.jpg` in `public/images/`
   - If this works, your original image might be corrupted

---

**Once the image is in the right place, it will appear automatically!** 🎉

