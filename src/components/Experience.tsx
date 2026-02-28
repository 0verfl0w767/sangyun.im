import FadeUp from "./FadeUp";

const experiences = [
  {
    period: "2023.03 ~",
    title: "SYU KR",
    description: "교내 재학생 편의 서비스 개발",
    detail: "누적 사용자 53,000+",
    highlight: true,
  },
  {
    period: "2024.01 ~ 2024.03",
    title: "멘토링 커뮤니티 개발",
    description: "컴퓨터공학부 & 데이터클라우드학과 멘토링 커뮤니티 개발",
    detail: null,
    highlight: false,
  },
  {
    period: "2024.01 ~ 2024.02",
    title: "SW 기초교육 멘토",
    description: "교내 신입생 SW 기초교육 파이썬 멘토링",
    detail: null,
    highlight: false,
  },
  {
    period: "2024.04 ~ 2025.12",
    title: "대한민국 해군 병장 만기전역",
    description:
      "전산장비정비병 복무 (Windows 취약점 추적 및 보안 패치 프로그램 개발)",
    detail: "상훈 수상",
    highlight: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-subtle-blue/30">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl font-bold mb-12">💼 Experience</h2>
        </FadeUp>

        {/* 왼쪽 라인을 border-l로 처리, 점은 -translate-x 로 라인 위에 올림 */}
        <div className="border-l-2 border-primary/20 ml-3 space-y-8">
          {experiences.map((exp, i) => (
            <FadeUp key={i} delay={i * 100}>
              <div className="relative pl-8">
                {/* Dot */}
                <span
                  className={`absolute -left-[9px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 ${
                    exp.highlight
                      ? "bg-primary border-primary"
                      : "bg-white border-primary/40"
                  }`}
                />

                <div
                  className={`rounded-2xl p-6 shadow-sm border transition-shadow hover:shadow-md ${
                    exp.highlight
                      ? "bg-primary/5 border-primary/20"
                      : "bg-card border-border"
                  }`}
                >
                  <p className="text-sm text-primary font-medium mb-1">
                    {exp.period}
                  </p>
                  <h3 className="font-semibold text-lg mb-1">{exp.title}</h3>
                  <p className="text-foreground/60 text-sm">
                    {exp.description}
                  </p>
                  {exp.detail && (
                    <p className="mt-2 text-sm font-medium text-primary">
                      {exp.detail}
                    </p>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
