# ⚡ REYAZ ELECTRONIC STORE

A modern, premium, fully responsive electronics e-commerce web application engineered with a deep navy / electric blue palette, fast-loading architecture, and comprehensive client-side shopping functionality.

---

## 🏬 Business Overview

- **Store Name**: REYAZ ELECTRONIC STORE
- **Tagline**: *“Your trusted destination for electronics and technology.”*
- **Industry**: Consumer Electronics, Smart Tech & Computing
- **Target Customers**: Local customers, families, students, professionals, and tech enthusiasts.
- **Philosophy**: *“At REYAZ ELECTRONIC STORE, we believe technology should make life easier, smarter and better. We offer a wide range of quality electronics, gadgets and accessories at competitive prices, while focusing on genuine products and excellent customer service.”*

---

## 🎨 Visual Identity & Design Tokens

- **Deep Navy Base**: `#0A1128` and `#0F1E3D`
- **Electric Blue Accents**: `#0066FF` and `#2563EB`
- **Cyber Cyan Highlights**: `#00D2FF`
- **Call-To-Action Vibrant Orange**: `#FF6B00`
- **Typography**: `Outfit` (Headings & Display) and `Plus Jakarta Sans` (Body)
- **Icons**: Official Lucide SVG vector icon suite

---

## 📁 Project Structure

```
reyaz-electronic-store/
├── index.html                   # Main storefront with all 14+ sections & interactive modals
├── open-store.bat               # Double-click launcher for Windows
├── README.md                    # Project documentation & feature manual
│
├── photos/                      # Dedicated local electronics product photography folder
│   ├── titan-5g-ultra.jpg       # Apple iPhone 16 Pro Max / Flagship
│   ├── titan-5g-ultra-g1.jpg    # Samsung Galaxy S25 Ultra
│   ├── titan-5g-ultra-g2.jpg    # OnePlus 13 Pro
│   ├── aurorabook-pro-16.jpg    # HP Pavilion 15 Core i7
│   ├── aeroblade-rtx.jpg        # Dell Inspiron 16 Plus RTX
│   ├── ultravision-curved-monitor.jpg # Samsung Neo QLED 65" 4K TV
│   ├── cybersound-anc.jpg       # Sony WH-1000XM5 Wireless Headphones
│   ├── voltboom-360.jpg         # JBL Charge 5 Bluetooth Speaker
│   ├── voltchronos-smartwatch.jpg # Apple Watch Ultra 2
│   ├── phantom-keyboard.jpg     # Logitech MX Mechanical Keyboard
│   ├── lumix-mirrorless-camera.jpg # Canon EOS R50 Mirrorless Camera
│   ├── pulsepods-pro-g1.jpg     # Anker 65W GaN Charger
│   ├── viperspeed-mouse.jpg     # Razer Gaming Mouse
│   ├── neopad-pro-12.jpg        # LG Smart Inverter Microwave
│   ├── hero-banner.jpg          # Store showcase banner
│   └── ... (31 local gallery assets)
│
├── css/
│   └── styles.css               # Design tokens, custom scrollbars, animations, glassmorphism
│
└── js/
    ├── products.js              # Comprehensive electronics catalog (15 flagship models, 10 categories)
    ├── store.js                 # Reactive state engine (Cart, Wishlist, Coupons, LocalStorage, Toasts)
    └── app.js                   # Application controller (Search, Filters, Modals, Checkout, Timer)
```

---

## 🚀 How to Open & Run the Store

You do not need Node.js, Python, or external web server software:

### Option 1: Double-Click
Simply double-click `open-store.bat` or `index.html` inside `reyaz-electronic-store/`.

### Option 2: PowerShell
```powershell
cd C:\Users\reyaz\.gemini\antigravity\scratch\reyaz-electronic-store
Start-Process .\index.html
```

---

## 🌟 Key Features & Sections

### 1. Sticky Responsive Header
- Prominent **REYAZ ELECTRONIC STORE** branding with glowing electric badge.
- Navigation links: Home, Shop, Categories, Deals, About Us, Contact.
- Live search bar with instant query dispatch.
- Wishlist icon with live badge counter.
- Shopping cart icon with item badge and quick drawer trigger.
- User account button with guest / logged-in state.
- Mobile hamburger menu drawer + thumb-friendly mobile bottom navigation bar.

