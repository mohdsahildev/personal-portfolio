import { Code2, Atom, Palette, Sparkles, Plug, Wrench } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const categoryIconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-neonOrange stroke-[2.2] transition-transform duration-300 group-hover/skill:rotate-12 group-hover/skill:scale-110" />,
  Atom: <Atom className="w-5 h-5 text-neonOrange stroke-[2.2] transition-transform duration-300 group-hover/skill:rotate-180" />,
  Palette: <Palette className="w-5 h-5 text-neonOrange stroke-[2.2] transition-transform duration-300 group-hover/skill:scale-110" />,
  Sparkles: <Sparkles className="w-5 h-5 text-accentLime stroke-[2.2] transition-transform duration-300 group-hover/skill:scale-125" />,
  Plug: <Plug className="w-5 h-5 text-neonOrange stroke-[2.2] transition-transform duration-300 group-hover/skill:-rotate-12" />,
  Wrench: <Wrench className="w-5 h-5 text-neonOrange stroke-[2.2] transition-transform duration-300 group-hover/skill:rotate-45" />,
};

export default function SkillsSection() {
  const { skillCategories } = portfolioData;

  return (
    <section
      id="skills"
      data-purpose="skills-arsenal"
      className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 md:py-20 border-b border-darkBrutal/15"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
        <div>
          <span className="text-xs font-mono uppercase font-bold text-neonOrange tracking-widest block mb-2">
            01 / CAPABILITIES
          </span>
          <h2 className="font-syne font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-darkBrutal">
            SKILLS &amp; ARSENAL
          </h2>
        </div>
        <span className="text-xs font-mono text-darkBrutal/60">
          [{skillCategories.length} TECHNICAL PILLARS]
        </span>
      </div>

      {/* 6 Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className={`bg-white border-2 border-darkBrutal rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group/skill ${category.shadowVariant === "orange"
              ? "sticker-shadow-orange hover:border-neonOrange"
              : "sticker-shadow hover:sticker-shadow-orange"
              }`}
          >
            {/* Card Header */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-darkBrutal/10 mb-4">
              <span className="font-mono text-xs font-bold text-neonOrange transition-colors">
                {category.pillarNumber} / {category.categoryLabel}
              </span>
              <span className="w-8 h-8 rounded-lg bg-darkBrutal/5 flex items-center justify-center border border-darkBrutal/10 transition-all duration-300 group-hover/skill:bg-neonOrange/15 group-hover/skill:border-neonOrange/30">
                {categoryIconMap[category.icon] || (
                  <Code2 className="w-5 h-5 text-neonOrange" />
                )}
              </span>
            </div>

            <h3 className="font-syne font-bold text-xl text-darkBrutal mb-3 group-hover/skill:text-neonOrange transition-colors duration-200">
              {category.title}
            </h3>

            {/* Badges with micro-bounce */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                let badgeClass =
                  "font-mono text-xs bg-darkBrutal/5 border border-darkBrutal/15 px-3 py-1.5 rounded-lg text-darkBrutal font-medium transition-all duration-150 hover:scale-105 cursor-default hover:border-darkBrutal/30";

                if (skill.variant === "dark") {
                  badgeClass =
                    "font-mono text-xs bg-darkBrutal text-white px-3 py-1.5 rounded-lg font-medium transition-all duration-150 hover:scale-105 hover:bg-black cursor-default";
                } else if (skill.variant === "orange") {
                  badgeClass =
                    "font-mono text-xs bg-neonOrange text-white px-3 py-1.5 rounded-lg font-bold transition-all duration-150 hover:scale-105 hover:bg-burntOrange cursor-default shadow-sm";
                } else if (skill.variant === "lime") {
                  badgeClass =
                    "font-mono text-xs bg-accentLime text-darkBrutal font-bold px-3 py-1.5 rounded-lg transition-all duration-150 hover:scale-105 cursor-default shadow-sm";
                }

                return (
                  <span key={skill.name} className={badgeClass}>
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
