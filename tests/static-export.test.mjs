import test from "node:test";
import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = fileURLToPath(new URL("../out/", import.meta.url));
const publicOrigin = "https://wakutsuku-lab.github.io";

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

const files = await walk(outDir);
const htmlFiles = files.filter((file) => file.endsWith("index.html"));
const htmlByRoute = new Map();

for (const file of htmlFiles) {
  const route = relative(outDir, file)
    .replaceAll("\\", "/")
    .replace(/index\.html$/, "");
  htmlByRoute.set(`/${route}`, await readFile(file, "utf8"));
}

function routeForHref(href) {
  const url = new URL(href, publicOrigin);
  if (url.origin !== publicOrigin) return null;
  return url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
}

test("exports the complete public site", () => {
  assert.equal(htmlFiles.length, 23);
  assert.ok(htmlByRoute.has("/"));
  assert.ok(htmlByRoute.has("/about/"));
  assert.ok(htmlByRoute.has("/advertising-policy/"));
  assert.ok(htmlByRoute.has("/privacy/"));
  assert.ok(htmlByRoute.has("/contact/"));
});

test("every internal page link resolves in the export", () => {
  const missing = [];
  for (const [sourceRoute, html] of htmlByRoute) {
    for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      if (href.startsWith("#") || href.startsWith("mailto:")) continue;
      const route = routeForHref(href);
      if (route && !htmlByRoute.has(route)) missing.push(`${sourceRoute} -> ${route}`);
    }
  }
  assert.deepEqual(missing, []);
});

test("all 16 article pages disclose advertising and retain three affiliate options", () => {
  const articlePages = [...htmlByRoute]
    .filter(([route]) => route.startsWith("/articles/") && route !== "/articles/mobile-monitor/");
  assert.equal(articlePages.length, 15);
  const buyingGuide = htmlByRoute.get("/articles/mobile-monitor/");
  assert.ok(buyingGuide);
  for (const [route, html] of [...articlePages, ["/articles/mobile-monitor/", buyingGuide]]) {
    assert.match(html, /アフィリエイトリンクが含まれます/, route);
    assert.ok((html.match(/hb\.afl\.rakuten\.co\.jp/g) ?? []).length >= 3, route);
    assert.ok((html.match(/_RTLink139613/g) ?? []).length >= 3, route);
    assert.match(html, /rel="sponsored nofollow"/, route);
    assert.match(html, /BreadcrumbList/, route);
    assert.match(html, new RegExp(`<link rel="canonical" href="${publicOrigin}${route}"`), route);
  }
});

test("homepage declares the site and publisher identity", () => {
  const home = htmlByRoute.get("/");
  assert.ok(home);
  assert.match(home, /"@type":"WebSite"/);
  assert.match(home, /"@type":"Organization"/);
  assert.match(home, /twitter:card/);
});

test("search metadata points only to the public origin", async () => {
  const robots = await readFile(new URL("../out/robots.txt", import.meta.url), "utf8");
  const sitemap = await readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8");
  const googleVerification = await readFile(new URL("../out/google584e1cee25c612f5.html", import.meta.url), "utf8");
  assert.match(robots, /https:\/\/wakutsuku-lab\.github\.io\/sitemap\.xml/);
  assert.equal((sitemap.match(/<url>/g) ?? []).length, 21);
  assert.equal(googleVerification.trim(), "google-site-verification: google584e1cee25c612f5.html");
  assert.doesNotMatch(robots + sitemap + [...htmlByRoute.values()].join(""), /cnatgpt\.chatgpt\.site/);
});
