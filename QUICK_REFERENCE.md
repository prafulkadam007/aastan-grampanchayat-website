# 📋 Quick Reference Card

## 🌐 Your Website URLs

- **Local Development:** http://localhost:3000
- **After Deploy:** https://yourproject.vercel.app (you'll get this)
- **Custom Domain:** https://yourvillage.org.in (optional)

---

## 📝 Files to Edit

### Main Content
`app/page.tsx` - **Edit this file** to update all website content

### Site Metadata
`app/layout.tsx` - Update title, description, keywords

### Styles (if needed)
`app/globals.css` - Global styles
`tailwind.config.ts` - Tailwind configuration

---

## 🎯 Common Tasks

### Update Village Name
**File:** `app/page.tsx`
**Line:** 24-28
```typescript
<h1>Your Village Name Gram Panchayat</h1>
```

### Update Member Info
**File:** `app/page.tsx`
**Lines:** 170-264
```typescript
<h3>Member Name</h3>
<Phone>+91 XXXXX XXXXX</Phone>
```

### Update Projects
**File:** `app/page.tsx`
**Lines:** 294-350
```typescript
<h3>Project Title</h3>
<p>Project description</p>
```

### Update Contact
**File:** `app/page.tsx`
**Lines:** 400-415
```typescript
Address, Phone, Email
```

---

## 🚀 Commands

### Start Development
```bash
cd grampanchayat-website
npm run dev
```
Opens at: http://localhost:3000

### Build for Production
```bash
npm run build
```
Tests if everything compiles correctly

### Check for Errors
```bash
npm run lint
```
Finds code issues

---

## 🎨 Change Colors

### Orange Shades
- `bg-orange-50` - Very light
- `bg-orange-500` - Medium
- `bg-orange-600` - Dark (primary)
- `text-orange-600` - Text color

### Green Shades
- `bg-green-50` - Very light
- `bg-green-500` - Medium
- `bg-green-600` - Dark
- `text-green-600` - Text color

### Other Colors
- `bg-blue-600` - Blue
- `bg-gray-50` - Light gray background
- `bg-white` - White
- `text-gray-600` - Gray text

---

## 📸 Add Images

### Member Photos
1. Create: `public/images/members/`
2. Add: `sarpanch.jpg`, `up-sarpanch.jpg`, etc.
3. In code, replace:
```typescript
// OLD (placeholder):
<Users className="w-16 h-16 text-gray-400" />

// NEW (with photo):
<Image 
  src="/images/members/sarpanch.jpg"
  alt="Sarpanch Name"
  width={128}
  height={128}
  className="rounded-full"
/>
```

### Project Photos
1. Create: `public/images/projects/`
2. Add: `project1.jpg`, `project2.jpg`, etc.
3. Replace gradient backgrounds with `<Image />` component

---

## 🔧 Git Commands

### Save Changes
```bash
git add .
git commit -m "Your change description"
git push
```
*Auto-deploys to Vercel!*

### Check Status
```bash
git status
```

### View History
```bash
git log --oneline
```

---

## 📱 Test on Mobile

### Option 1: Use Chrome DevTools
1. Open http://localhost:3000
2. Press F12 (open DevTools)
3. Click device toggle icon
4. Select iPhone or Android

### Option 2: Test on Real Phone
1. Find your computer's IP address
2. Open `http://YOUR_IP:3000` on phone
3. Must be on same WiFi network

---

## 🌍 After Deployment

### Update Website
1. Make changes locally
2. Test at http://localhost:3000
3. Run: `git push`
4. Auto-deploys in 2-3 minutes

### View Deployment Logs
- Go to vercel.com
- Click your project
- See deployment status and logs

### Add Custom Domain
- Buy domain (₹500/year for .in)
- In Vercel: Settings → Domains
- Add domain and update DNS
- SSL auto-configured (FREE)

---

## 📊 File Structure

```
grampanchayat-website/
├── app/
│   ├── page.tsx         ← EDIT THIS (main content)
│   ├── layout.tsx       ← Edit metadata
│   ├── globals.css      ← Global styles
│   └── favicon.ico      ← Browser icon
├── public/
│   └── images/          ← Add photos here
├── node_modules/        ← Don't touch
├── README.md            ← Documentation
├── QUICK_START.md       ← Start here
├── DEPLOYMENT.md        ← Deploy guide
├── FUTURE_FEATURES.md   ← Roadmap
├── PROJECT_SUMMARY.md   ← Overview
├── package.json         ← Dependencies
└── .gitignore          ← Git ignore rules
```

---

## ⚡ Quick Customization Checklist

Before deploying, update these in `app/page.tsx`:

- [ ] Line 24: Village name
- [ ] Line 26: Taluka, District, State
- [ ] Line 82-110: Statistics (population, etc.)
- [ ] Line 170: Sarpanch name & phone
- [ ] Line 195: Up-Sarpanch name & phone
- [ ] Line 220: Gram Sevak name & phone
- [ ] Line 246-264: 4 Panch members
- [ ] Line 294-350: 3 Development projects
- [ ] Line 400: Office address
- [ ] Line 407: Office phone
- [ ] Line 414: Office email
- [ ] Line 425: Office hours (if needed)

---

## 🆘 Common Issues

### Port 3000 already in use
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9
# Or use different port
npm run dev -- --port 3001
```

### Changes not showing
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Build fails
```bash
# Check for errors
npm run lint
# Fix any TypeScript errors shown
```

### Can't push to GitHub
```bash
# Check remote
git remote -v
# If not set, add it
git remote add origin https://github.com/user/repo.git
```

---

## 💡 Pro Tips

1. **Test before deploy:** Always run `npm run build` before pushing
2. **Commit often:** Save your work with regular git commits
3. **Use descriptive commits:** "Updated Sarpanch info" not just "update"
4. **Preview on mobile:** Test mobile view before going live
5. **Backup:** Keep local copy of all content

---

## 📞 Quick Help

**Local URL:** http://localhost:3000
**Documentation:** Start with `QUICK_START.md`
**Deployment:** See `DEPLOYMENT.md`
**Future Features:** See `FUTURE_FEATURES.md`

---

**Print this card for quick reference! 📌**

