# ⚡ Ambika Electric - Industrial Electrical Engineering (React App)

A modern, attractive, interactive, and user-friendly single-page web application built with **React 19**, **Vite**, and **Tailwind CSS** for **Ambika Electric** — an industrial electrical engineering enterprise based in Sardar Industrial Estate, Kadadra, Gujarat.

> **Architecture:** This is a **100% pure React frontend** project with zero backend or database dependencies. It is fully self-contained and ready to deploy to Netlify, Vercel, or GitHub Pages.

---

## 🏢 Business & Contact Profile

- **Business Name**: Ambika Electric
- **Proprietor**: Vishad Patel
- **Category**: Industrial Electrical Engineering
- **Address**: Shop No. 22, Sardar Industrial Estate, Near Narnarayan Kanta, Kadadra, Gujarat – 382305, India
- **Phone Numbers**: `+91 99985 77955` / `+91 94084 99942`
- **Official Reference**: [ambikaelectric.netlify.app](https://ambikaelectric.netlify.app/)
- **Copyright**: 2026

---

## 🚀 Key Features

### 1. Interactive Industrial Load & Panel Estimator
- Input machinery specifications: **Motor Power (HP)**, **Operating Voltage (415V 3-Phase / 230V 1-Phase)**, and **Power Factor (cos φ)**.
- Quick preset buttons: `3 HP`, `5 HP`, `7.5 HP`, `10 HP`, `15 HP`, `20 HP`, `30 HP`, `50 HP`.
- **Live Calculations**:
  - Full-Load Current (FLA) in Amperes (e.g. `13.1 A` for 10 HP @ 415V)
  - Suggested multi-strand copper cable size (e.g. `2.5 sq mm`)
  - Recommended MCB/MCCB rating (e.g. `20 A`)
  - Recommended starter architecture (DOL, Star-Delta, Soft Starter/VFD)
- **One-click Actions**:
  - *"Request Custom Panel Quote for this Spec"* (auto-prefills specifications into quotation desk)
  - *"Copy Specs"* to clipboard

### 2. High-Resolution Industrial Photography & Gallery
- **Sardar Industrial Estate Facility Showcase**: Real-world workshop floor imagery showing motor rewinding bays, crane hoists, and control panel assembly.
- **Core Specialties Showcase**: High-definition photos for Motor Winding, Control Panels, Diagnostics, and Automation.
- **Interactive Lightbox Gallery**: Filter photos by category (`Motor Winding`, `Control Panels`, `Diagnostics`, `Automation`, `Workshop`) and click to view in full resolution.

### 3. Client-Side Enquiry & Instant WhatsApp Dispatch
- Interactive consultation form and custom panel quotation modal.
- Generates reference tracking codes (e.g. `#AE-4812`).
- Features **one-click direct dispatch to Vishad Patel on WhatsApp (`+91 99985 77955`)** with all technical parameters pre-formatted.
- Saves inquiries to browser `localStorage` for offline persistence.

---

## 📂 Project Structure

```
Ambika-Electric/
├── package.json               # Scripts & dependencies (React 19, Vite, Tailwind CSS, Lucide)
├── vite.config.js             # Vite configuration with Tailwind CSS plugin
├── index.html                 # HTML shell with industrial metadata & Google Fonts
├── .gitignore
├── README.md
├── public/
│   ├── favicon.svg            # Electric bolt favicon
│   └── images/                # High-res industrial photographs
│       ├── hero_workshop.jpg
│       ├── motor_winding.jpg
│       ├── custom_control_panel.jpg
│       ├── electrical_diagnostics.jpg
│       └── industrial_automation.jpg
└── src/
    ├── App.jsx                # Main coordinator & modal management
    ├── main.jsx               # React DOM root entry
    ├── index.css              # Tailwind CSS v4 styling & electric glows
    ├── components/
    │   ├── Navbar.jsx         # Sticky header with hotline and quote actions
    │   ├── Hero.jsx           # Industrial headline, live workshop badge, hero photo
    │   ├── Services.jsx       # 4 core specialties with real photography
    │   ├── Estimator.jsx      # Interactive Load & Panel Estimator
    │   ├── Gallery.jsx        # Workshop & Engineering Gallery with Lightbox
    │   ├── WhyChooseUs.jsx    # Quality assurances & target manufacturing sectors
    │   ├── Workflow.jsx       # 4-step engineering protocol
    │   ├── ContactSection.jsx # Contact info, location photo, form & WhatsApp action
    │   ├── QuoteModal.jsx     # Light-dismiss quote modal
    │   └── Footer.jsx         # 2026 copyright, address & quick links
    ├── data/
    │   └── servicesData.js    # Business profile details & gallery data
    └── utils/
        └── electricalCalc.js  # Motor FLA, cable gauge & breaker algorithms
```

---

## 🚦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized static bundle in `dist/`, ready to deploy directly to Netlify, Vercel, or any static hosting service.

---

## 📄 License & Attribution
- Built for **Ambika Electric** (Kadadra, Gujarat – 382305).
- All Rights Reserved © 2026.
