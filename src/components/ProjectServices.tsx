import type { ProjectService } from "@/data/portfolio";
import { ArrowUpRight } from "./Icons";

export default function ProjectServices({ services }: { services: ProjectService[] }) {
  return (
    <div className="project-services">
      <h4>세부 서비스</h4>
      <ul className="service-list">
        {services.map((service) => (
          <li key={service.name}>
            <h5>{service.name}</h5>
            <p>{service.description}</p>
            <div className="service-links">
              {service.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${service.name} ${link.label} 새 탭에서 보기`}>{link.label}<ArrowUpRight /></a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
