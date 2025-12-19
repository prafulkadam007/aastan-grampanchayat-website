# Deployment Instructions

## 🚀 Quick Deploy to Vercel (5-10 minutes)

### Step 1: Prepare Your Code

```bash
cd /Users/prafulkadam/Documents/astan/grampanchayat-website

# Verify everything works locally
npm run dev
# Open http://localhost:3000 and check the site

# Stop the dev server (Ctrl+C)
npm run build  # This creates optimized production build
```

### Step 2: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Gram Panchayat website"

# Create a new repository on GitHub:
# Go to https://github.com/new
# Name it: grampanchayat-website
# Don't initialize with README (we already have code)

# Link your local repo to GitHub
git remote add origin https://github.com/YOUR_USERNAME/grampanchayat-website.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

**Option A: Via Vercel Website (Easiest)**

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account (FREE)
3. Click "Add New..." → "Project"
4. Select "Import Git Repository"
5. Find and select `grampanchayat-website`
6. Click "Deploy" (no configuration needed!)
7. Wait 2-3 minutes ⏰
8. Done! ✅ Your site is live at `https://grampanchayat-website-xyz.vercel.app`

**Option B: Via Vercel CLI (Advanced)**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts:
# - Login with GitHub
# - Confirm project settings
# - Deploy!
```

### Step 4: Add Custom Domain (Optional)

If you want a custom domain like `yourvillage.org.in`:

1. **Buy Domain:**
   - GoDaddy.com (India) - ₹299-599/year for .in domains
   - Namecheap.com - Similar pricing
   - HostGator India
   
2. **Add to Vercel:**
   - In Vercel Dashboard → Your Project → Settings → Domains
   - Click "Add Domain"
   - Enter: `yourvillage.org.in`
   - Follow DNS instructions provided
   
3. **Update DNS (at your domain registrar):**
   - Add the records Vercel shows you
   - Usually takes 5-60 minutes to propagate
   - SSL certificate is automatically generated (FREE! 🎉)

## 🌐 Alternative: Deploy to Netlify

### Via Netlify Website:

1. Go to [netlify.com](https://netlify.com)
2. Sign up (FREE)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"
7. Done! Live at `https://random-name.netlify.app`

### Via Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build your site
npm run build

# Deploy
netlify deploy --prod
```

## 📊 What You Get (FREE tier)

### Vercel Free Tier:
✅ 100 GB bandwidth/month  
✅ Unlimited websites  
✅ Auto SSL certificates  
✅ Global CDN  
✅ Automatic HTTPS  
✅ Preview deployments for each commit  
✅ 6,000 build minutes/month  

Perfect for a Gram Panchayat website!

### Netlify Free Tier:
✅ 100 GB bandwidth/month  
✅ 300 build minutes/month  
✅ Same features as Vercel  

## 🔄 Update Your Website

After deployment, updating is super easy:

```bash
# Make your changes in code
# Then:
git add .
git commit -m "Updated member information"
git push

# That's it! Vercel/Netlify auto-deploys in 2-3 minutes
```

## 📱 Share Your Website

Once deployed, share these links:

- **QR Code:** Generate at [qr-code-generator.com](https://www.qr-code-generator.com/) with your site URL
- **Social Media:** Post on village WhatsApp groups
- **Print:** Add to Panchayat office posters/notices

## 🆘 Troubleshooting

**Build fails on Vercel?**
```bash
# Test locally first:
npm run build

# If it fails, check the error
# Usually missing dependencies:
npm install
```

**Site looks different in production?**
- Clear browser cache (Ctrl+Shift+R)
- Check if images are in `public/` folder

**Need help?**
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

## ✅ Checklist Before Going Live

- [ ] Update all `[Village Name]` placeholders
- [ ] Update `[Taluka]`, `[District]`, `[State]` info
- [ ] Add real phone numbers and email
- [ ] Update office hours if different
- [ ] Add member photos (optional for v1)
- [ ] Add project images (optional for v1)
- [ ] Test on mobile device
- [ ] Test all navigation links
- [ ] Update meta description in `app/layout.tsx`
- [ ] Add favicon (create `app/favicon.ico`)

## 🎯 Next Steps After Deployment

1. **Announce to villagers** via WhatsApp/social media
2. **Print QR codes** for Panchayat office
3. **Submit to Google** for search indexing
4. **Collect feedback** from villagers
5. **Plan Phase 2 features** (certificate system, payments, etc.)

---

**Ready to deploy? Start with Step 1 above! 🚀**

