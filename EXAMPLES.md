# 📝 Example Customizations

This file shows **real examples** of how to customize your website with actual village data.

## 🏘️ Example 1: Sample Village "Rampur"

Here's how the content would look for a fictional village called "Rampur":

### Village Information
```typescript
// In app/page.tsx, Line 24-28

<h1 className="text-2xl font-bold text-gray-800">
  Rampur Gram Panchayat
</h1>
<p className="text-sm text-gray-600">
  Shirur • Pune • Maharashtra
</p>
```

### Statistics
```typescript
// In app/page.tsx, Line 82-110

<p className="text-3xl font-bold text-gray-800">3,200+</p>
<p className="text-gray-600">Population</p>

<p className="text-3xl font-bold text-gray-800">580+</p>
<p className="text-gray-600">Households</p>

<p className="text-3xl font-bold text-gray-800">95%</p>
<p className="text-gray-600">Water Supply</p>

<p className="text-3xl font-bold text-gray-800">100%</p>
<p className="text-gray-600">Electrification</p>
```

### Sarpanch Details
```typescript
// In app/page.tsx, Line 170

<h3 className="text-2xl font-bold text-gray-800 mb-2">
  Smt. Anita Deshmukh
</h3>
<p className="text-gray-600 mb-4">Head of Panchayat</p>
<div className="flex items-center justify-center gap-2 text-gray-600">
  <Phone className="w-4 h-4" />
  <span className="text-sm">+91 98765 43210</span>
</div>
```

### Contact Address
```typescript
// In app/page.tsx, Line 400-415

<p className="text-gray-600">
  Gram Panchayat Office<br />
  Rampur Village, Shirur Taluka<br />
  Pune District, Maharashtra - 412210
</p>

<p className="text-gray-600">+91 98765 43210</p>

<p className="text-gray-600">rampur.grampanchayat@pune.gov.in</p>
```

### Project Example
```typescript
// In app/page.tsx, Line 294-350

<h3 className="text-xl font-bold text-gray-800 mb-2">
  Village Road Widening
</h3>
<p className="text-gray-600 mb-4">
  Widened main village road from 12 feet to 20 feet with concrete pavement and proper drainage system
</p>
<div className="flex items-center justify-between text-sm text-gray-500">
  <span>Budget: ₹35 Lakhs</span>
  <span>2024</span>
</div>
```

---

## 🏘️ Example 2: Different State - Kerala Village

### Village Information
```typescript
<h1 className="text-2xl font-bold text-gray-800">
  Vadakkummuri Gram Panchayat
</h1>
<p className="text-sm text-gray-600">
  Thrissur • Kerala
</p>
```

### Statistics (Kerala-style)
```typescript
<p className="text-3xl font-bold text-gray-800">1,850+</p>
<p className="text-gray-600">Population</p>

<p className="text-3xl font-bold text-gray-800">320+</p>
<p className="text-gray-600">Households</p>

<p className="text-3xl font-bold text-gray-800">100%</p>
<p className="text-gray-600">Water Supply</p>

<p className="text-3xl font-bold text-gray-800">98%</p>
<p className="text-gray-600">Literacy Rate</p>  <!-- Kerala focus -->
```

### Members (Kerala naming)
```typescript
// President (instead of Sarpanch in some states)
<div className="inline-block bg-orange-100 text-orange-700...">
  <Award className="w-4 h-4 inline mr-1" />
  President
</div>
<h3 className="text-2xl font-bold text-gray-800 mb-2">
  Sri. Krishnan Nair
</h3>

// Vice President
<div className="inline-block bg-green-100 text-green-700...">
  Vice President
</div>
<h3 className="text-2xl font-bold text-gray-800 mb-2">
  Smt. Lakshmi Menon
</h3>

// Secretary
<div className="inline-block bg-blue-100 text-blue-700...">
  Secretary
</div>
<h3 className="text-2xl font-bold text-gray-800 mb-2">
  Sri. Rajan Pillai
</h3>
```

---

## 🏘️ Example 3: Rajasthan Village

### Village Information
```typescript
<h1 className="text-2xl font-bold text-gray-800">
  Jaisinghpura Gram Panchayat
</h1>
<p className="text-sm text-gray-600">
  Jaipur • Rajasthan
</p>
```

