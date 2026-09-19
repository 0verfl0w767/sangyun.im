import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sangyun.im"),
  title: "김상윤 | Backend / Infra Developer",
  description: "백엔드·인프라 개발자 김상윤의 포트폴리오. SYU.KR, 메일 서버·웹메일, 삼육대학교 컴퓨터공학부 홈페이지 및 장소 검색 API 프로젝트를 소개합니다.",
  openGraph: {
    title: "SangYun Portfolio",
    description: "SYU.KR 플랫폼, 메일 서버·웹메일, 학과 홈페이지 및 장소 검색 API 개발. 김상윤의 프로젝트와 기술 경험을 소개합니다.",
    locale: "ko_KR",
    type: "website",
    images: [{
      url: "/og-portfolio.png",
      width: 1200,
      height: 630,
      alt: "SangYun Portfolio",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SangYun Portfolio",
    description: "백엔드와 인프라 분야에 관심을 가지고 꾸준히 경험을 쌓아가고 있는 학생입니다.",
    images: [{ url: "/og-portfolio.png", alt: "SangYun Portfolio" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
