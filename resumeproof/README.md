# ResumeProof — AI-Proof Resume Rewrite Sprint Funnel

Tripwire funnel with free tool entry point. 8 standalone HTML pages using Tailwind CSS via CDN.

## File List

| File | Page | Notes |
|------|------|-------|
| `index.html` | Landing Page | Hero, score preview, why-now, how-it-works, FAQ accordion (CSS-only), founder block, final CTA |
| `scan.html` | Resume Upload | Drag-drop upload zone, role radio group, disabled submit until fields complete |
| `email-gate.html` | Email Gate | Email + optional name, CSS-animated loading sequence (4 sequential checkmarks), auto-redirects to results |
| `results.html` | Score Results | Large Georgia serif score number (demo: 47/100, HIGH risk), score bar breakdown, 3 weakness cards, offer box |
| `checkout.html` | Checkout | Two-column desktop/single-column mobile, order bump checkbox (not pre-checked), live total update, card number formatter |
| `upsell.html` | LinkedIn Upsell ($97) | Pattern interrupt dark header, offer with bullets, yes/no two-button decision |
| `downsell.html` | LinkedIn DIY Pack ($47) | Softer tone variant, same structure |
| `thanks.html` | Thank You | Confirmation hero, numbered visual timeline, while-you-wait section |
| `copy.json` | Copy Source | Full approved copy JSON for all 8 pages |

## Design System

- **Background:** `#FAFAF9`
- **Primary / Navy:** `#1E3A5F`
- **Accent / Danger:** `#C0392B`
- **Text:** `#1A1A1A`
- **Muted:** `#6B7280`
- **Success:** `#16A34A`
- **Warning:** `#D97706`
- **Body font:** Inter (Google Fonts)
- **Score number:** Georgia serif

## Funnel Flow

```
index.html → scan.html → email-gate.html → results.html → checkout.html → upsell.html → downsell.html → thanks.html
```

- "No thanks" on upsell goes to downsell
- "No thanks" on downsell and all yes paths go to thanks

## Converting to Next.js / JSX

- Replace `class=` with `className=`
- Extract repeated components: `<CTAButton>`, `<ScoreBar>`, `<WeaknessCard>`, `<OfferBox>`, `<TrustStrip>`
- The Tailwind config block at top of each page maps to `tailwind.config.js`
- Loading animation in email-gate.html uses pure CSS + minimal JS — convert to a React state machine
- Results page score/risk level is hardcoded as demo — wire to actual scoring API response

## Image Brief

No images required per design direction (no stock photos of people). All visuals use:
- SVG inline icons (already embedded)
- Score visualization bars (pure CSS)
- Color-coded typography

See `image_brief` below if abstract diagrams are desired in a future iteration.

## Notes

- All pages are self-contained with Tailwind CDN — swap to PostCSS build for production
- No external JS dependencies
- Mobile-first, sticky CTA bar on landing page and results page (mobile only)
- FAQ accordion is CSS-only (checkbox hack) — no JavaScript required
