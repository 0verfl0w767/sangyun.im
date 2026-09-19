import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="portfolio-section" aria-labelledby="skills-title">
      <div className="section-heading"><h2 id="skills-title">기술</h2><span className="section-caption">TECH STACK</span></div>
      <dl className="skills-list">
        {skillCategories.map((category) => <div key={category.category}><dt>{category.category}</dt><dd>{category.skills.map((skill) => <span key={skill}>{skill}</span>)}</dd></div>)}
      </dl>
    </section>
  );
}
