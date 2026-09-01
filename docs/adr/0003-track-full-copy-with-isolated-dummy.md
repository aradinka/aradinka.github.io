# Tracks are full copies of the hub with per-track dummy post

Each track home at `/ai/index.html`, `/data/index.html`, `/eng/index.html` is a full copy of the hub for MVP, differing only in `<title>`, meta description, and subtitle (AI Engineer, Data Analyst, Data Engineer). The Recent list in each track mirrors the hub's 4 shared articles in `/recent/` plus one isolated `/{track}/recent/dummy-post.html` titled Dummy Post.

We chose full copy over filtered variants because it is fast to implement and keeps one source of truth for layout, while the dummy proves per-track isolation works via the Worker (host-root `/recent/dummy-post.html` maps to `/{track}/recent/dummy-post.html`, shared `/recent/*.html` stays shared). This defers curation of filtered skills/projects to a later iteration.
