import { portfolioData } from "@/data/portfolioData";

export default function StatsSection() {
  const { stats } = portfolioData;

  return (
    <section
      data-purpose="metrics-and-stats"
      className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 md:py-16 border-b border-darkBrutal/15"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x-2 lg:divide-darkBrutal">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`px-3 sm:px-6 ${idx === 0 ? "lg:pl-0" : ""} ${idx === stats.length - 1 ? "lg:pr-0" : ""
              }`}
          >
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase text-neonOrange tracking-widest block mb-1">
              {stat.label}
            </span>
            <div className="font-syne font-black text-4xl sm:text-5xl lg:text-6xl text-darkBrutal tracking-tight flex items-baseline">
              {stat.value}
              {stat.suffix && (
                <span className="text-neonOrange text-3xl sm:text-4xl">
                  {stat.suffix}
                </span>
              )}
              {stat.unit && (
                <span className="text-xl sm:text-2xl font-syne font-bold ml-1 text-darkBrutal/80">
                  {stat.unit}
                </span>
              )}
            </div>
            <p className="font-sans text-xs text-darkBrutal/70 font-medium mt-1">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
