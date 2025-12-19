# 🗺️ Website Sitemap

This document shows the complete structure of your Gram Panchayat website.

## 📄 Page Structure

Currently, the website is a **single-page application** with smooth scrolling sections.

```
Homepage (/)
│
├─── Header (Sticky Navigation)
│    ├─ Logo & Village Name
│    ├─ Navigation Links
│    │   ├─ Home
│    │   ├─ Members
│    │   ├─ Works
│    │   └─ Contact
│    └─ Indian Flag Stripe (Orange-White-Green)
│
├─── Hero Section (#home)
│    ├─ Welcome Message
│    ├─ Village Description
│    └─ Call-to-Action Buttons
│
├─── Statistics Section
│    ├─ Population Count
│    ├─ Total Households
│    ├─ Water Supply Coverage
│    └─ Electrification Status
│
├─── Panchayat Members Section (#members)
│    ├─ Section Title
│    ├─ Leadership Cards
│    │   ├─ Sarpanch (Orange card)
│    │   ├─ Up-Sarpanch (Green card)
│    │   └─ Gram Sevak (Blue card)
│    └─ Panch Members Grid
│        ├─ Panch Member 1 (Ward 1)
│        ├─ Panch Member 2 (Ward 2)
│        ├─ Panch Member 3 (Ward 3)
│        └─ Panch Member 4 (Ward 4)
│
├─── Development Works Section (#works)
│    ├─ Section Title
│    └─ Project Cards
│        ├─ Project 1 (Road Construction)
│        ├─ Project 2 (Water Tank)
│        └─ Project 3 (LED Street Lights)
│
├─── Contact Section (#contact)
│    ├─ Section Title
│    ├─ Office Information Card
│    │   ├─ Address
│    │   ├─ Phone Number
│    │   └─ Email Address
│    └─ Office Hours Card
│        ├─ Weekday Timings
│        ├─ Saturday Timings
│        ├─ Sunday (Closed)
│        └─ Emergency Contact Note
│
└─── Footer
     ├─ Village Name
     ├─ Mission Statement
     ├─ Indian Flag Stripe
     └─ Copyright Notice
```

---

## 🎨 Visual Layout

### Desktop View (1024px+)
```
+------------------------------------------+
|  🏛️ Logo | Village Name    Home | Members | Works | Contact |
+------------------------------------------+
|                                          |
|         🏛️ WELCOME TO OUR VILLAGE       |
|        Serving our community...          |
|                                          |
|   [Meet Our Team]  [View Our Work]      |
+------------------------------------------+
|  👥 2,500+ | 🏠 450+ | 💧 100% | ⚡ 100%  |
+------------------------------------------+
|           PANCHAYAT MEMBERS              |
|                                          |
|  [Sarpanch]  [Up-Sarpanch]  [Gram Sevak]|
|     🟠           🟢            🔵         |
|                                          |
|  [Panch 1] [Panch 2] [Panch 3] [Panch 4]|
+------------------------------------------+
|          DEVELOPMENT WORKS               |
|                                          |
|  [Project 1]  [Project 2]  [Project 3]  |
+------------------------------------------+
|            CONTACT US                    |
|                                          |
|  [Office Info]    [Office Hours]        |
+------------------------------------------+
|          © 2024 Village Name             |
+------------------------------------------+
```

### Mobile View (< 768px)
```
+-------------------+
|  🏛️ Village Name  |
|     ☰ Menu        |
+-------------------+
|   🏛️ WELCOME      |
|    TO OUR         |
|    VILLAGE        |
|                   |
| [Meet Our Team]   |
| [View Our Work]   |
+-------------------+
|  👥 2,500+        |
|  🏠 450+          |
|  💧 100%          |
|  ⚡ 100%          |
+-------------------+
|  MEMBERS          |
|                   |
|  [Sarpanch]       |
|      🟠           |
|  [Up-Sarpanch]    |
|      🟢           |
|  [Gram Sevak]     |
|      🔵           |
|                   |
|  [Panch 1]        |
|  [Panch 2]        |
|  [Panch 3]        |
|  [Panch 4]        |
+-------------------+
|  WORKS            |
|                   |
|  [Project 1]      |
|  [Project 2]      |
|  [Project 3]      |
+-------------------+
|  CONTACT          |
|                   |
|  [Office Info]    |
|  [Hours]          |
+-------------------+
|  © 2024           |
+-------------------+
```

---

## 📊 Section Details

### Header
- **Position:** Fixed at top (follows scroll)
- **Height:** ~80px
- **Background:** White with shadow
- **Elements:** Logo, Village name, Navigation links

### Hero Section
- **Height:** ~400px
- **Background:** Orange to Green gradient
- **Purpose:** Welcome visitors, set tone
- **CTAs:** 2 buttons (Member & Works)

