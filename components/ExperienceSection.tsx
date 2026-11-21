import { ChevronRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      data-purpose="career-experience"
      className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 md:py-20 border-t border-darkBrutal/15"
    >
      <div className="mb-12 md:mb-14">
        <span className="text-xs font-mono uppercase font-bold text-neonOrange tracking-widest block mb-2">
          03 / CAREER
        </span>
        <h2 className="font-syne font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-darkBrutal">
          WORK EXPERIENCE
        </h2>
      </div>

      {/* Brutalist Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l-4 border-darkBrutal max-w-3xl ml-2 sm:ml-4 space-y-12">
        {experience.map((item, index) => (
          <div key={index} className="relative">
            {/* Glowing Orange Marker */}
            <span className="absolute -left-[35px] sm:-left-[42px] top-1.5 w-5 h-5 rounded-full bg-neonOrange border-4 border-warmCream sticker-shadow" />

            {/* Role Box */}
            <div className="bg-white border-2 border-darkBrutal p-5 sm:p-7 rounded-2xl sticker-shadow">
              <div className="flex items-start justify-between flex-wrap gap-2 border-b-2 border-darkBrutal/10 pb-4 mb-4">
                <div>
                  <h3 className="font-syne font-black text-xl sm:text-2xl text-darkBrutal">
                    {item.role}
                  </h3>
                  <div className="font-sans font-semibold text-sm text-neonOrange mt-0.5">
                    {item.company}, {item.location}
                  </div>
                </div>
                <span className="bg-darkBrutal text-white text-xs font-mono font-bold px-3 py-1 rounded-full">
                  {item.period}
                </span>
              </div>

              <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-darkBrutal/80 leading-relaxed">
                {item.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <ChevronRight className="w-4 h-4 text-neonOrange stroke-[2.5] shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
