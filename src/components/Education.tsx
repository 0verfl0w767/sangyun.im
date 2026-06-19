import FadeUp from "./FadeUp";

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 bg-subtle-blue/30">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="mb-2 text-3xl font-bold">Education</h2>
          <p className="mb-2 text-lg text-foreground/60">
            삼육대학교 컴퓨터공학부 소프트웨어전공
          </p>
          <p className="mb-12 text-foreground/40">2022.03 ~ 2027.02 (예정)</p>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FadeUp delay={100}>
            <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
              <p className="mb-1 text-sm text-foreground/50">Major GPA</p>
              <p className="text-3xl font-bold text-primary">4.5 / 4.5</p>
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
              <p className="mb-1 text-sm text-foreground/50">Total GPA</p>
              <p className="text-3xl font-bold text-foreground">4.37 / 4.5</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
