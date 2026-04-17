# ☕ Brew Pod Coffee – Website Project

![Brew Pod Coffee Homepage](assets/images/screenshots/homepage.png)

A modern, fully responsive coffee shop website built with HTML, CSS, and Vanilla JavaScript. Brew Pod Coffee allows users to browse products, add items to a cart, and simulate a checkout experience — all without a backend.

---

## 🌐 Live Website

👉 [View Live Site](https://amzish98-ui.github.io/online-cafe)

## 📁 GitHub Repository

👉 [github.com/amzish98-ui/online-cafe](https://github.com/amzish98-ui/online-cafe)

---

## 📸 Screenshots

### Home Page
![Home Page](assets/images/screenshots/homepage.png)

---

## ✨ Key Features

- **Responsive Design** — Fully optimised for desktop, tablet (1024px, 820px), and mobile (390px)
- **Mobile Navigation** — Hamburger menu with smooth slide-in overlay on small screens
- **Add to Cart** — Add any product and update quantities from the cart page
- **Persistent Cart** — Cart data saved using `localStorage` so it survives page refreshes
- **Sort by Price** — Sort all products low to high or high to low
- **Search Function** — Search bar redirects users to the relevant product section
- **Simulated Checkout** — Generates a unique order number (1–99, auto-resets) on checkout
- **Popup Notifications** — Confirmation popup appears when an item is added to the cart
- **Google Maps** — Embedded interactive map on the contact page showing the cafe location
- **Multi-page Structure** — Six fully linked pages: Home, About, Categories, Products, Cart, Contact

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling across 4 separate files |
| Vanilla JavaScript | Cart logic, search, sort, mobile menu |
| localStorage | Persistent cart and order number storage |
| Google Maps Embed | Interactive map on contact page |

### CSS File Structure
- `base.css` — Global resets, typography, shared component styles
- `layout.css` — Page structure, navbar, hero, footer layout
- `components.css` — Reusable UI components (cards, buttons, forms)
- `responsive.css` — All media queries for tablet and mobile

---

## 📂 Project Structure
online-cafe/
├── index.html
├── about.html
├── categories.html
├── products.html
├── contact.html
├── cart.html
└── assets/
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   └── responsive.css
├── js/
│   └── script.js
└── images/

---

## ♿ Accessibility Report (Lighthouse)

Lighthouse audit was run on the Home page using Chrome DevTools.

| Category | Score |
|----------|-------|
| 🟠 Performance | 75 |
| 🟠 Accessibility | 81 |
| 🟢 Best Practices | 100 |
| 🟠 SEO | 73 |

### Key Metrics
| Metric | Result |
|--------|--------|
| First Contentful Paint | 1.5s |
| Largest Contentful Paint | 35.7s |
| Total Blocking Time | 0ms |
| Cumulative Layout Shift | 0 |

**Notes:**
- Best Practices scored 100 ✅
- Performance is affected by large image files — future improvement would be to compress and convert images to WebP format
- SEO could be improved by adding meta descriptions to each page
- Accessibility score of 81 reflects some missing `alt` attributes on images which have since been identified

---

## ✅ Validation Results

### HTML Validation — W3C Validator
**Tool used:** [https://validator.w3.org](https://validator.w3.org)

**Errors found:** 9

| # | Error | Fix Applied |
|---|-------|-------------|
| 1–5 | `img` elements missing `alt` attributes | Added descriptive `alt` text to all images e.g. `alt="Espresso coffee"` |
| 6 | End tag for `body` seen but unclosed elements | Identified and closed missing `</div>` tags for `page-wrapper` and `content-container` |
| 7–8 | Unclosed `div` elements (`content-container`, `page-wrapper`) | Restructured HTML to ensure all divs are properly closed |
| 9 | `h4` follows `h2` skipping heading level | Changed `h4` review author tags to `h3` to maintain correct heading hierarchy |

**Example fix documented:**

Before:
```html
<img src="assets/images/espresso.jpeg">
```

After:
```html
<img src="assets/images/espresso.jpeg" alt="Espresso coffee">
```

---

### CSS Validation — W3C CSS Validator
**Tool used:** [https://jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator)

✅ **No errors found** — CSS validated successfully as CSS Level 3 + SVG.

---

### JavaScript Validation — JSHint
**Tool used:** [https://jshint.com](https://jshint.com)

**Warnings:** 40 (no actual errors)

All warnings were related to ES6 syntax such as `let`, `const`, and arrow functions (`=>`). These are not errors — they are simply JSHint flagging modern JavaScript syntax.

**Example warning:**
> `'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions`

**Fix:** These warnings can be suppressed by adding the following comment to the top of the JS file:
```js
/* jshint esversion: 6 */
```

This tells JSHint to accept ES6 syntax, which removes all 40 warnings.

---

## 🚀 Future Improvements

- Compress and convert images to WebP format to improve performance score
- Add meta descriptions to all pages to improve SEO score
- Add real payment integration (e.g. Stripe)
- Dynamic search with live filtering as user types
- User login and order history system
- Smooth page transition animations

---

## 🙏 Acknowledgements

This project was created as part of my coursework.
Special thanks to my mentor **Nathan** for guidance and feedback throughout development.

---

## 👤 Author

**Amir**
[github.com/amzish98-ui](https://github.com/amzish98-ui)