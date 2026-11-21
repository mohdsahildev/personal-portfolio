import { portfolioData } from "@/data/portfolioData";

export default function ServicesSection() {
  const { services } = portfolioData;

  return (
    <section
      id="services"
      data-purpose="services-what-i-do"
      className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 md:py-20 border-t border-darkBrutal/15"
    >
      {/* Title Section */}
      <div className="mb-12 md:mb-14">
        <span className="text-xs font-mono uppercase font-bold text-neonOrange tracking-widest block mb-2">
          04 / EXPERTISE
        </span>
        <h2 className="font-syne font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-darkBrutal">
          WHAT I DO
        </h2>
        <p className="text-darkBrutal/70 text-sm sm:text-base max-w-xl mt-3 font-sans">
          Bridging expressive visual design with robust, typed, component-driven frontend architecture.
        </p>
      </div>

      {/* Numbered Rows with Interactive Hover States */}
      <div className="grid grid-cols-1 divide-y-2 divide-darkBrutal border-y-2 border-darkBrutal">
        {services.map((service) => {
          let badgeClasses =
            "inline-block bg-darkBrutal text-white text-[11px] font-mono px-3 py-1.5 rounded-full sticker-shadow transition-transform duration-200 group-hover:scale-105";

          if (service.badgeVariant === "orange") {
            badgeClasses =
              "inline-block bg-neonOrange text-white text-[11px] font-mono px-3 py-1.5 rounded-full sticker-shadow transition-transform duration-200 group-hover:scale-105";
          } else if (service.badgeVariant === "lime") {
            badgeClasses =
              "inline-block bg-accentLime text-darkBrutal font-bold text-[11px] font-mono px-3 py-1.5 rounded-full sticker-shadow transition-transform duration-200 group-hover:scale-105";
          }

          return (
            <div
              key={service.number}
              className="py-6 sm:py-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-white/80 hover:shadow-sm transition-all duration-300 px-4 -mx-4 rounded-xl cursor-default"
            >
              <div className="md:col-span-1 font-mono font-bold text-xl sm:text-2xl text-neonOrange transition-transform duration-200 group-hover:translate-x-1">
                {service.number}
              </div>

              <div className="md:col-span-4">
                <h3 className="font-syne font-black text-xl sm:text-2xl text-darkBrutal group-hover:text-neonOrange transition-colors duration-200">
                  {service.title}
                </h3>
                <span className="text-xs font-mono text-darkBrutal/60 uppercase mt-1 block">
                  {service.techTags}
                </span>
              </div>

              <div className="md:col-span-5 text-xs sm:text-sm font-sans text-darkBrutal/80 leading-relaxed group-hover:text-darkBrutal transition-colors duration-200">
                {service.description}
              </div>

              <div className="md:col-span-2 text-left md:text-right">
                <span className={badgeClasses}>{service.badge}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
