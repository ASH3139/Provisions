# Sri Mahalakshmi Provisions — React Website

A responsive, premium-style grocery shop website built with React, Vite, and plain CSS.

## Features
- Responsive desktop, tablet, and mobile layout
- Sticky navigation and mobile menu
- Product catalog with 24 demo products across six categories
- Live text search and category filtering
- Clear-filters empty state
- About, location, opening-hours, and contact sections
- Google Maps search link using the supplied store address
- No cart, checkout, ordering, or backend

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally
1. Extract the project folder.
2. Open a terminal in `sri-mahalakshmi-provisions`.
3. Install packages:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```
The production output is created in `dist/`. Deploy that folder to a static hosting service such as Netlify, Vercel, or GitHub Pages (with suitable Vite base configuration for a project subpath).

## Replace demo content before launch
- `src/data/products.js`: names, prices, units, descriptions, categories, and image IDs.
- `src/components/VisitUs.jsx`: shop address, confirmed opening hours (Monday–Sunday, 10:00 AM–9:30 PM), and public phone numbers (+91 92462 29880 and +91 79896 58880). Verify these details before launch.
- `src/components/About.jsx`: replace generic introduction with the shop's real story and verified claims.
- `src/components/Hero.jsx`: replace the generic brand description as desired.
- `public/images/`: optionally store locally licensed product images and update product image paths.
- `index.html`: update metadata if the public-facing brand description changes.

## Important
Product names, prices, descriptions, and availability are illustrative samples, not verified shop inventory or pricing. Images are loaded from Unsplash over the internet, so image loading requires connectivity. Confirm usage/licensing and replace with store-owned or properly licensed imagery before public launch.
