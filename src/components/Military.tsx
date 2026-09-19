import { militaryService } from "@/data/portfolio";

export default function Military() {
  return (
    <section id="military" className="portfolio-section" aria-labelledby="military-title">
      <div className="section-heading"><h2 id="military-title">병역</h2><span className="section-caption">MILITARY SERVICE</span></div>
      <article className="military-entry">
        <div className="entry-heading"><h3>{militaryService.branch}</h3><span className="period">{militaryService.period}</span></div>
        <p className="entry-description">{militaryService.rank} {militaryService.status} · {militaryService.role} ({militaryService.duties})</p>
      </article>
    </section>
  );
}
