export default function StatsBanner() {
  const statsData = [
    {
      id: 1,
      label: "Total Downloads",
      value: "29.6m",
      trend: "21% More Than Last Month",
    },
    {
      id: 2,
      label: "Total Reviews",
      value: "906k",
      trend: "46% More Than Last Month",
    },
    {
      id: 3,
      label: "Active Apps",
      value: "132+",
      trend: "31 More Will Launch",
    },
  ];

  return (
    <section className="w-full bg-linear-to-r from-[#6322eb] via-[#7d3bf3] to-[#a35cfc] text-white py-16 px-6 relative overflow-hidden font-sans">
      {/* Background Graphic Asset: Wave lines overlapping the right side exactly like the mockup image */}
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-40 pointer-events-none hidden md:block">
        <svg
          className="w-full h-full text-black"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M10,0 C30,30 10,70 50,100 M20,0 C40,30 20,70 60,100 M30,0 C50,30 30,70 70,100 M40,0 C60,30 40,70 80,100 M50,0 C70,30 50,70 90,100 M60,0 C80,30 60,70 100,100"
            stroke="currentColor"
            strokeWidth="0.3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        {/* Main Section Header Text Block */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12">
          Trusted By Millions, Built For You
        </h2>

        {/* 
          Clean Responsive Flex Grid: 
          Stacks neatly on tiny mobile displays, spreads evenly on desktop screens. No lines or borders!
        */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 text-center items-center">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              {/* Soft, smaller label indicator banner */}
              <span className="text-[11px] sm:text-xs font-normal tracking-wide text-purple-100/80 uppercase">
                {stat.label}
              </span>

              {/* Massive high-contrast numerical metrics values text blocks */}
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight my-1 drop-shadow-sm">
                {stat.value}
              </span>

              {/* Micro trend evaluation indicator description line below */}
              <span className="text-[10px] sm:text-xs text-purple-200/90 font-medium">
                {stat.trend}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
