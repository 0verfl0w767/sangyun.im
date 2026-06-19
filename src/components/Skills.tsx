import FadeUp from "./FadeUp";

const skillCategories = [
  {
    category: "Languages",
    period: "2017 - Present",
    skills: [
      "C",
      "C++",
      "C#",
      "PHP",
      "Java",
      "Python",
      "Shell",
      "JavaScript",
      "TypeScript",
      "Visual Basic",
      "Windows Batch",
    ],
  },
  {
    category: "Frontend",
    period: "2022 - Present",
    skills: ["Vanilla JS", "Bootstrap"],
  },
  {
    category: "Backend",
    period: "2022 - Present",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "Spring Boot",
      "Django",
      "TypeORM",
      "GraphQL",
      "Redis",
      "MongoDB",
      "MySQL",
      "SQLite3",
      "Socket.io",
    ],
  },
  {
    category: "Infrastructure",
    period: "2022 - Present",
    skills: [
      "Docker",
      "Nginx",
      "PM2",
      "uWSGI",
      "Cloudflare",
      "HTTP/3 QUIC",
      "GitHub Actions",
    ],
  },
  {
    category: "Cloud",
    period: "2022 - Present",
    skills: [
      "Naver Cloud",
      "Google Cloud",
      "Kakao Cloud",
      "Azure",
      "Vultr",
      "ConoHa",
    ],
  },
  {
    category: "Tooling",
    period: "2022 - Present",
    skills: [
      "Jest",
      "Selenium",
      "Qt/PySide",
      "Let's Encrypt SSL",
      "Sendmail",
      "Postfix",
      "Dovecot",
      "OpenDKIM",
      "SPF/DMARC",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-32 px-6">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_32%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <FadeUp>
          <div className="mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">Skills</h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <FadeUp key={category.category} delay={index * 80}>
              <div className="h-full rounded-[28px] border border-border/80 bg-white/80 p-6 shadow-[0_24px_60px_-48px_rgba(30,41,59,0.7)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.category}
                  </h3>
                  <span className="rounded-full bg-subtle-blue px-3 py-1 text-[11px] font-medium text-primary">
                    {category.period}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-primary/10 bg-background px-3 py-1.5 text-xs font-medium text-foreground/75"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