### Projects (Desert region focus)
```typescript
// Project 1: Water Conservation
<h3 className="text-xl font-bold text-gray-800 mb-2">
  Rainwater Harvesting System
</h3>
<p className="text-gray-600 mb-4">
  Construction of 5 community rainwater harvesting structures with 1 lakh liter capacity each to combat water scarcity
</p>
<div className="flex items-center justify-between text-sm text-gray-500">
  <span>Budget: ₹42 Lakhs</span>
  <span>2024</span>
</div>

// Project 2: Solar Power
<h3 className="text-xl font-bold text-gray-800 mb-2">
  Solar Street Lighting
</h3>
<p className="text-gray-600 mb-4">
  Installation of 150 solar-powered LED street lights across the village for sustainable energy
</p>
<div className="flex items-center justify-between text-sm text-gray-500">
  <span>Budget: ₹18 Lakhs</span>
  <span>2023</span>
</div>
```

---

## 🎨 Example 4: Adding Custom Statistics

You can change the 4 statistics to anything relevant:

### Rural Development Focus
```typescript
// Replace existing stats with these

// Stat 1: Toilets
<div className="text-center p-6 bg-orange-50 rounded-xl">
  <Home className="w-12 h-12 text-orange-600 mx-auto mb-3" />
  <p className="text-3xl font-bold text-gray-800">100%</p>
  <p className="text-gray-600">Toilet Coverage</p>
</div>

// Stat 2: Roads
<div className="text-center p-6 bg-green-50 rounded-xl">
  <Route className="w-12 h-12 text-green-600 mx-auto mb-3" />
  <p className="text-3xl font-bold text-gray-800">25 km</p>
  <p className="text-gray-600">Paved Roads</p>
</div>

// Stat 3: Schools
<div className="text-center p-6 bg-blue-50 rounded-xl">
  <School className="w-12 h-12 text-blue-600 mx-auto mb-3" />
  <p className="text-3xl font-bold text-gray-800">3</p>
  <p className="text-gray-600">Schools</p>
</div>

// Stat 4: Healthcare
<div className="text-center p-6 bg-red-50 rounded-xl">
  <Heart className="w-12 h-12 text-red-600 mx-auto mb-3" />
  <p className="text-3xl font-bold text-gray-800">1</p>
  <p className="text-gray-600">Health Center</p>
</div>
```

**Note:** You'll need to import these icons at the top:
```typescript
import { Home, Route, School, Heart } from "lucide-react";
```

---

## 🎨 Example 5: Changing Colors

### Make it Blue-themed instead of Orange
```typescript
// Find and replace in app/page.tsx:

// OLD:
bg-orange-500 → bg-blue-500
bg-orange-600 → bg-blue-600
bg-orange-700 → bg-blue-700
text-orange-600 → text-blue-600
text-orange-700 → text-blue-700
border-orange-600 → border-blue-600

// Keep green as is for contrast
```

### Make it Purple-themed
```typescript
// Replace orange with purple:
bg-orange-500 → bg-purple-500
bg-orange-600 → bg-purple-600
text-orange-600 → text-purple-600
hover:bg-orange-700 → hover:bg-purple-700
```

---

## 🖼️ Example 6: Adding Real Photos

### Step 1: Organize Your Photos
```
public/
└── images/
    ├── members/
    │   ├── sarpanch.jpg          (400x400px recommended)
    │   ├── up-sarpanch.jpg
    │   ├── gram-sevak.jpg
    │   ├── panch-1.jpg
    │   ├── panch-2.jpg
    │   ├── panch-3.jpg
    │   └── panch-4.jpg
    └── projects/
        ├── road-construction.jpg  (800x600px recommended)
        ├── water-tank.jpg
        └── street-lights.jpg
```

### Step 2: Update Code for Sarpanch Photo
```typescript
// In app/page.tsx, Line ~165
// Replace this:
<div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 border-4 border-white flex items-center justify-center">
  <Users className="w-16 h-16 text-gray-400" />
</div>

// With this:
<div className="w-32 h-32 mx-auto mb-4 border-4 border-white rounded-full overflow-hidden">
  <Image 
    src="/images/members/sarpanch.jpg" 
    alt="Sarpanch Anita Deshmukh"
    width={128}
    height={128}
    className="object-cover w-full h-full"
  />
</div>
```

