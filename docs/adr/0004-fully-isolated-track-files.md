# Fully isolated files per track and hub

Each host has its own file tree: hub at `/`, tracks at `/ai/`, `/data/`, `/eng/`. Assets, reference media, and recent articles are duplicated per host (`/{track}/assets/site.css`, `/{track}/reference/media/*`, `/{track}/recent/*`) instead of sharing from the root. The Worker now prefixes every request on `ai|data|eng.aradinka.dev` to `/{track}` with no passthrough.

We chose full isolation so each Track Home and hub can diverge in look and content without cross-host impact. The cost is 4x duplication for shared posts and media, but it satisfies the requirement for literally separate files per subdomain and keeps future design changes confined to one host.

