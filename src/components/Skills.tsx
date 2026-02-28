import FadeUp from "./FadeUp";

const skillCategories = [
  {
    category: "Lang",
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
      "TypeORM",
      "Django",
      "GraphQL",
      "Redis",
      "MongoDB",
      "MySQL",
      "SQLite3",
      "Socket.io",
    ],
  },
  {
    category: "Infra",
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
    category: "Etc",
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
    <section id="skills" className="py-32 px-6 bg-subtle-blue/30">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl font-bold mb-12">🛠 Skills</h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <FadeUp key={cat.category} delay={i * 100}>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border h-full">
                <div className="mb-4">
                  <h3 className="font-semibold text-lg text-primary">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-foreground/40">{cat.period}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-subtle-blue text-primary text-xs font-medium rounded-full"
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
