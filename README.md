# Digitales Adventsfenster

Ein interaktives digitales Adventsfenster mit 24 Tagen, basierend auf dem Figma-Mockup-Design.

## Features

- **24-Tage Adventskalender** mit grossem zentralen Design
- **Admin-Panel** (PIN: 1234) für Tagesauswahl
- **Interaktive Quizfragen** mit Erklärungen
- **QR-Code Generierung** für Schüler-Identifikation
- **Schnee-Animation** und festliche Lichter
- **24. Dezember Spezial** mit animierten Weihnachtslichtern
- **Responsive Design** für alle Bildschirmgrössen

## Installation

```bash
npm install
npm run dev
```

## Design

Das Design folgt dem Figma-Mockup mit:
- Grossem, zentralem Adventsfenster
- Tannenbäumen als Dekoration
- Schnee-Animation
- Festlichen Farben pro Tag
- Klarem, minimalistischem Look

## Technologien

- React 19
- TypeScript
- Vite
- Framer Motion
- qrcode.react

## Konfiguration

- Admin-PIN: `src/components/AdminPanel.tsx` (Standard: 1234)
- Tagesinhalte: `src/data/adventDays.ts`

## Deployment

```bash
npm run build
```

Die Dateien im `dist/` Ordner auf einen Webserver deployen.
