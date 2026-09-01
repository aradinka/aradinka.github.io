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

    // Fully isolated: every path on subdomain maps to /{track} prefix
    // Includes assets, reference, recent — each track has its own copy
    url.hostname = "aradinka.dev";
    url.pathname = prefix + (path === "/" ? "/" : path);
    const newReq = new Request(url, request);
    newReq.headers.set("x-original-host", host);
    return fetch(newReq);
  }
}
