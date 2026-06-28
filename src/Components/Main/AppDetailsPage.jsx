import { useParams, Link, useRouteLoaderData } from "react-router";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function AppDetailsPage() {
  // the data for the App details
  const appData = useRouteLoaderData("root");
  const { appId } = useParams();
  const app = appData?.find((app) => app.id === Number(appId));

  return (
    <div className="w-full bg-[#fdfdfd] min-h-screen flex flex-col justify-between font-sans">
      {/* Main Page Area Container */}
      <div className="flex-1 max-w-5xl w-full mx-auto px-4 md:px-8 py-12">
        {/* Back Navigation Link Breadcrumb */}
        <Link
          to="/apps"
          className="inline-flex items-center text-xs font-semibold text-purple-600 hover:text-purple-700 gap-1.5 mb-8 transition-colors"
        >
          <FaArrowLeftLong />
          Back to Applications Catalog
        </Link>

        {/* 1. Header Profile Banner Summary Block */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center border-b border-slate-100 pb-10">
          <div className="col-span-1 flex justify-center md:justify-start">
            <figure className="w-44 h-44 bg-slate-50 border border-slate-100 shadow-sm rounded-3xl p-6 flex items-center justify-center">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-contain"
              />
            </figure>
          </div>

          <div className="col-span-1 md:col-span-3 flex flex-col gap-5 text-center md:text-left">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                {app.title}
              </h1>
              <p className="text-xs font-medium text-slate-400 mt-1">
                Developed by{" "}
                <span className="text-purple-600 font-semibold">
                  {app.companyName}
                </span>
              </p>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-10 text-slate-700">
              <div className="flex flex-col items-center md:items-start gap-1.5">
                <img src={downloadIcon} alt="" />
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  Downloads
                </span>
                <span className="text-xl font-black ">
                  {app.downloads >= 1000000
                    ? `${parseFloat(app.downloads / 1000000).toFixed(1)}m`
                    : `${parseFloat(app.downloads / 1000).toFixed(1)}k`}
                </span>
              </div>
              <div className="flex flex-col items-center md:items-start gap-1.5">
                <img src={ratingIcon} alt="" />
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  Average Rating
                </span>
                <span className="text-xl font-black flex items-center gap-1.5">
                  {app.ratingAvg}
                </span>
              </div>
              <div className="flex flex-col items-center md:items-start gap-1">
                <img src={reviewIcon} alt="" />
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  Total Reviews
                </span>
                <span className="text-xl font-black ">
                  {app.reviews >= 1000000
                    ? `${parseFloat(app.reviews / 1000000).toFixed(1)}m`
                    : `${parseFloat(app.reviews / 1000).toFixed(1)}k`}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button className="btn bg-[#00e676] hover:bg-[#00c853] border-none text-white font-bold rounded-xl px-6 h-11 min-h-0 text-xs normal-case shadow-sm">
                Install Now ({app.size} Mb)
              </button>
            </div>
          </div>
        </div>

        {/* 2. RECHARTS INTEGRATION ZONE: Vertical Analytics Layout matching your screenshot exactly */}
        <div className="py-12 border-b border-slate-100">
          <h2 className="text-sm font-bold tracking-wider uppercase text-slate-800 mb-6">
            Ratings
          </h2>

          {/* Constrained layout box container hosting the Recharts canvas pipeline component */}
          <div className="w-full h-64 font-sans text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical" // <-- CRITICAL: Rotates the chart box axes 90 degrees
                data={[...app.ratings].reverse()} // Reverse order ensures 5-star floats to the top row
                margin={{ top: 0, right: 50, left: -20, bottom: 0 }}
              >
                {/* Horizontal configuration setup tracking our star names keys array nodes */}
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94A3B8", fontSize: 12, fontWeight: 500 }}
                />

                {/* Vertical numerical count range scale limits setup (Hidden to match your screenshot mockup look) */}
                <XAxis type="number" hide />

                {/* The visualization bar node configuration layout attributes */}
                <Bar
                  dataKey="count"
                  fill="#F97316" // Default solid orange fill matching your image lines colors
                  radius={[0, 4, 4, 0]} // Rounds the far right edge of the bar blocks softly
                  barSize={12} // Tight card spacing format
                  label={{
                    position: "right",
                    fill: "#94A3B8",
                    fontSize: 12,
                    fontWeight: "bold",
                    dx: 10,
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 3. Description Copy Block */}
        <div className="py-12 space-y-6">
          <h2 className="text-sm font-bold tracking-wider uppercase text-slate-800">
            Description
          </h2>
          <div className="text-xs sm:text-sm text-slate-500 leading-relaxed space-y-5 font-normal tracking-wide">
            <p>{app.description}</p>
            <p>
              Featuring an advanced layout architecture, this tool helps users
              track progress milestones without cluttering active view space. By
              integrating atomic habits tracking matrices directly onto
              dashboard hooks, it turns daily goal management workflows into an
              interactive game.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
