import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const home = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const article = await readFile(new URL("../app/articles/mobile-monitor/page.tsx", import.meta.url), "utf8");
const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
const articleData = await readFile(new URL("../app/articles/article-data.ts", import.meta.url), "utf8");
const clusterPage = await readFile(new URL("../app/articles/[slug]/page.tsx", import.meta.url), "utf8");
const advertisingPolicy = await readFile(new URL("../app/advertising-policy/page.tsx", import.meta.url), "utf8");
const privacy = await readFile(new URL("../app/privacy/page.tsx", import.meta.url), "utf8");
const sitemap = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");
const robots = await readFile(new URL("../app/robots.ts", import.meta.url), "utf8");

test("contains the Wakutsuku brand and Japanese metadata", () => {
  assert.match(home, /ワクツク研究所/);
  assert.match(home, /仕事道具を選ぶ条件が/);
  assert.match(layout, /lang="ja"/);
});

test("publishes a ten-page cluster without fabricated hands-on claims", () => {
  assert.equal((articleData.match(/slug: "mobile-monitor-/g) ?? []).length, 12);
  assert.match(clusterPage, /アフィリエイトリンクが含まれます/);
  assert.match(clusterPage, /rel="sponsored nofollow"/);
  assert.equal((articleData.match(/hb\.afl\.rakuten\.co\.jp/g) ?? []).length, 3);
  assert.match(clusterPage, /候補3製品の選び分け/);
  assert.doesNotMatch(home + articleData + clusterPage, /使ってみた|実機レビュー|愛用/);
});

test("publishes official-source compatibility and troubleshooting guides", () => {
  assert.match(articleData, /mobile-monitor-laptop-compatibility/);
  assert.match(articleData, /mobile-monitor-cable-guide/);
  assert.match(articleData, /mobile-monitor-troubleshooting/);
  assert.match(clusterPage, /公式情報/);
  assert.match(articleData, /displayport\.org/);
  assert.match(articleData, /support\.microsoft\.com/);
  assert.match(articleData, /support\.apple\.com/);
  assert.match(clusterPage, /generateMetadata/);
  assert.match(clusterPage, /application\/ld\+json/);
  assert.match(clusterPage, /関連記事/);
});

test("has affiliate-review and search-readiness pages", () => {
  assert.match(advertisingPolicy, /広告であることを隠した掲載は行いません/);
  assert.match(privacy, /現時点ではアクセス解析サービスを接続していません/);
  assert.match(sitemap, /articles\.map/);
  assert.match(robots, /sitemap\.xml/);
  assert.match(home, /広告・アフィリエイト方針/);
});

test("publishes the first article with clear affiliate disclosure", () => {
  assert.match(article, /アフィリエイトリンクが含まれます/);
  assert.match(article, /rel="sponsored nofollow"/);
  assert.equal((article.match(/hb\.afl\.rakuten\.co\.jp/g) ?? []).length, 3);
  assert.match(article, /買わない方がよい人/);
});
