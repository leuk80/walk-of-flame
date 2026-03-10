# 🔥 Walk of Flame – Chili & Heat Blog

> *„Earn your heat."*

Ein komplett eigenentwickelter Chili- & Schärfe-Blog, gebaut mit **Astro**, optimiert für **Cloudflare Pages**.

---

## Tech-Stack

| Bereich | Technologie | Warum |
|---------|-------------|-------|
| Framework | **Astro 5** | Schnellstes statisches Framework, perfekt für Content-Sites |
| Styling | **Tailwind CSS 3** | Utility-first, kein CSS-Overhead |
| Content | **MDX + Content Collections** | Typsichere Rezepte mit strukturierten Daten |
| SEO | **Schema.org Recipe Markup** | Rich Snippets in Google-Suche |
| Hosting | **Cloudflare Pages** | Gratis, global, blitzschnell |
| CDN | **Cloudflare** (inklusive) | Edge-Caching weltweit |
| DNS | **Cloudflare DNS** | Kostenlos, schnellster DNS |

### Kosten: 0€/Monat

Cloudflare Pages Free Tier reicht für einen Blog vollkommen aus:
- Unbegrenzte Bandbreite
- 500 Builds/Monat
- Automatisches HTTPS
- Globales CDN

---

## Projektstruktur

```
walk-of-flame/
├── astro.config.mjs          # Astro-Konfiguration
├── tailwind.config.mjs        # Design-Tokens (Farben, Fonts, Animations)
├── package.json
├── public/
│   ├── favicon.svg            # Flammen-Icon
│   ├── robots.txt
│   ├── _headers               # Cloudflare Security Headers
│   └── _redirects              # Cloudflare Redirects
└── src/
    ├── content.config.ts       # Rezept-Schema (typsicher)
    ├── data/
    │   └── config.ts           # Flame-Levels, Site-Config, Kategorien
    ├── styles/
    │   └── global.css          # Tailwind + Custom Components
    ├── components/
    │   ├── Logo.astro          # Animiertes Gradient-Logo
    │   ├── Navigation.astro    # Sticky Nav + Mobile Menu
    │   ├── Footer.astro        # Footer mit Social Links
    │   ├── FlameBadge.astro    # Flame-Level-Badge (1-5)
    │   ├── RecipeCard.astro    # Rezept-Vorschaukarte
    │   └── RecipeSchema.astro  # JSON-LD Schema.org Markup
    ├── layouts/
    │   └── Base.astro          # HTML-Shell mit SEO, OG, Fonts
    ├── pages/
    │   ├── index.astro         # Homepage mit Hero, Latest, CTA
    │   ├── flame-levels.astro  # Das Flame-System erklärt
    │   ├── ueber.astro         # Über-Seite
    │   └── rezepte/
    │       ├── index.astro     # Rezeptliste mit Flame-Filter
    │       └── [slug].astro    # Einzelnes Rezept (dynamisch)
    └── content/
        └── recipes/
            ├── jalapeno-cheddar-cornbread.mdx
            ├── piment-espelette-aioli-ofenkartoffeln.mdx
            ├── cayenne-honig-haehnchen.mdx
            ├── serrano-limetten-guacamole.mdx
            ├── thai-basilikum-huehnchen.mdx
            ├── piri-piri-garnelen.mdx
            ├── habanero-mango-salsa.mdx
            ├── scotch-bonnet-jerk-chicken.mdx
            ├── carolina-reaper-chili-con-carne.mdx
            └── inferno-wings-trinidad-scorpion.mdx
```

---

## Deployment auf Cloudflare Pages

### Voraussetzung