### 2. Hero Section
- Headline: *“Upgrade Your World with Smart Technology”*
- Subheading: *“Discover the latest electronics, gadgets and accessories at REYAZ ELECTRONIC STORE.”*
- Action buttons: **Shop Now** and **Explore Deals**.
- Interactive flagship device montage with floating tech badges and trust indicators (100% Genuine, Fast Delivery, Official Warranty, 24/7 Tech Support).

### 3. Product Categories (All 10 Categories)
1. **Smartphones**
2. **Laptops**
3. **Televisions**
4. **Headphones & Earbuds**
5. **Smart Watches**
6. **Speakers**
7. **Cameras**
8. **Computer Accessories**
9. **Mobile Accessories**
10. **Home Appliances**
- Each category card includes an icon, active model counter, and a “View Products” button that immediately filters the catalog.

### 4. Special Deals Section
- Headline: *“Big Savings. Bigger Technology.”*
- Live real-time ticking countdown timer (Hours, Minutes, Seconds) updating every second.
- Limited-time deal cards with discount badges, price drops, stock progress bar, and direct “Grab Deal” buttons.

### 5. Featured Products & Interactive Catalog
- Realistic flagship products:
  - *Apple iPhone 16 Pro Max*
  - *Samsung Galaxy S25 Ultra 5G*
  - *OnePlus 13 Pro 5G*
  - *HP Pavilion 15 Core i7*
  - *Dell Inspiron 16 Plus RTX*
  - *Samsung Neo QLED 65" 4K Smart TV*
  - *Sony WH-1000XM5 Wireless Headphones*
  - *JBL Charge 5 Bluetooth Speaker*
  - *Apple Watch Ultra 2*
  - *Logitech MX Mechanical Keyboard*
  - *Canon EOS R50 Mirrorless Camera*
  - *Anker Prime 65W GaN Fast Charger*
  - *Razer DeathAdder V3 Pro Wireless Mouse*
  - *LG NeoChef 28L Smart Inverter Microwave*
  - *Sony Bravia XR 55" OLED 4K TV*
- Product card actions: Add to Cart, Buy Now (direct to checkout), Wishlist toggle, and Quick View.

### 6. Interactive Search, Filtering & Sorting
- Instant real-time search across Name, Brand, Category, and Specs.
- Category filter pills (All + 10 specific categories).
- Brand filter tags (Apple, Samsung, Sony, LG, OnePlus, HP, Dell, JBL, Logitech, Canon, etc.).
- Price range slider ($50 to $2,500) with dynamic numeric readout.
- Sorting: Featured, Price (Low to High), Price (High to Low), Customer Rating, and Top Discount %.
- “No products found” friendly empty state with instant “Reset All Filters” button.

### 7. Product Quick View / Details Modal
- Multi-image gallery with clickable thumbnail switcher.
- Brand, rating, review count, stock availability badge.
- Technical specifications matrix (Display, Processor, Storage, Camera, Battery, Warranty).
- Color / finish selector.
- Quantity selector (+ / -).
- Add to Cart, Buy Now with 1-Click, and related accessories recommendations.

### 8. Shopping Cart Drawer & Checkout
- Slide-out cart drawer with item increment/decrement and removal.
- Free delivery qualification progress bar ($500 threshold).
- Promo code validation engine (`REYAZ10` for 10% off, `TECH20` for 20% off, `WELCOME50` for $50 off).
- Multi-step checkout modal:
  - Step 1: Shipping address with contact details
  - Step 2: Payment method (UPI / QR instant, Credit/Debit card, Cash on delivery)
  - Step 3: Order review and calculation breakdown
  - Step 4: Official Order Confirmation receipt with unique Order ID and print option.

### 9. Why Choose Us
- 4 benefits with modern icons: Genuine Products, Best Prices, Fast Delivery, Customer Support.

### 10. Shop by Brand
- Grid of authorized brands: Apple, Samsung, Sony, LG, OnePlus, Xiaomi, HP, Dell, Lenovo, JBL, Logitech, Canon, Nikon.

### 11. Customer Reviews
- 4 realistic customer reviews with verified buyer badges, avatars, and authentic testimonials.

### 12. Newsletter & Contact
- Newsletter subscription with instant 10% promo code reward toast.
- Contact section with store location, phone, email, business hours, Google Maps placeholder, and contact form with client-side feedback.

### 13. Comprehensive Footer
- All requested columns: Shop, Customer Service, Company, Follow Us (Instagram, Facebook, YouTube, WhatsApp).
- Payment badges and official copyright: *© 2026 REYAZ ELECTRONIC STORE. All Rights Reserved.*
