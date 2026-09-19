import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="portfolio-section" aria-labelledby="certifications-title">
      <div className="section-heading"><h2 id="certifications-title">자격</h2><span className="section-caption">CERTIFICATIONS</span></div>
      <ul className="certification-list">
        {certifications.map((certification) => <li key={certification.name}><span>{certification.name}</span><span className={`certification-status${certification.status === "필기 합격" ? " pending" : ""}`}>{certification.status}</span></li>)}
      </ul>
    </section>
  );
}
