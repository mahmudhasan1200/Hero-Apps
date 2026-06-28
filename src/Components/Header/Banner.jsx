import bannerPng from "../assets/hero.png";
export default function Banner() {
  return (
    <header className="w-full pt-16 px-6 font-sans text-center relative overflow-hidden">
      <div className="mx-auto flex flex-col items-center">
        {/* Main Header Copy */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-none">
          We Build <br />
          <span className="text-purple-600 inline-block mt-2">
            Productive Apps
          </span>
        </h1>

        {/* Supporting Description Paragraph */}
        <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          At Hero.io, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        {/* Mobile App Download Button Handles */}
        <div className="flex gap-4 mt-8 mb-8">
          {/* Google Play Store Trigger Button */}
          <button className="flex items-center gap-2.5 bg-white border border-gray-200 hover:bg-gray-50 cursor-pointer text-gray-800 text-xs font-bold py-2 px-4 rounded-xl shadow-sm transition-all">
            {/* Simple Color Triangle Block representing Google Play Logo */}
            <div
              className="w-4 h-4 bg-green-500 clip-triangle shrink-0"
              style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
            ></div>
            Google Play
          </button>

          {/* Apple App Store Trigger Button */}
          <button className="flex items-center gap-2.5 bg-white border border-gray-200 hover:bg-gray-50 cursor-pointer text-gray-800 text-xs font-bold py-2 px-4 rounded-xl shadow-sm transition-all">
            {/* Apple Logo SVG Placeholder Icon */}
            <svg
              xmlns="http://w3.org"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-blue-500 shrink-0"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.56 2.95-1.39z" />
            </svg>
            App Store
          </button>
        </div>

        {/* Central Graphic Showcase Wrapper */}
        <div className=" w-full mx-auto flex justify-center">
          {/* Main App Mockup Screen Centerpiece Placeholder */}
          <div className="max-w-xl">
            <img src={bannerPng} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
