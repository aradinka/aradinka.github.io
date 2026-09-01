export default {
  async fetch(request) {
    const url = new URL(request.url);
    const host = url.hostname;
    let prefix = "";
    if (host === "ai.aradinka.dev") prefix = "/ai";
    else if (host === "data.aradinka.dev") prefix = "/data";
    else if (host === "eng.aradinka.dev") prefix = "/eng";
    else return fetch(request);

    const path = url.pathname;

    // Shared assets stay at origin root
    if (path.startsWith("/assets/") || path.startsWith("/reference/")) {
      url.hostname = "aradinka.dev";
      return fetch(new Request(url, request));
    }

    // Recent articles: shared vs per-track dummy
    if (path.startsWith("/recent/")) {
      url.hostname = "aradinka.dev";
      // dummy-post is per-track isolated, needs prefix
      if (path === "/recent/dummy-post.html") {
        url.pathname = prefix + path;
      }
      // all other /recent/* are shared, no prefix
      return fetch(new Request(url, request));
    }

    // Track home and any other track path: add prefix
    // "/" on subdomain -> "/ai/", "/data/", "/eng/"
    url.hostname = "aradinka.dev";
    url.pathname = prefix + (path === "/" ? "/" : path);
    const newReq = new Request(url, request);
    newReq.headers.set("x-original-host", host);
    return fetch(newReq);
  }
}
