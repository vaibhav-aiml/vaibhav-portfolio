# 🏛️ Vaibhav Badaya Portfolio — Modern Jaipur Cyber-Regal Digital Interface

A production-grade, responsive animated portfolio for **Vaibhav Badaya** (Full-Stack & AI Engineer, Jaipur, India), translating the architectural majesty of Jaipur's sacred geometry into a futuristic digital interface.

> **Live Demo:** [https://vaibhavbadaya.dev](https://vaibhavbadaya.dev)  
> **Contact:** [vaibhavbadaya53@gmail.com](mailto:vaibhavbadaya53@gmail.com) • +91 9929984043  
> **GitHub:** [@vaibhav-aiml](https://github.com/vaibhav-aiml) • **LinkedIn:** [/in/vaibhav-badaya](https://linkedin.com/in/vaibhav-badaya)

---

## 🎨 Design Archetype: Modern Jaipur & Cyber-Regal Glassmorphism

Built directly from `DESIGN.md`:
* **Colors:**
  * **Midnight Indigo Canvas:** `#0B0B1A` / `#121221`
  * **Royal Maroon Elevation:** `#5C1A2B`
  * **Kesari Saffron Primary:** `#FF9933` / `#FFC08D`
  * **Peacock Mor-Pankh Teal:** `#0FA3B1` / `#68DEED`
  * **Turmeric Gold Highlights:** `#F2B705`
* **Typography:** `Bodoni Moda` (Display & Headlines) + `Manrope` (Body) + `JetBrains Mono` (Telemetry & Code) + `Noto Sans Devanagari` (Heritage Watermarks)
* **Sacred Geometry:** Vidyadhar Bhattacharya's 1727 Jaipur city mandala grid, cusped arch frames (*Hawa Mahal* keylines), and semi-transparent *jaali* screen textures
* **Themes:** Cyber-Regal Dark Mode (default) + Warm Ivory & Saffron Light Mode via `next-themes`

---

## ⚡ Technical Architecture & Stack

* **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
* **Styling:** Tailwind CSS v3.4 + Custom Design System tokens + Vanilla CSS Glassmorphism
* **3D & Shaders:**
  * Custom WebGL `<MandalaShader />` (neural mandala + rising diya ember particles, DPR capped at 1.5, pauses off-screen & on hidden tab)
  * React Three Fiber (R3F) `<HeroScene />` (interactive wireframe sacred geometry with mouse parallax, enabled on capable desktop hardware)
* **Smooth Scrolling:** Lenis smooth scroll
* **Animations:** Framer Motion (staggered entries, tab filter layout animations, mobile drawer springs)
* **Icons:** `lucide-react` + Custom SVG brand glyphs
* **SEO & Metadata:** Open Graph, Twitter Cards, dynamic `app/sitemap.ts`, and JSON-LD `Person` schema markup

---

## 📁 Repository Structure

```
vaibhav-portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg                # Portrait in cusped arch frame
│   │   ├── project-medivoice.png      # MediVoice AI preview
│   │   ├── project-fitsphere.png      # FitSphere preview
│   │   ├── project-truffle.png        # Truffle preview
│   │   ├── project-aml-gnn.png        # AML-GNN-UPI preview
│   │   ├── project-linkedin-gen.png   # LinkedIn Post Generator preview
│   │   └── project-codeviz.png        # CodeViz AI preview
│   ├── Vaibhav_Badaya_Resume.pdf      # Resume download
│   └── favicon.svg                    # Saffron mandala favicon
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout (fonts, theme provider, Lenis, cursor, preloader)
│   │   ├── page.tsx                   # Main single-page portfolio
│   │   ├── globals.css                # Design tokens, glass tiers, jaali patterns, cusped arches
│   │   ├── sitemap.ts                 # Dynamic XML sitemap
│   │   ├── not-found.tsx              # 404 error pavilion
│   │   ├── projects/[slug]/page.tsx   # Detailed project case-study dynamic route
│   │   └── api/contact/route.ts       # Contact form API handler with honeypot & Web3Forms
│   │
│   ├── components/
│   │   ├── sections/                  # Preloader, Hero, About, Experience, Projects, Skills,
│   │   │                              # Achievements, Services, Contact, Footer
│   │   ├── ui/                        # GlassCard, SectionHeading, TechTag, StatusChip, Icons
│   │   ├── layout/                    # Navbar, MobileDrawer, BottomNav, CustomCursor, SmoothScroll
│   │   └── three/                     # MandalaShader (WebGL), HeroScene (R3F)
│   │
│   ├── data/                          # Typed data sources (personal, experience, projects, skills, etc.)
│   ├── hooks/                         # useDeviceCapability, useReducedMotion, useScrollProgress
│   └── lib/                           # fonts, cn utility
│
├── tailwind.config.ts                 # 50+ Modern Jaipur color tokens (dark + light)
└── next.config.ts
```

---

## 🛠️ Quick Start & Local Setup

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/vaibhav-aiml/vaibhav-portfolio.git
cd vaibhav-portfolio
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root:
```env
# Optional: Set Web3Forms access key for direct email forwarding
WEB3FORMS_ACCESS_KEY=your_access_key_here
```
*(If no key is configured, submissions in development are safely logged to your terminal.)*

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 📝 How to Update Portfolio Content

All copy and data are strictly separated into typed data files in `src/data/`:
* **Profile / Bio:** [`src/data/personal.ts`](file:///c:/Users/CHANDRA%20SHEKHAR/OneDrive/Desktop/Vaibhav%20Portfolio/vaibhav-portfolio/src/data/personal.ts)
* **Work Experience:** [`src/data/experience.ts`](file:///c:/Users/CHANDRA%20SHEKHAR/OneDrive/Desktop/Vaibhav%20Portfolio/vaibhav-portfolio/src/data/experience.ts)
* **Projects & Metrics:** [`src/data/projects.ts`](file:///c:/Users/CHANDRA%20SHEKHAR/OneDrive/Desktop/Vaibhav%20Portfolio/vaibhav-portfolio/src/data/projects.ts)
* **Technical Skills:** [`src/data/skills.ts`](file:///c:/Users/CHANDRA%20SHEKHAR/OneDrive/Desktop/Vaibhav%20Portfolio/vaibhav-portfolio/src/data/skills.ts)
* **Achievements & Hackathons:** [`src/data/achievements.ts`](file:///c:/Users/CHANDRA%20SHEKHAR/OneDrive/Desktop/Vaibhav%20Portfolio/vaibhav-portfolio/src/data/achievements.ts)
* **Freelance Services:** [`src/data/services.ts`](file:///c:/Users/CHANDRA%20SHEKHAR/OneDrive/Desktop/Vaibhav%20Portfolio/vaibhav-portfolio/src/data/services.ts)
* **Navigation Links:** [`src/data/navigation.ts`](file:///c:/Users/CHANDRA%20SHEKHAR/OneDrive/Desktop/Vaibhav%20Portfolio/vaibhav-portfolio/src/data/navigation.ts)

---

## 📱 Responsive & Viewport Audit Matrix

| Viewport | Resolution | Device Category | Nav Layout | WebGL / 3D | Status |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **xs** | 320 × 568 | iPhone SE (Compact) | Hamburger + Bottom Nav | Shader (DPR 1.5) | ✅ **PASS** |
| **sm** | 375 × 667 | iPhone 8 / SE2 | Hamburger + Bottom Nav | Shader (DPR 1.5) | ✅ **PASS** |
| **sm** | 390 × 844 | iPhone 14 Pro / 15 | Hamburger + Bottom Nav | Shader (DPR 1.5) | ✅ **PASS** |
| **sm** | 430 × 932 | iPhone 14/15 Pro Max | Hamburger + Bottom Nav | Shader (DPR 1.5) | ✅ **PASS** |
| **md** | 768 × 1024 | iPad Mini / Portrait Tablet | Floating Glass Navbar | Shader (DPR 1.5) | ✅ **PASS** |
| **lg** | 1024 × 768 | iPad Pro Landscape | Floating Glass Navbar | Shader + R3F Scene | ✅ **PASS** |
| **xl** | 1280 × 720 | Standard Laptop HD | Floating Glass Navbar | Shader + R3F Scene | ✅ **PASS** |
| **xl** | 1440 × 900 | MacBook Pro / Retina | Floating Glass Navbar | Shader + R3F Scene | ✅ **PASS** |
| **2xl** | 1920 × 1080 | Full HD Desktop | Max-w-1440 Capped | Shader + R3F Scene | ✅ **PASS** |
| **2xl** | 2560 × 1440 | 2K Ultrawide / Studio Display | Max-w-1440 Capped | Shader + R3F Scene | ✅ **PASS** |
| **Landscape** | 844 × 390 | Mobile Landscape | Touch optimized | Shader (Paused off-screen) | ✅ **PASS** |

---

## 🚀 Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete cyber-regal portfolio for Vaibhav Badaya"
   git push origin main
   ```
2. Navigate to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository (`vaibhav-portfolio`).
4. In **Environment Variables**, add:
   * `WEB3FORMS_ACCESS_KEY` = *(your Web3Forms key)*
5. Click **Deploy**. Vercel will build and assign your production domain.

---

## 📜 License & Credits

Built with ❤️ in Jaipur, Rajasthan by **Vaibhav Badaya**.  
Designed following the sacred geometry and architectural heritage of Vidyadhar Bhattacharya's Jaipur.
