import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import StickyNav from "@/components/StickyNav";
import ScrollProgressButton from "@/components/ScrollProgressButton";
import SpaceEffect from "@/components/SpaceEffect";

const notoSerifKr = Noto_Serif_KR({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-noto-serif-kr",
  display: "swap",
});
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-cormorant-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yang's Space",
  description: "숭실대학교 AI소프트웨어학과 양상윤의 프로젝트와 활동 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark" data-scroll-behavior="smooth">
      <body className={`${notoSerifKr.variable} ${cormorantGaramond.variable} font-sans antialiased bg-black text-white relative min-h-screen`}>
        <SpaceEffect />
        <div className="relative z-10">
          <StickyNav />
          {children}
          <ScrollProgressButton />
        </div>
      </body>
    </html>
  );
}
