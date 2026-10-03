# Kush Patel - 3D Interactive Portfolio

Personal engineering portfolio website for Kush Patel (M.Tech ICT Machine Learning at Dhirubhai Ambani University, CPI: 9.75). Built with React, Vite, Tailwind CSS, and Three.js WebGL canvas animations.

---

## Features

- **Interactive 3D Neural Polyhedron**: Real-time Three.js WebGL canvas in the Hero section with mouse-tracking quaternion tilt and orbital data nodes.
- **3D Particle Starfield**: Interactive canvas background with dynamic proximity connection lines.
- **Interactive 3D Tech Arsenal**: 3D perspective mouse-tilt cards with dynamic specular glare for core tools and frameworks.
- **3D Spatial Globe**: Interactive wireframe globe showcasing global competition nodes (ICPR 2026, Amazon ML School, Kaggle, DA-IICT).
- **Recruiter Terminal Workstation**: Built-in developer console supporting commands: `metrics`, `projects`, `skills`, `experience`, `cv`, `contact`, and `clear`.
- **Case Study Deep-Dive Modals**: Architectural breakdown for each project covering Problem Statement, System Pipeline, Engineering Optimizations, and Quantifiable Benchmarks.
- **Production Server**: Node HTTP server (`server.js`) configured for Render Web Service, Render Static Site, Vercel, and Netlify deployments.

---

## Core Tech Stack

- **Front-End**: React 18, Vite, Tailwind CSS, Lucide React
- **3D & Graphics**: Three.js (WebGL Canvas)
- **Deployment**: Render, Vercel, Netlify

---

## Quick Start (Local Development)

1. Clone or open this repository:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm start
   ```
   Open `http://localhost:3000` in your browser.

---

## Deployment Instructions

Detailed multi-platform deployment instructions are available in `DEPLOYMENT.md`.

### Deploying to Render

#### Option A: Render Static Site (Fastest)
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

#### Option B: Render Web Service
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- Automatically binds to `0.0.0.0:$PORT` via `server.js`.
