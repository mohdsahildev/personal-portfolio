import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ProjectsSection() {
  const { projects, personalInfo } = portfolioData;

  return (
    <section
      id="projects"
      data-purpose="selected-work-showcase"
      className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 md:py-20"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
        <div>
          <span className="text-xs font-mono uppercase font-bold text-neonOrange tracking-widest block mb-2">
            02 / SELECTED WORK
          </span>
          <h2 className="font-syne font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-darkBrutal">
            PROJECTS
          </h2>
        </div>
        <div className="flex items-center gap-3">
          {/* View All on GitHub button with proper white hover state */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 bg-white hover:bg-darkBrutal transition-all duration-300 font-mono text-xs font-bold px-4 py-2 rounded-full border-2 border-darkBrutal sticker-shadow hover:sticker-shadow-orange hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span className="text-darkBrutal group-hover:text-white transition-colors duration-200">
              View All on GitHub
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] text-darkBrutal group-hover:text-white transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-6" data-purpose="work-accordion-container">
        {projects.map((project) => {
          const isDark = project.cardTheme === "dark";

          return (
            <article
              key={project.number}
              data-purpose="project-card"
              className={`rounded-2xl border-2 border-darkBrutal p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group/card ${isDark
                ? "bg-darkBrutal text-white sticker-shadow-orange hover:border-neonOrange"
                : "bg-white text-darkBrutal sticker-shadow hover:shadow-2xl hover:border-darkBrutal"
                }`}
            >
              {/* Card Meta Top Bar */}
              <div
                className={`flex flex-wrap items-center justify-between border-b pb-4 mb-6 gap-2 ${isDark ? "border-white/10" : "border-darkBrutal/10"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-neonOrange font-bold text-sm">
                    /{project.number}
                  </span>
                  {project.inProgress ? (
                    <span className="bg-neonOrange text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      IN PROGRESS
                    </span>
                  ) : (
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase ${isDark
                        ? "bg-white/10 text-white border border-white/20"
                        : "bg-darkBrutal/5 border border-darkBrutal/15 text-darkBrutal"
                        }`}
                    >
                      {project.tag}
                    </span>
                  )}
                </div>
                <span
                  className={`font-mono text-xs ${isDark ? "text-white/50" : "text-darkBrutal/60"
                    }`}
                >
                  {project.categoryLabel}
                </span>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Description Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-1">
                    <h3
                      className={`font-syne font-black text-2xl sm:text-3xl tracking-tight transition-colors duration-200 group-hover/card:text-neonOrange ${isDark ? "text-white" : "text-darkBrutal"
                        }`}
                    >
                      {project.title}
                    </h3>
                    <p className="font-serif-italic text-xl sm:text-2xl text-neonOrange">
                      {project.subtitle}
                    </p>
                  </div>

                  <p
                    className={`text-sm font-sans leading-relaxed ${isDark ? "text-white/70" : "text-darkBrutal/80"
                      }`}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack Chips with micro-hover bounce */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className={`font-mono text-[11px] px-3 py-1 rounded-md transition-all duration-200 hover:scale-105 cursor-default ${tech.highlight
                          ? "bg-neonOrange/10 border border-neonOrange/30 text-neonOrange font-bold hover:bg-neonOrange/20"
                          : isDark
                            ? "bg-white/10 text-white hover:bg-white/20 hover:border-white/40"
                            : "bg-darkBrutal/5 border border-darkBrutal/15 text-darkBrutal font-medium hover:border-darkBrutal/40 hover:bg-darkBrutal/10"
                          }`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Action CTAs */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 bg-neonOrange hover:bg-burntOrange text-white font-syne font-bold text-xs uppercase px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-md"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/btn inline-flex items-center gap-2 font-syne font-bold text-xs uppercase px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border ${isDark
                        ? "bg-white/10 hover:bg-white/20 text-white border-white/20"
                        : "bg-white hover:bg-darkBrutal text-darkBrutal hover:text-white border-2 border-darkBrutal sticker-shadow"
                        }`}
                    >
                      <span className="transition-colors duration-200 group-hover/btn:text-white">
                        GitHub
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-all duration-200 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* Right Blueprint / Telemetry Card */}
                <div className="lg:col-span-5">
                  <div
                    className={`rounded-xl p-5 shadow-2xl space-y-3.5 border-2 transition-all duration-300 hover:scale-[1.01] ${isDark
                      ? "bg-[#1A1410] border-white/15 hover:border-white/30"
                      : "bg-warmCream border-darkBrutal sticker-shadow hover:sticker-shadow-orange"
                      }`}
                  >
                    <div
                      className={`flex items-center justify-between text-xs font-mono border-b pb-2 ${isDark
                        ? "text-white/50 border-white/10"
                        : "text-darkBrutal/60 border-darkBrutal/10"
                        }`}
                    >
                      <span className={!isDark ? "font-bold text-darkBrutal" : ""}>
                        {project.blueprint.domain}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 ${isDark
                          ? "text-accentLime"
                          : "text-neonOrange font-bold"
                          }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
                        {project.blueprint.statusText}
                      </span>
                    </div>

                    {project.number === "02" ? (
                      /* Grid Layout for FlowForge */
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                        {project.blueprint.details.map((detail) => (
                          <div
                            key={detail.label}
                            className="border border-darkBrutal/20 rounded p-2 bg-white transition-colors duration-200 hover:border-neonOrange"
                          >
                            <span className="text-[10px] text-darkBrutal/60 block">
                              {detail.label}
                            </span>
                            <span
                              className={`font-bold ${detail.highlight === "orange"
                                ? "text-neonOrange"
                                : "text-darkBrutal"
                                }`}
                            >
                              {detail.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Vertical Row Layout for SahaYatri and Auralis */
                      <div className="space-y-2 text-xs font-mono">
                        {project.blueprint.details.map((detail) => (
                          <div
                            key={detail.label}
                            className={`p-2 rounded flex justify-between items-center transition-colors duration-200 ${isDark
                              ? "bg-white/5 text-white/80 hover:bg-white/10"
                              : "bg-white border border-darkBrutal/15 hover:border-darkBrutal/40"
                              }`}
                          >
                            <span
                              className={
                                isDark ? "text-white/60" : "text-darkBrutal"
                              }
                            >
                              {detail.label}
                            </span>
                            <span
                              className={`font-bold ${detail.highlight === "orange"
                                ? "text-neonOrange"
                                : detail.highlight === "lime"
                                  ? "text-accentLime"
                                  : isDark
                                    ? "text-white"
                                    : "text-darkBrutal"
                                }`}
                            >
                              {detail.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {project.blueprint.extraInfo && (
                      <div className="text-[11px] font-mono text-darkBrutal/70 pt-1">
                        {project.blueprint.extraInfo}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
