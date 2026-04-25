# Fonts

This directory expects two Charter `.woff2` files referenced by the site's `@font-face` rules:

- `charter_regular.woff2` — Charter Regular (declared at `font-weight: 400`)
- `charter_bold.woff2` — Charter Bold (declared at `font-weight: 500` per Kami's weight cap)

Charter is freely redistributable under Bitstream's permissive license. Source: https://practicaltypography.com/charter.html — download the `.zip`, extract the `.woff2` variants, and drop them here.

Until those files are present, the site renders in the next entry of the font stack (Georgia), which is itself a high-quality serif and a deliberate Kami-spec fallback. No layout breaks.
