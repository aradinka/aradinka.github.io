# Single repo with Cloudflare Worker to preserve subdomain URL

We keep one repo `aradinka/aradinka.github.io` building to `aradinka.dev` from `main` and handle `ai.aradinka.dev`, `data.aradinka.dev`, `eng.aradinka.dev` at the CDN layer. GitHub Pages still has one `CNAME` (`aradinka.dev`). Cloudflare DNS points each subdomain to `aradinka.github.io` proxied, and a Worker rewrites `ai.aradinka.dev/*` to `aradinka.dev/ai/*` (same for `/data`, `/eng`) so the browser bar stays on the subdomain instead of 302-redirecting to the path.

We chose this over a 302 redirect (`ai.aradinka.dev -> aradinka.dev/ai/`) because the brief requires the URL to stay on the subdomain for CV links, and over one-repo-per-subdomain because that triples maintenance. The Worker is the only extra runtime outside git.
