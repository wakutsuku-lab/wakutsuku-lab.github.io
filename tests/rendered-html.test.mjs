import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const home = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const article = await readFile(new URL("../app/articles/mobile-monitor/page.tsx", import.meta.url), "utf8");
const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
const articleData = await readFile(new URL("../app/articles/article-data.ts", import.meta.url), "utf8");
const clusterPage = await readFile(new URL("../app/articles/[slug]/page.tsx", import.meta.url), "utf8");

test("contains the Wakutsuku brand and Japanese metadata", () => {
  assert.match(home, /ワクツク研究所/);
  assert.match(home, /仕事道具を選ぶ条件が/);
  assert.match(layout, /lang="ja"/);
});

test("publishes a ten-page cluster without fabricated hands-on claims", () => {
  assert.equal((articleData.match(/slug: "mobile-monitor-/g) ?? []).length, 9);
  assert.match(clusterPage, /アフィリエイトリンクが含まれます/);
  assert.match(clusterPage, /rel="sponsored nofollow"/);
  assert.doesNotMatch(home + articleData + clusterPage, /使ってみた|実機レビュー|愛用/);
});

test("publishes the first article with clear affiliate disclosure", () => {
  assert.match(article, /アフィリエイトリンクが含まれます/);
  assert.match(article, /rel="sponsored nofollow"/);
  assert.equal((article.match(/hb\.afl\.rakuten\.co\.jp/g) ?? []).length, 3);
  assert.match(article, /買わない方がよい人/);
});
