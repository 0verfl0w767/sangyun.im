import FadeUp from "./FadeUp";

const acquiredCertifications = [
  {
    name: "프로그래밍기능사(구, 정보처리기능사)",
    type: "국가기술자격",
    date: "2023.12.20",
  },
  {
    name: "정보처리산업기사",
    type: "국가기술자격",
    date: "2025.06.13",
  },
  {
    name: "SQLD",
    type: "국가공인",
    date: "2025.09.19",
  },
];

const upcomingCertifications = [
  {
    name: "정보보안산업기사",
    type: "국가기술자격",
    status: "필기 합격",
  },
  {
    name: "리눅스마스터 2급",
    type: "국가공인",
    status: "필기 합격",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-subtle-blue/20 py-32 px-6"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.15)_0%,_transparent_45%,_rgba(59,130,246,0.08)_100%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <FadeUp>
          <div className="mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">Certifications</h2>
          </div>
        </FadeUp>

        <div className="grid gap-6 lg:grid-cols-2">
          <FadeUp delay={100}>
            <div className="rounded-[30px] border border-border/80 bg-white/80 shadow-[0_24px_60px_-48px_rgba(30,41,59,0.7)] backdrop-blur-sm">
              <div className="border-b border-border/70 px-7 py-6">
                <h3 className="text-2xl font-semibold text-foreground">취득</h3>
              </div>

              <div className="grid gap-4 p-5">
                {acquiredCertifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="rounded-2xl border border-border/70 bg-background/80 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {cert.name}
                        </h4>
                        <p className="mt-2 text-sm text-foreground/45">
                          {cert.date}
                        </p>
                      </div>
                      <span className="rounded-full border border-primary/15 bg-subtle-blue px-3 py-1 text-[11px] font-medium text-primary">
                        {cert.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={180}>
            <div className="rounded-[30px] border border-border/80 bg-white/80 shadow-[0_24px_60px_-48px_rgba(30,41,59,0.7)] backdrop-blur-sm">
              <div className="border-b border-border/70 px-7 py-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  취득 예정
                </h3>
              </div>

              <div className="grid gap-4 p-5">
                {upcomingCertifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="rounded-2xl border border-border/70 bg-background/80 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {cert.name}
                        </h4>
                        <p className="mt-2 text-sm text-foreground/45">
                          {cert.status}
                        </p>
                      </div>
                      <span className="rounded-full border border-primary/15 bg-subtle-blue px-3 py-1 text-[11px] font-medium text-primary">
                        {cert.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
