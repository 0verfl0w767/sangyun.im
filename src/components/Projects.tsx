import { projects } from "@/data/portfolio";
import { ArrowUpRight } from "./Icons";
import MailArchitecture from "./MailArchitecture";
import ProjectServices from "./ProjectServices";

export default function Projects() {
  return (
    <section id="projects" className="portfolio-section projects-section" aria-labelledby="projects-title">
      <div className="section-heading"><h2 id="projects-title">프로젝트</h2><span className="section-caption">PROJECTS</span></div>
      {projects.map((project) => (
        <article className="project" key={project.name}>
          <div className="project-topline"><span className="project-number">{project.number}</span>{project.period && <span className="period">{project.period}</span>}</div>
          <div className="project-heading">
            <h3>{project.name}</h3>
            <div className="project-links">
              {project.website && <a className="text-link" href={project.website} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} 웹사이트 새 탭에서 보기`}>웹사이트 <ArrowUpRight /></a>}
              {project.github && <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} GitHub 새 탭에서 보기`}>GitHub <ArrowUpRight /></a>}
              {project.links?.map((link) => <a className="text-link" href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} ${link.label} 저장소 새 탭에서 보기`} key={link.href}>{link.label} <ArrowUpRight /></a>)}
            </div>
          </div>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-role">{project.role}</p>
          <p className="project-description">{project.description}</p>
          {project.result && <div className="project-result"><strong>{project.result.value}</strong><span>{project.result.label}</span></div>}
          {project.services && <ProjectServices services={project.services} />}
          <dl className="project-work">
            {project.work.map((work) => <div key={work.title}><dt>{work.title}</dt><dd>{work.description}</dd></div>)}
          </dl>
          {project.architecture === "mail" && <MailArchitecture />}
          <div className="project-stack" aria-label="사용 기술">{project.stack.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </article>
      ))}
    </section>
  );
}