### Statistics
- **Layout:** 4-column grid (responsive)
- **Icons:** Users, Building, Droplets, Zap
- **Colors:** Each stat has unique background color

### Members Section
- **Background:** Light gray (bg-gray-50)
- **Layout:** 
  - Leadership: 3-column grid
  - Panch: 4-column grid
- **Each card shows:** Photo, role badge, name, position, phone

### Works Section
- **Background:** White
- **Layout:** 3-column grid (responsive)
- **Each card shows:** 
  - Image/placeholder
  - Status badge (Completed/In Progress)
  - Project name
  - Description
  - Budget & Year

### Contact Section
- **Background:** Light gray (bg-gray-50)
- **Layout:** 2-column grid
- **Left card:** Address, Phone, Email
- **Right card:** Office hours + Emergency note

### Footer
- **Background:** Dark gray (gray-800)
- **Text:** White
- **Elements:** 
  - Village name
  - Mission statement
  - Tricolor stripe
  - Copyright

---

## 🎯 Interactive Elements

### Navigation
- Smooth scroll to sections
- Hover effects on links
- Mobile-responsive menu (for future)

### Buttons
- Primary: Orange background, white text
- Secondary: White background, orange border
- Hover: Slightly darker shade
- Transition: 150ms smooth

### Cards
- Hover: Shadow increases
- Transition: 300ms smooth
- Rounded corners: 12px
- Shadow: Subtle elevation

---

## 🎨 Color Palette

### Primary Colors
- **Orange:** `#FF6B35` (rgb(255, 107, 53))
- **Green:** `#2E8B57` (rgb(46, 139, 87))
- **White:** `#FFFFFF`

### Background Colors
- **Light Gray:** `#F9FAFB` (bg-gray-50)
- **Medium Gray:** `#6B7280` (text-gray-600)
- **Dark Gray:** `#1F2937` (bg-gray-800)

### Accent Colors
- **Blue:** `#3B82F6` (for Gram Sevak card)
- **Yellow:** `#F59E0B` (for in-progress badges)
- **Light variants:** 50, 100 for backgrounds

---

## 📱 Responsive Breakpoints

### Tailwind Default Breakpoints
```
sm:  640px  - Small tablets
md:  768px  - Tablets
lg:  1024px - Small laptops
xl:  1280px - Laptops
2xl: 1536px - Large screens
```

### Used in Website
- **Mobile first:** Default styles for mobile
- **md:** (768px+) - 2-3 column layouts
- **lg:** (1024px+) - Full desktop experience

---

## 🔄 Future Pages (Potential)

When you expand the website:

```
Homepage (/)
├─── About Us (/about)
├─── Schemes (/schemes)
├─── Notices (/notices)
├─── Gallery (/gallery)
├─── Documents (/documents)
├─── Apply Online (/apply)
│    ├─ Birth Certificate (/apply/birth)
│    ├─ Death Certificate (/apply/death)
│    ├─ Income Certificate (/apply/income)
│    └─ Caste Certificate (/apply/caste)
├─── Complaints (/complaints)
│    ├─ New Complaint (/complaints/new)
│    └─ Track Complaint (/complaints/track)
├─── Budget (/budget)
└─── Admin Dashboard (/admin)
     ├─ Login (/admin/login)
     ├─ Applications (/admin/applications)
     ├─ Complaints (/admin/complaints)
     └─ Content Management (/admin/content)
```

---

## 🗂️ Content Hierarchy

### Information Architecture
```
Level 1: Homepage
  └─ Level 2: Main Sections (Members, Works, Contact)
      └─ Level 3: Individual Cards (Each member, Each project)
          └─ Level 4: Details (Name, Phone, Description, etc.)
```

### Navigation Depth
- **Current:** 1 level (single page)
- **Future:** 2-3 levels when adding subpages

---

## 📐 Layout Grid

### Desktop (3-column example)
```
+----------+  +----------+  +----------+
|          |  |          |  |          |
| Item 1   |  | Item 2   |  | Item 3   |
|          |  |          |  |          |
+----------+  +----------+  +----------+
```

### Tablet (2-column)
```
+----------+  +----------+
|          |  |          |
| Item 1   |  | Item 2   |
|          |  |          |
+----------+  +----------+
+----------+
|          |
| Item 3   |
|          |
+----------+
```

### Mobile (1-column)
```
+----------+
|          |
| Item 1   |
|          |
+----------+
+----------+
|          |
| Item 2   |
|          |
+----------+
+----------+
|          |
| Item 3   |
|          |
+----------+
```

---

**This sitemap helps you understand the complete structure of your website!** 🗺️

