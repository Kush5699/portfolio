# Portfolio Deployment and Render Fix Guide

This document explains why the previous deployment on Render was failing and how to deploy this new 3D portfolio live across Render, Vercel, Netlify, and GitHub Pages.

---

## 1. Why kush-portfolio-2609.onrender.com was Not Working

Render provides two types of deployment services:

### Cause 1: Missing "start" Script for Render Web Service
When a repository is deployed on Render as a "Web Service", Render runs `npm start` by default. If `package.json` does not have a `start` script, Render fails with an exit status error or times out during port scanning.

### Cause 2: Binding to localhost instead of 0.0.0.0
Even if a dev server or preview command was running, Vite binds to `localhost` by default. Render requires web applications to listen on `0.0.0.0` and bind to the dynamic environment port variable `process.env.PORT`.

### The Fix Implemented
1. Created `server.js`, a production Node HTTP server that automatically serves the compiled `dist` directory, handles SPA routing fallbacks, provides a `/health` health-check endpoint, and listens on `0.0.0.0:${process.env.PORT || 3000}`.
2. Updated `package.json` with `"start": "node server.js"`.
3. Pre-configured `dist` output so it works equally well as a Render Static Site, Render Web Service, Vercel app, or Netlify app.

---

## 2. Deploying to Render (Recommended Steps)

### Method A: Deploy as a Static Site on Render (Fastest & Free)
1. Go to the Render Dashboard (dashboard.render.com).
2. Click **New +** and select **Static Site**.
3. Connect your GitHub repository (`Kush5699/...`).
4. Configure the build parameters:
   - **Name:** `kush-portfolio`
   - **Branch:** `main`
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
5. Click **Create Static Site**. It will deploy in under 60 seconds with zero spin-down lag!

### Method B: Deploy as a Web Service on Render
If you previously created it as a Web Service:
1. In your Render Service settings:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
2. Save changes and trigger a manual deploy.
3. `server.js` will immediately bind to the assigned port and pass all health checks.

---

## 3. Deploying to Vercel (Alternative 1-Click)

Vercel automatically detects Vite and React projects.

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New** > **Project**.
3. Import your portfolio repository.
4. Keep the default settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

---

## 4. Deploying to Netlify

The repository includes `netlify.toml` pre-configured with redirect rules for single-page applications.

1. Go to [netlify.com](https://netlify.com) and log in.
2. Click **Add new site** > **Import an existing project**.
3. Select your GitHub repository.
4. Build settings will auto-populate from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy Site**.

---

## 5. Local Testing Before Deployment

You can test both the development mode and the production server locally:

### Option A: Development Server (Hot Reload)
```powershell
npm run dev
```
Open `http://localhost:5173` in your browser.

### Option B: Production Server (Simulates Render Production Environment)
```powershell
npm run build
npm start
```
Open `http://localhost:3000` in your browser.
