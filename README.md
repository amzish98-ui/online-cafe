☕ Brew Pod Coffee – Website Project
A modern, fully responsive coffee shop website built with HTML, CSS, and Vanilla JavaScript. Brew Pod Coffee allows users to browse products, add items to a cart, and simulate a checkout experience — all without a backend.

🌐 Live Website
👉 View Live Site
📁 GitHub Repository
👉 github.com/amzish98-ui/online-cafe

📸 Pages Overview
PageDescriptionHomeHero section, featured coffee, category previews, reviews, CTAAboutOur story, mission, coffee process, features, statsCategoriesVisual card layout linking to product sectionsProductsFull menu with add to cart and sort by priceCartView, update, and checkout cart itemsContactContact form, opening hours, and embedded Google Map

✨ Features

Responsive Design — Works on desktop, tablet (1024px, 820px) and mobile (390px)
Mobile Navigation — Hamburger menu with smooth slide-in overlay
Add to Cart — Add products and update quantities
Persistent Cart — Cart saved using localStorage across page visits
Sort by Price — Sort products low to high or high to low
Search Function — Search bar redirects to relevant product sections
Simulated Checkout — Generates unique order numbers (1–99, auto-resets)
Popup Notifications — Confirmation popup when items are added to cart
Google Maps — Embedded map on the contact page


🛠️ Technologies Used

HTML5 — Semantic page structure
CSS3 — Custom styling split across multiple files:

base.css — Global resets and shared styles
layout.css — Page structure and layout
components.css — Reusable UI components
responsive.css — Media queries for all screen sizes


Vanilla JavaScript — Cart logic, search, sort, mobile menu
localStorage — Persistent cart and order number storage


🎨 Design

Coffee bean background image with opacity overlay
Warm brown colour palette (#6b3e26, #8B4513, #d2a679)
Dark content container (#0f0f0f) for contrast
Fully consistent across Chrome, Edge, and other modern browsers
Clean, minimal UI inspired by modern coffee shop websites


📂 Project Structure
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

🚀 Future Improvements

Add real payment integration (e.g. Stripe)
Dynamic search with live filtering
User login and order history
Smooth page transition animations
Backend integration for real orders


🙏 Acknowledgements
This project was created as part of my coursework.
Special thanks to my mentor Nathan for guidance and feedback throughout development.

👤 Author
Amir
github.com/amzish98-ui