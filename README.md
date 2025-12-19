# 🏛️ Gram Panchayat Website

A modern, responsive website for village Gram Panchayat administration built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

### Current Features (Ready to Use)
- ✅ **Beautiful Modern UI** - Professional design with Indian flag colors
- ✅ **Responsive Design** - Perfect on mobile, tablet, and desktop
- ✅ **Member Showcase** - Display Sarpanch, Up-Sarpanch, Gram Sevak, and Panch members
- ✅ **Development Works Gallery** - Showcase completed and ongoing projects
- ✅ **Contact Information** - Office details, hours, and contact methods
- ✅ **Statistics Dashboard** - Population, households, and infrastructure stats
- ✅ **Smooth Navigation** - Sticky header with smooth scrolling
- ✅ **SEO Optimized** - Better visibility on search engines

### Easy to Add Later
- 📋 **Certificate Applications** (Birth, Death, Income, Caste)
- 💰 **Online Tax Payment Integration**
- 📝 **Complaint/Grievance System**
- 📢 **Notice Board & Announcements**
- 📊 **Budget & Expenditure Reports**
- 🗳️ **Meeting Minutes & Resolutions**
- 📱 **SMS/Email Notifications**
- 🔐 **Admin Panel for Staff**
- 📄 **Document Downloads** (Forms, Certificates)
- 🌾 **Schemes & Benefits Information**

## 🚀 Quick Start

### Local Development

```bash
# Navigate to project
cd grampanchayat-website

# Install dependencies (already done)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization Guide

### 1. Update Village Information

Edit `app/page.tsx` and replace these placeholders:

```typescript
// Header Section (Line ~24-28)
[Village Name] → Your village name
[Taluka] → Your taluka
[District] → Your district  
[State] → Your state

// Stats Section (Line ~80-110)
Update population, households, and infrastructure numbers

// Contact Section (Line ~390-420)
Update address, phone, email, and PIN code
```

### 2. Add Member Photos

Replace the placeholder avatar with real photos:

```typescript
// Current placeholder (Line ~165):
<div className="w-32 h-32 bg-gray-200 rounded-full...">
  <Users className="w-16 h-16 text-gray-400" />
</div>

// Replace with:
<Image 
  src="/images/sarpanch.jpg" 
  alt="Sarpanch Name"
  width={128}
  height={128}
  className="rounded-full"
/>
```

**Add photos to:** `public/images/` folder (create if doesn't exist)

### 3. Add Project Images

```typescript
// Current placeholder (Line ~290):
<div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600...">
  <ImageIcon className="w-20 h-20 text-white opacity-50" />
</div>

// Replace with:
<Image 
  src="/images/projects/road-construction.jpg"
  alt="Road Construction Project"
  width={400}
  height={192}
  className="w-full h-48 object-cover"
/>
```

### 4. Update Colors (Optional)

The website uses Indian flag colors (Orange, White, Green). To customize:

Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#FF6B35',  // Custom orange
      secondary: '#2E8B57', // Custom green
    }
  }
}
```

## 🌐 Deployment (10 Minutes)

### Option 1: Deploy to Vercel (Recommended - FREE)

1. **Push to GitHub:**
   ```bash
   cd grampanchayat-website
   git add .
   git commit -m "Initial Gram Panchayat website"
   
   # Create new repo on GitHub, then:
   git remote add origin https://github.com/yourusername/grampanchayat-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy" (takes 2-3 minutes)
   - Done! Your site is live at `yourproject.vercel.app`

3. **Add Custom Domain (Optional):**
   - Buy domain (e.g., `yourvillage.org.in` from GoDaddy/Namecheap)
   - In Vercel Dashboard → Settings → Domains
   - Add your domain and follow DNS instructions
   - SSL certificate is automatically provided (FREE)

### Option 2: Deploy to Netlify (Also FREE)

1. Push code to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import from Git"
4. Select your repository
5. Click "Deploy" - Done!

## 📱 Mobile Optimization

The website is fully responsive and mobile-first:
- ✅ Touch-friendly buttons and links
- ✅ Readable text on small screens
- ✅ Optimized images for faster loading
- ✅ Works on 2G/3G networks

## 🔧 Technical Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)
- **Performance:** Static Site Generation (SSG)

## 📊 Future Enhancements

### Phase 2 (Can Add Anytime):
1. **Certificate System**
   ```typescript
   // Add form for birth/death/income certificates
   // Store in database (Supabase/Firebase)
   // Generate PDFs
   ```

2. **Payment Integration**
   ```typescript
   // Integrate Razorpay/Paytm
   // For property tax, water bills
   ```

3. **Admin Panel**
   ```typescript
   // Add NextAuth.js for authentication
   // Create admin dashboard
   // Manage members, projects, announcements
   ```

4. **Database Integration**
   ```typescript
   // Connect to Supabase (free tier)
   // Store members, projects, applications
   // Real-time updates
   ```

## 💰 Cost Breakdown

| Service | Cost | Notes |
|---------|------|-------|
| Hosting (Vercel) | FREE | 100GB bandwidth/month |
| SSL Certificate | FREE | Auto-included |
| Domain (.in) | ~₹500/year | Optional |
| **Total** | **FREE - ₹500/year** | Just domain cost |

## 📞 Support

For customization help or adding new features, the code is well-structured and easy to extend.

### Common Tasks:

**Add a new section:**
```typescript
// In app/page.tsx, add before footer:
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    {/* Your content */}
  </div>
</section>
```

**Add a new page:**
```bash
# Create: app/schemes/page.tsx
export default function SchemesPage() {
  return <div>Schemes content</div>
}
```

**Change fonts:**
```typescript
// In app/layout.tsx
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });
```

## 🎨 Design Credits

- Color Scheme: Indian National Flag colors
- Icons: Lucide React
- Font: Inter (Google Fonts)
- Layout: Custom design for Gram Panchayat needs

---

**Made with ❤️ for Indian Villages**

For questions or support, create an issue in the repository.
# aastan-grampanchayat-website
