import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ワクツク研究所｜仕事道具を選ぶ条件がわかる",
  description: "仕事道具の仕様、互換性、向いている条件を公式情報から整理するメディアです。",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "ワクツク研究所｜仕事道具を選ぶ条件がわかる",
    description: "公式情報をもとに、仕事道具を選ぶ条件をわかりやすく整理します。",
    images: [{ url: "/og.png", width: 1736, height: 907, alt: "ワクツク研究所 モバイルモニター選び方ガイド" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
