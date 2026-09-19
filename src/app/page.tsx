import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Military from "@/components/Military";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="site-shell">
      <a className="skip-link" href="#main">본문으로 이동</a>
      <header className="masthead"><a href="#top">sangyun.im</a><span>PORTFOLIO</span></header>
      <div className="portfolio-layout">
        <aside className="sidebar" aria-label="프로필 및 목차"><div className="sidebar-inner"><Hero /><Navbar /></div></aside>
        <main id="main" tabIndex={-1}>
          <section className="introduction" aria-labelledby="intro-title">
            <p className="intro-eyebrow">백엔드 · 인프라</p>
            <h2 id="intro-title">웹 서비스 개발과 운영</h2>
            <p className="intro-description">백엔드와 인프라 분야에 관심을 가지고 꾸준히 경험을 쌓아가고 있는 학생입니다.</p>
            <p className="intro-interests">백엔드 / 인프라 / 클라우드 / 보안</p>
          </section>
          <Education /><Military /><Certifications /><Skills /><Projects /><Experience /><Footer />
        </main>
      </div>
    </div>
  );
}
