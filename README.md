# ⚡ Ambika Electric - Industrial Electrical Engineering Platform (MERN Stack)

A modern, full-stack **MERN** (MongoDB, Express, React, Node.js) application built for **Ambika Electric** — an industrial electrical engineering enterprise based in Sardar Industrial Estate, Kadadra, Gujarat.

> **Note:** Per project requirements, this phase focuses on the complete MERN foundation and an attractive, modern, interactive, and user-friendly landing page with an interactive Industrial Load & Panel Estimator and service enquiry flow. User authentication (login/registration) has been intentionally omitted for now and can be plugged in when required.

---

## 🏢 Business Overview

- **Business Name**: Ambika Electric
- **Category**: Industrial Electrical Engineering
- **Proprietor**: Vishad Patel
- **Official Website Reference**: [ambikaelectric.netlify.app](https://ambikaelectric.netlify.app/)
- **Contact Numbers**: `+91 99985 77955` / `+91 94084 99942`
- **Address**: Shop No. 22, Sardar Industrial Estate, Near Narnarayan Kanta, Kadadra, Gujarat – 382305, India

---

## 🚀 Key Features

### 1. Modern Industrial UI & UX
- Industrial aesthetic tailored for plant managers, machinery operators, and engineering contractors.
- High-contrast electric amber and cyan glowing accents with glassmorphic cards.
- Fully responsive layout optimized for mobile, tablet, and desktop viewports.

### 2. Interactive Industrial Load & Panel Estimator
- Input machinery parameters: **Motor Power (HP)**, **System Voltage (415V 3-Phase / 230V 1-Phase)**, and **Power Factor (cos φ)**.
- Preset buttons for common motor ratings (`3 HP`, `5 HP`, `7.5 HP`, `10 HP`, `15 HP`, `20 HP`, `30 HP`, `50 HP`).
- Real-time calculations:
  - **Full-Load Current (FLA)** (e.g. `13.1 A` for 10 HP at 415V / 0.85 PF)
  - **Suggested Copper Cable Size** (e.g. `2.5 sq mm`)
  - **Recommended MCB/MCCB Rating** (e.g. `20 A`)
  - **Recommended Starter Configuration** (DOL, Automatic Star-Delta, or Soft Starter / VFD)
- Features **"Request Custom Panel Quote for this Spec"** (auto-prefills specifications into quotation desk) and **"Copy Specification Summary"** to clipboard.

### 3. Core Specialties & Services Showcase
- **Heavy Motor Winding & Maintenance**: AC/DC motors, slip-ring, induction machinery, and transformer overhaul.
- **Custom Control Panel Design**: MCC, PCC, APFC capacitor banks, starter panels, and factory automation boards.
- **Industrial Electrical Consulting**: Safety audits, load profiling, and preventive maintenance strategies.
- **Industrial Automation**: VFD speed tuning, sensor interlocks, and PLC integration.

### 4. Resilient Express & MongoDB Backend
- Express REST API with CORS and JSON support.
- MongoDB connection with automatic in-memory fallback during local development if a MongoDB daemon is not currently active.
- Endpoints for enquiry submission, enquiry retrieval, and server-side estimator verification.

---

## 🛠️ Project Structure

```
Ambika-Electric/
├── package.json               # Root scripts (manages both client & server)
├── .gitignore
├── README.md
├── server/                    # Express + Node.js + MongoDB Backend
│   ├── package.json
│   ├── index.js               # Server entry point (Port 5000)
│   ├── .env                   # Environment config
│   ├── .env.example
│   ├── config/
│   │   └── db.js              # MongoDB Mongoose connection handler
│   ├── models/
│   │   └── Enquiry.js         # Mongoose schema for inquiries & estimator leads
│   ├── controllers/
│   │   └── enquiryController.js
│   └── routes/
│       ├── enquiryRoutes.js   # POST /api/enquiries, GET /api/enquiries
│       └── estimatorRoutes.js # POST /api/estimator/calculate
└── client/                    # React 19 + Vite + Tailwind CSS Frontend
    ├── package.json
    ├── vite.config.js         # Configured with proxy to port 5000
    ├── index.html             # Industrial branding & SEO meta
    └── src/
        ├── App.jsx            # Main app assembly & modal state
        ├── main.jsx
        ├── index.css          # Tailwind CSS v4 & custom animations
        ├── components/
        │   ├── Navbar.jsx         # Sticky navbar with direct call & quote trigger
        │   ├── Hero.jsx           # Industrial hero section with capability card
        │   ├── Services.jsx       # 4 core engineering specialties
        │   ├── Estimator.jsx      # Interactive Load & Panel Estimator
        │   ├── WhyChooseUs.jsx    # Quality assurances & target sectors
        │   ├── Workflow.jsx       # 4-step engineering protocol
        │   ├── ContactSection.jsx # Contact info & interactive form (API connected)
        │   ├── QuoteModal.jsx     # Light-dismiss popup for custom panel quotes
        │   └── Footer.jsx         # 2026 copyright, address & quick links
        ├── data/
        │   └── servicesData.js    # Data constants based on company profile
        └── utils/
            └── electricalCalc.js  # Motor FLA, cable, and breaker calculation algorithms
```

---

## 🚦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended, tested on v22)
- [MongoDB](https://www.mongodb.com/) (Optional: if not running, backend uses graceful in-memory storage)

### Installation

Install all dependencies for root, server, and client:
```bash
npm run install-all
```

Alternatively, install individually:
```bash
npm install
npm install --prefix server
npm install --prefix client
```

---

## 💻 Running the Application

### 1. Run Full Stack Concurrently (Recommended)
From the root directory:
```bash
npm run dev
```
This runs both:
- **Backend Server**: `http://localhost:5000`
- **Frontend Client**: `http://localhost:5173`

### 2. Run Individually
**To run server only:**
```bash
npm run dev:server
# or: cd server && npm run dev
```

**To run client only:**
```bash
npm run dev:client
# or: cd client && npm run dev
```

### 3. Production Build
```bash
npm run build:client
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health status & server timestamp |
| `POST` | `/api/enquiries` | Submit client technical enquiry / quote request |
| `GET` | `/api/enquiries` | Retrieve enquiries list |
| `POST` | `/api/estimator/calculate` | Server-side electrical load verification |

---

## 📄 License & Attribution
- Built for **Ambika Electric** (Kadadra, Gujarat – 382305).
- All Rights Reserved © 2026.
