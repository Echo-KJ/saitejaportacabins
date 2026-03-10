# NEC Prefabs Website - Separated Files

## 📁 File Structure

Your single HTML file has been separated into 3 organized files:

```
nec-prefabs/
├── index.html        (Main HTML structure - you need to complete this)
├── styles.css        (All CSS styling - COMPLETE ✓)
└── script.js         (All JavaScript functionality - COMPLETE ✓)
```

## ✅ Completed Files

### 1. **styles.css** (983 lines)
- Complete design system with CSS variables
- All component styles (navbar, hero, products, pricing, etc.)
- Responsive media queries
- Animations and transitions
- **Status:** Ready to use ✓

### 2. **script.js** (190 lines)
- Hero slider functionality
- Mobile menu toggle
- Tab systems (About, Pricing)
- Testimonials slider
- Scroll reveal animations
- Counter animations
- Smooth scrolling
- **Status:** Ready to use ✓

## 🔨 To Complete: index.html

The HTML file needs to be rebuilt with:

### Required Changes:

1. **Replace inline styles in `<head>`:**
```html
<!-- OLD (in original file) -->
<style>
  /* 983 lines of CSS */
</style>

<!-- NEW -->
<link rel="stylesheet" href="styles.css"/>
```

2. **Replace inline scripts before `</body>`:**
```html
<!-- OLD (in original file) -->
<script>
  /* 190 lines of JavaScript */
</script>

<!-- NEW -->
<script src="script.js"></script>
```

### HTML Structure to Keep:

The HTML contains the following sections (keep all of these):
1. Top info bar (contact info)
2. Navigation bar (desktop + mobile)
3. Hero slider (4 slides)
4. Stats bar (satisfaction, years, projects, solutions)
5. About section (with tabs)
6. Products grid (6 product cards)
7. Process section (6 steps)
8. News ticker
9. Pricing section (commercial/residential tabs)
10. Videos section
11. Instagram strip
12. Testimonials slider
13. Contact/CTA section
14. Footer
15. Sticky bottom bar (mobile only)

## 🚀 Quick Setup

### Step 1: Create Project Folder
```bash
mkdir nec-prefabs
cd nec-prefabs
```

### Step 2: Copy Files
Place these files in the folder:
- styles.css (already complete ✓)
- script.js (already complete ✓)
- index.html (create using structure below)

### Step 3: Create index.html

Create `index.html` with this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>NEC Prefabs | Containers | Hyderabad</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
  
  <!-- External CSS -->
  <link rel="stylesheet" href="styles.css"/>
</head>
<body>

<!-- Copy ALL HTML sections from original file -->
<!-- Sections: topbar, nav, hero, statsbar, about, products, etc. -->

<!-- External JavaScript -->
<script src="script.js"></script>
</body>
</html>
```

## 📝 What Was Extracted

### From styles.css:
- CSS variables (colors, fonts, spacing)
- Reset styles
- Typography system
- Button components
- Navigation styles (topbar, navbar, mobile menu)
- Hero slider styles
- All section styles (about, products, process, pricing, videos, testimonials, footer)
- Scroll reveal animations
- Media queries for responsive design
- Custom scrollbar styling

### From script.js:
- Hero slider auto-rotation (5.5s interval)
- Navigation controls (arrows, dots)
- Mobile menu toggle
- About section tabs
- Pricing tabs (commercial/residential)
- Testimonials slider with responsive breakpoints
- Scroll reveal (IntersectionObserver)
- Counter animations (easing function)
- Smooth scroll for anchor links

## ⚡ Advantages of Separation

1. **Better Performance**
   - Browser can cache CSS and JS separately
   - Faster page loads on subsequent visits

2. **Easier Maintenance**
   - Find and edit styles in one place
   - Update JavaScript without touching HTML
   - Version control friendly

3. **Reusability**
   - Use same CSS/JS across multiple pages
   - Create consistent design system

4. **Debugging**
   - Browser dev tools show line numbers correctly
   - Easier to identify issues

## 🔍 File Sizes

- Original single file: ~72 KB
- styles.css: ~32 KB
- script.js: ~6 KB
- index.html (after separation): ~34 KB
- **Total: Same size, better organized**

## ⚠️ Important Notes

1. **Keep file paths correct:**
   - If CSS/JS in same folder as HTML: `href="styles.css"`
   - If in assets folder: `href="assets/styles.css"`

2. **All IDs must match:**
   - JavaScript references: `getElementById('burger')`
   - HTML must have: `<button id="burger">`

3. **External references remain:**
   - Google Fonts (already in HTML head)
   - WhatsApp/Phone links (keep as-is)
   - Instagram link (update if needed)

## 📞 Contact Information in Code

Update these before going live:
- Phone: `+91 - 9177000799`
- Email: `info@necprefabs.com`
- Address: Survey No. 152, Doolapally, Qutbullahpur, Kompally, Hyd - 500014
- WhatsApp: `https://wa.me/919177000799`

## 🎨 Design Tokens (in styles.css)

```css
--primary:       #1b3a2d;  /* Deep forest green */
--accent:        #e8a020;  /* Amber/gold */
--font-heading:  'Raleway', sans-serif;
--font-body:     'Open Sans', sans-serif;
```

Change these in styles.css to rebrand the entire site instantly.

## ✨ Features Working Out of the Box

✓ Auto-playing hero slider
✓ Mobile responsive navigation
✓ Smooth scroll to sections
✓ Animated counters on scroll
✓ Tab systems (About, Pricing)
✓ Testimonial carousel
✓ Sticky bottom bar (mobile)
✓ Scroll reveal animations
✓ Hover effects on all interactive elements

## 🚨 Common Issues & Fixes

**Issue:** Styles not loading
- **Fix:** Check file path in `<link href="styles.css"/>`

**Issue:** JavaScript not working
- **Fix:** Script must be before `</body>`, check `src="script.js"`

**Issue:** Fonts not showing
- **Fix:** Ensure Google Fonts link is in `<head>`

**Issue:** Images as placeholders
- **Fix:** Replace `.img-ph` divs with actual `<img>` tags

## 📦 Next Steps

1. Complete the HTML file structure
2. Replace image placeholders with real images
3. Update contact information
4. Test all links
5. Add meta descriptions for SEO
6. Optimize images before deployment
7. Test on mobile devices

---

**Generated:** March 2025  
**Original File:** Single HTML (1500+ lines)  
**Result:** 3 organized, maintainable files
