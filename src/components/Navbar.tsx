"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "education", label: "학력" },
  { id: "military", label: "병역" },
  { id: "certifications", label: "자격" },
  { id: "skills", label: "기술" },
  { id: "projects", label: "프로젝트" },
  { id: "experience", label: "활동 및 수상" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    let frame = 0;
    const updateActive = () => {
      frame = 0;
      const atBottom = window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      let current = atBottom ? items[items.length - 1].id : "";
      if (!atBottom) {
        for (const item of items) {
          const section = document.getElementById(item.id);
          if (section && section.getBoundingClientRect().top <= 120) current = item.id;
        }
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActive);
    };
    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav className="section-nav" aria-label="포트폴리오 목차">
      {items.map((item, index) => (
        <a key={item.id} href={`#${item.id}`} className={active === item.id ? "active" : undefined} aria-current={active === item.id ? "location" : undefined} onClick={() => setActive(item.id)}>
          <span className="nav-number">{String(index + 1).padStart(2, "0")}</span>
          {item.label}
          <span className="nav-indicator" aria-hidden="true">↗</span>
        </a>
      ))}
    </nav>
  );
}