### Step 3: Update Project Images
```typescript
// In app/page.tsx, Line ~290
// Replace this:
<div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
  <ImageIcon className="w-20 h-20 text-white opacity-50" />
</div>

// With this:
<div className="h-48 relative overflow-hidden">
  <Image 
    src="/images/projects/road-construction.jpg" 
    alt="Road Construction Project"
    width={400}
    height={192}
    className="object-cover w-full h-full"
  />
</div>
```

---

## 📱 Example 7: Adding WhatsApp Contact

Add a WhatsApp button for easy contact:

```typescript
// In Contact Section, after office info
<div className="mt-6">
  <a 
    href="https://wa.me/919876543210?text=Hello%20Gram%20Panchayat"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
  >
    <MessageCircle className="w-5 h-5" />
    Contact on WhatsApp
  </a>
</div>
```

**Don't forget to import:**
```typescript
import { MessageCircle } from "lucide-react";
```

---

## 🎯 Example 8: Adding More Panch Members

If you have 8 Panch members instead of 4:

```typescript
// In app/page.tsx, Line ~246
// Change grid from 4 columns to flexible:
<div className="grid md:grid-cols-4 gap-6">  // OLD
<div className="grid md:grid-cols-4 lg:grid-cols-4 gap-6">  // NEW

// Then add more members by copying the pattern:
{[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
  <div key={i} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
      <Users className="w-10 h-10 text-gray-400" />
    </div>
    <h4 className="text-lg font-bold text-gray-800 text-center mb-1">
      [Panch Name {i}]
    </h4>
    <p className="text-gray-600 text-center text-sm mb-2">Ward {i}</p>
    <div className="flex items-center justify-center gap-2 text-gray-600">
      <Phone className="w-3 h-3" />
      <span className="text-xs">+91 XXXXX XXXXX</span>
    </div>
  </div>
))}
```

---

## ✉️ Example 9: Adding Email Link

Make email clickable:

```typescript
// In app/page.tsx, Line ~414
// Replace this:
<p className="text-gray-600">grampanchayat@example.com</p>

// With this:
<a 
  href="mailto:rampur.gp@pune.gov.in" 
  className="text-gray-600 hover:text-orange-600 transition"
>
  rampur.gp@pune.gov.in
</a>
```

---

## 📞 Example 10: Making Phone Numbers Clickable

```typescript
// Replace static phone numbers with clickable links:
// OLD:
<span className="text-sm">+91 98765 43210</span>

// NEW:
<a 
  href="tel:+919876543210" 
  className="text-sm hover:text-orange-600 transition"
>
  +91 98765 43210
</a>
```

---

## 🗺️ Example 11: Adding Google Maps

Add a map in the Contact section:

```typescript
// After contact information, add:
<div className="mt-8">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Find Us</h3>
  <div className="w-full h-64 rounded-lg overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>
```

**To get embed code:**
1. Go to Google Maps
2. Search your Panchayat office
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL

---

## 📅 Example 12: Adding Meeting Schedule

Add a section for regular meetings:

```typescript
// Add before footer
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Gram Sabha Meetings
      </h2>
      <p className="text-gray-600">Regular meeting schedule</p>
    </div>
    
    <div className="max-w-2xl mx-auto bg-orange-50 rounded-xl p-8">
      <div className="text-center">
        <Calendar className="w-16 h-16 text-orange-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Every First Sunday
        </h3>
        <p className="text-gray-600 mb-2">Time: 10:00 AM</p>
        <p className="text-gray-600">Venue: Gram Panchayat Office</p>
      </div>
    </div>
  </div>
</section>
```

---

## 💡 Pro Tips

### Tip 1: Keep Backups
Before making changes, copy the original:
```bash
cp app/page.tsx app/page.backup.tsx
```

### Tip 2: Test Locally First
Always test changes at http://localhost:3000 before deploying

### Tip 3: Use Real Data
Even if you don't have photos, update text with real information first

### Tip 4: Mobile-First
Always check how it looks on mobile (most villagers will use phones)

### Tip 5: Consistent Naming
Keep file names simple: `sarpanch.jpg` not `IMG_20240315_143022.jpg`

---

**Use these examples as templates for your own village!** 📝

