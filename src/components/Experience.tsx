import { activities } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="portfolio-section" aria-labelledby="experience-title">
      <div className="section-heading"><h2 id="experience-title">활동 및 수상</h2><span className="section-caption">ACTIVITIES & AWARDS</span></div>
      {activities.map((activity) => (
        <article className="activity" key={activity.title}>
          <div className="activity-meta"><span>{activity.type}</span><span className="period">{activity.period}</span></div>
          <h3>{activity.title}</h3>
          <p className="activity-organization">{activity.organization}</p>
          <p className="entry-description">{activity.description}</p>
        </article>
      ))}
    </section>
  );
}
