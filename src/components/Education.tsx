export default function Education() {
  return (
    <section id="education" className="portfolio-section" aria-labelledby="education-title">
      <div className="section-heading"><h2 id="education-title">학력</h2><span className="section-caption">EDUCATION</span></div>
      <div className="education-entry">
        <div className="entry-heading"><h3>삼육대학교</h3><span className="period">2022.03 — 2028 (졸업 예정)</span></div>
        <p className="entry-description">컴퓨터공학부 소프트웨어전공</p>
        <dl className="gpa"><div><dt>전체 학점</dt><dd>4.4 <span>/ 4.5</span></dd></div><div><dt>전공 학점</dt><dd>4.5 <span>/ 4.5</span></dd></div></dl>
      </div>
      <div className="education-entry secondary-entry"><div className="entry-heading"><h3>상계고등학교</h3><span className="period">2019.03 — 2022.02</span></div></div>
    </section>
  );
}
