# Deployment Guide

## Quick Start

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

Output is in the `dist/` folder.

## Deployment Options

### Option 1: Static Hosting
Upload `dist/` contents to any web server or CDN.

### Option 2: GitHub Pages
```bash
npm run build
# Upload dist/ to gh-pages branch
```

### Option 3: Vercel/Netlify
Connect repository and deploy automatically.

## Configuration

### Admin Panel
- Default PIN: `1234`
- Change in: `src/components/AdminPanel.tsx`

### Day Content
- Edit: `src/data/adventDays.ts`
- Each day has: title, quote, emoji, quiz, fact, colors

## Features

- 24 interactive advent days
- Quiz questions with explanations
- QR codes for identification
- Snow animation
- Christmas special (Day 24)
- Responsive design
