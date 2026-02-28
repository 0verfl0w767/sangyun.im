import FadeUp from "./FadeUp";

const semesters = [
  { label: "2022-1", gpa: 4.43, rank: "수석" },
  { label: "2022-2", gpa: 4.32, rank: "수석" },
  { label: "2023-1", gpa: 4.44, rank: "차석" },
  { label: "2023-2", gpa: 4.44, rank: "수석" },
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 bg-subtle-blue/30">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl font-bold mb-2">🎓 Education</h2>
          <p className="text-foreground/60 mb-2 text-lg">
            삼육대학교 컴퓨터공학부 소프트웨어전공
          </p>
          <p className="text-foreground/40 mb-12">2022.03 ~ 2027.02 (예정)</p>
        </FadeUp>

        {/* 학기별 성적 */}
        <FadeUp delay={100}>
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border mb-8">
            <h3 className="font-semibold text-lg mb-6">📊 학기별 GPA</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {semesters.map((sem) => (
                <div
                  key={sem.label}
                  className="flex items-center justify-between bg-background rounded-xl p-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-foreground/70">
                      {sem.label}
                    </span>
                    <span className="text-lg font-bold text-foreground">
                      {sem.gpa} / 4.5
                    </span>
                  </div>
                  <span className="text-xs font-medium text-primary bg-subtle-blue px-3 py-1 rounded-full">
                    {sem.rank}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* 전체 GPA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeUp delay={200}>
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center">
              <p className="text-sm text-foreground/50 mb-1">Major GPA</p>
              <p className="text-3xl font-bold text-primary">4.5 / 4.5</p>
            </div>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center">
              <p className="text-sm text-foreground/50 mb-1">Total GPA</p>
              <p className="text-3xl font-bold text-foreground">4.37 / 4.5</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
