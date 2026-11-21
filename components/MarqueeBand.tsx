import { portfolioData } from "@/data/portfolioData";

export default function MarqueeBand() {
  const { marqueeSkills } = portfolioData;

  return (
    <section
      data-purpose="ticker-marquee"
      className="bg-darkBrutal border-y-4 border-neonOrange py-3 overflow-hidden select-none"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Set 1 */}
        <div className="flex items-center gap-6 sm:gap-8 text-white font-syne font-extrabold text-xs sm:text-sm tracking-wider uppercase">
          {marqueeSkills.map((skill, index) => (
            <span key={`s1-${index}`} className="flex items-center gap-6 sm:gap-8">
              <span>{skill}</span>
              <span className="text-neonOrange">✦</span>
            </span>
          ))}
        </div>

        {/* Set 2 (for seamless infinite loop) */}
        <div className="flex items-center gap-6 sm:gap-8 text-white font-syne font-extrabold text-xs sm:text-sm tracking-wider uppercase ml-6 sm:ml-8">
          {marqueeSkills.map((skill, index) => (
            <span key={`s2-${index}`} className="flex items-center gap-6 sm:gap-8">
              <span>{skill}</span>
              <span className="text-neonOrange">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
