---
name: Night Sky
colors:
  primary: "#FFFFFF"
  background: "#05060F"
  surface: "#0B0D1A"
  border: "rgba(255,255,255,0.10)"
  accent: "#8B9DFF"
  accent-hover: "#A9B6FF"
  on-accent: "#05060F"
  star: "#FFFFFF"
  star-glow: "#BFD0FF"
  focus-ring: "#A9B6FF"
typography:
  sans: "Geist Variable, system-ui, sans-serif"
  mono: "Geist Mono Variable, ui-monospace, monospace"
  display:
    fontFamily: "{typography.sans}"
    fontSize: "clamp(2.75rem, 8vw, 6rem)"
    fontWeight: "600"
    lineHeight: "1.02"
    letterSpacing: "-0.04em"
  h2: { fontFamily: "{typography.sans}", fontSize: "2rem", fontWeight: "600", letterSpacing: "-0.03em" }
  h3: { fontFamily: "{typography.sans}", fontSize: "1.25rem", fontWeight: "600" }
  body: { fontFamily: "{typography.sans}", fontSize: "1rem", lineHeight: "1.6" }
  label: { fontFamily: "{typography.mono}", fontSize: "0.75rem", fontWeight: "500" }
spacing: { xs: "4px", sm: "8px", md: "16px", lg: "32px", xl: "64px", section: "128px" }
rounded: { sm: "6px", md: "12px", full: "9999px" }
---

A quiet night sky with a precise, typographic site in front of it. The sky provides the
atmosphere; the content stays calm and legible.

## Sky (the signature)
- One fixed full-viewport canvas behind the entire site, solid {colors.background} base.
- Star field: three depth layers (tiny/dim, small, a few larger bright ones). Stars twinkle
  slowly and out of sync (opacity only, 2-6s cycles). Density is higher near the top of the
  hero and visually dimmed below it so text stays readable.
- Shooting star: a thin white streak with a short fading tail, diagonal, crossing a portion of
  the sky in ~0.8-1.2s. Spawns at random every 4-9s. Never more than one at a time.
- Falling glow: occasionally (every ~10-20s) a small {colors.star-glow} speck with a soft halo
  drifts slowly downward (4-7s), fading in and out. Max 2 on screen.
- Palette is only white and {colors.star-glow}. No rainbow, no colored nebulae, no moon.
- Reduced motion: render a static star field only. No twinkle, no shooting stars, no falling glow.

## Hero
- 100svh, over the sky. Large centered display headline in white, tight tracking.
- One-line subtitle in white at 70% opacity, max 60ch.
- One translucent pill (blurred backdrop, 1px white/15 border) with my email and a copy button.
  This is the only frosted element on the site.
- Tiny centered caption near the bottom, white at 50% opacity.

## Navigation
- Transparent at top. Mono wordmark left (`/name`), links centered, one pill button right.
- After scrolling it becomes {colors.background} at 80% with a bottom border. Simple menu on mobile.

## Below the hero
- Content sits on the sky with no opaque section backgrounds, so stars stay visible between sections.
  Cards use {colors.surface} at ~85% opacity so text never fights a star.
- Section label in mono above each h2 (`~/projects`), white at 50% opacity.
- Projects: bordered rows or a 2-column grid. Name, one line, mono stack badges, repo/live links.
- Cards: 1px {colors.border}, {rounded.md}. No shadows.
- Section spacing {spacing.section}. Max content width 1100px. Left-aligned text below the hero.

## Colors
- {colors.accent} only for primary actions, hover, active nav, and tiny highlights.
- Hierarchy through white opacity (100 / 70 / 50). No extra gray hex codes.

## Motion
- Sky animation as described above; nothing else loops.
- UI: fade/translate-up 160ms on scroll-in, 120ms hover transitions.
- Respect prefers-reduced-motion everywhere.

## Performance
- Single canvas, single requestAnimationFrame loop, no animation libraries.
- Cap devicePixelRatio at 2. Fewer stars on small screens (about 60 on mobile, 150 on desktop).
- Pause the loop when the tab is hidden. Resize handled with a debounced listener.
- Canvas is aria-hidden and pointer-events: none.

## Do's and Don'ts
- Do: keep text contrast AA over the sky; stars behind text stay dim.
- Do: keep the effect subtle. It should feel like a calm night, not a screensaver.
- Don't: glow on UI elements, buttons, text, or cards. Glow exists only on sky objects.
- Don't: decorative gradients, blobs, emojis, stock illustrations, fake terminals, typing animations.
- Don't: parallax, mouse-following effects, or particle libraries (tsparticles etc.).