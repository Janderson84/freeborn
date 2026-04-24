# Freeborn Energy Independence — Sales Funnel

Full 5-step funnel prototype (VSL → Checkout → OTO1 → OTO2 → Thanks) in two
art directions — **A · The Warning** (patriotic VSL) and **B · The Letter**
(personal sales letter). Toggle A/B from the top bar; walk the flow by
clicking CTAs or jumping via the step pills.

## Files

- `index.html` — main funnel entry point (loads A and B via Babel/JSX)
- `versions/a_vsl.jsx` — Version A VSL
- `versions/a_rest.jsx` — Version A Checkout, OTO1, OTO2, Thanks
- `versions/b_all.jsx` — Version B (all 5 steps)
- `shared/` — shared hooks / helpers
- `vsl-storyboard.html` — 14-scene shoot-ready VSL storyboard (on-screen)
- `vsl-storyboard-print.html` — print-optimized version (File → Print → Save as PDF)

## Running locally

No build step required. Open `index.html` in any modern browser, or serve
the folder with any static file server:

```
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Tweaks panel

Click the Tweaks toggle in the prototype toolbar to change price, timer,
testimonial count, value stack visibility, and the active version.

## Notes before launch

- Placeholder photography (founder, testimonials, product shots) needs to
  be swapped for real brand assets.
- Checkout form is not wired to a payment processor — connect to Stripe /
  SamCart / ClickBank before going live.
- Each step currently lives on the same URL via client-side state. For a
  production funnel, split into per-URL pages so ads/email/analytics can
  track each step separately.