- Ein [Cloudflare-Konto](https://dash.cloudflare.com/sign-up) (kostenlos)
- Git + GitHub/GitLab-Repository

### Schritt 1: Repository erstellen

```bash
cd walk-of-flame
git init
git add .
git commit -m "🔥 Initial commit – Walk of Flame"
git remote add origin https://github.com/DEIN-USER/walk-of-flame.git
git push -u origin main
```

### Schritt 2: Cloudflare Pages verbinden

1. Gehe zu [Cloudflare Dashboard → Pages](https://dash.cloudflare.com/?to=/:account/pages)
2. Klicke **„Create a project"** → **„Connect to Git"**
3. Wähle dein Repository aus
4. Konfiguriere den Build:

| Einstellung | Wert |
|-------------|------|
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `18` (oder höher) |

5. Klicke **„Save and Deploy"**

### Schritt 3: Custom Domain (optional)

1. In Cloudflare Pages → dein Projekt → **Custom domains**
2. Domain hinzufügen: `walkofflame.com`
3. Wenn die Domain schon bei Cloudflare DNS liegt → automatisch
4. Sonst: DNS-Einträge wie angezeigt setzen

**Fertig!** Jeder Push auf `main` löst automatisch einen neuen Build aus.

---

## Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Dev-Server starten (http://localhost:4321)
npm run dev

# Production Build
npm run build

# Build lokal testen
npm run preview
```

---

## Neues Rezept hinzufügen

1. Erstelle eine `.mdx`-Datei in `src/content/recipes/`:

```mdx
---
title: "Dein Rezept-Name"
description: "Kurze Beschreibung"
flameLevel: 3
publishDate: 2025-04-15
prepTime: "15 Min"
cookTime: "30 Min"
totalTime: "45 Min"
servings: 4
scoville: "~50.000 SHU"
category: "Hauptgerichte"
cuisine: "Thai"
seoKeywords:
  - keyword-1
  - keyword-2
tags:
  - tag1
  - flame-3
ingredients:
  - group: "Zutatengruppe"
    items:
      - "200g Zutat 1"
      - "3 EL Zutat 2"
steps:
  - title: "Schritt-Titel"
    text: "Beschreibung des Schritts."
    tip: "Optionaler Tipp"
relatedRecipes:
  - slug-eines-anderen-rezepts
affiliateProducts: []
---

Optionaler Markdown-Body mit Extra-Infos.
```

2. `npm run dev` → Rezept erscheint automatisch
3. Commit & Push → Cloudflare baut automatisch

---

## Rezept-System Features

### Typsichere Content Collections
Jedes Rezept wird gegen ein Zod-Schema validiert. Fehlt ein Pflichtfeld, gibt Astro einen Build-Fehler. Keine kaputten Rezepte auf der Website.

### Schema.org Recipe Markup
Jedes Rezept generiert automatisch JSON-LD für Google Rich Snippets:
- Rezeptname, Beschreibung, Bild
- Zubereitungszeit (ISO 8601)
- Zutaten & Schritte
- Portionen & Nährwerte
- Keywords für SEO

### Flame-Level-System
5 Stufen, basierend auf Scoville:
- 🟢 Flame 1: 0–2.500 SHU (Mild)
- 🟡 Flame 2: 2.500–30.000 SHU (Spürbar)
- 🟠 Flame 3: 30.000–100.000 SHU (Schweißperlen)
- 🔴 Flame 4: 100.000–600.000 SHU (Schmerzgrenze)
- ⚫ Flame 5: 600.000+ SHU (Nur für Mutige)

### Client-Side Filtering
Die Rezeptübersicht filtert per JavaScript clientseitig nach Flame-Level – kein Server nötig, keine Ladezeiten.

### Affiliate-Integration
Jedes Rezept kann `affiliateProducts` mit Name, URL und Beschreibung enthalten. Diese werden als unaufdringliche Empfehlungen in der Zutaten-Sidebar angezeigt.

---

## Performance

Cloudflare Pages + Astro liefert:
- **0 KB JavaScript** (ohne interaktive Inseln) im Client
- **< 1s** First Contentful Paint
- **100/100** Lighthouse Score (erreichbar)
- **Edge-Caching** weltweit auf Cloudflares 300+ PoPs
- **Automatisches HTTPS** mit kostenlosen SSL-Zertifikaten

---

## Erweiterungen (Roadmap)

- [ ] **Cloudflare R2** für Rezeptbilder (kostenloser Object Storage)
- [ ] **Cloudflare Workers** für Newsletter-Signup (serverless Formular-Handler)
- [ ] **Cloudflare KV** für Flame-Challenge Leaderboard
- [ ] **Cloudflare Analytics** (datenschutzfreundlich, kein Cookie-Banner nötig)
- [ ] **@astrojs/cloudflare** Adapter für SSR (dynamische Suche, Kommentare)
- [ ] **Pagefind** für clientseitige Volltextsuche (0 Server-Kosten)
- [ ] **RSS-Feed** für Rezept-Updates
- [ ] **i18n** für englische Version

---

## Lizenz

Privates Projekt. Alle Rechte vorbehalten.

---

*🔥 Earn your heat.*
