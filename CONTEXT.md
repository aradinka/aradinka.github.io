# Portfolio Site

Single-repo portfolio at `aradinka.dev` that serves role-targeted views through subdomains on one deploy.

## Language

**Hub**:
The portfolio at `aradinka.dev` with current content. It stands alone and does not link to tracks.

_Avoid_: main site, root site, landing

**Track**:
A role-targeted copy of the hub at a subdomain. For MVP it is a full copy with a distinct title and one isolated dummy post. It does not link back to the hub.

_Avoid_: specialization page, landing, vertical

**Subdomain**:
The host that selects a track: `ai.aradinka.dev`, `data.aradinka.dev`, `eng.aradinka.dev`.

_Avoid_: site, domain

**Track Home**:
The home page for a track. Served at the subdomain root via Worker and at `/ai/`, `/data/`, `/eng/` on GitHub Pages. Each has its own `<title>` and subtitle but otherwise mirrors the hub for MVP.

_Avoid_: landing, index, hub

**Recent Article**:
A detail page for a project or note. Hub has its own `/recent/`. Each track has a fully isolated copy at `/{track}/recent/` including its own `dummy-post.html` and copies of hub articles. Host-root `/recent/dummy-post.html` on a subdomain is that track's isolated file.

_Avoid_: blog post, post, article detail

**Asset**:
Static file under `/{track}/assets/` or `/{track}/reference/media/` and under `/assets/` or `/reference/media/` for the hub. Each host has its own copy, no sharing.

_Avoid_: resource, static
