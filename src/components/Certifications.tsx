import FadeUp from "./FadeUp";

const certs = [
  {
    name: "SQLD",
    icon: "🗄",
    type: "국가공인",
  },
  {
    name: "정보처리산업기사",
    icon: "📋",
    type: "국가기술자격",
  },
  {
    name: "정보처리기능사",
    icon: "📋",
    type: "국가기술자격",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl font-bold mb-12">🏆 Certifications</h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <FadeUp key={cert.name} delay={i * 100}>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-semibold text-lg mb-1">{cert.name}</h3>
                <p className="text-sm text-foreground/50">{cert.type}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
