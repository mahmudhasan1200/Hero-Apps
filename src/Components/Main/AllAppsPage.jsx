import { useState } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";

export default function AllAppsPage() {
  // Loading Apps data
  const allApps = useRouteLoaderData("root");

  //   Filtering Apps data
  const [searchQuery, setSearchQuery] = useState("");
  const filteredApps = allApps.filter((app) =>
    app.title?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="w-full bg-[#fdfdfd] min-h-screen flex flex-col justify-between font-sans">
      {/* 1. Main Page Content Section */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-12">
        {/* Top Header Banner Typography Block */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Our All Applications
          </h1>
          <p className="text-sm text-slate-400 mt-2 font-medium">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Meta Utility Row Bar (Count Display + Search Box Input) */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-slate-100 pb-5 mb-8 text-sm">
          {/* Dynamic App Counter Status */}
          <div className="font-bold text-slate-800 text-base">
            ({filteredApps.length}) Apps Found
          </div>

          {/* Interactive Search Input Box */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="search Apps"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-slate-700 bg-white placeholder-slate-300 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-xs shadow-sm transition-all"
            />
            {/* Search Magnifying Glass SVG Icon Icon */}
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-3.5 h-3.5 text-slate-300 absolute left-3 top-1/2 -translate-y-1/2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z"
              />
            </svg>
          </div>
        </div>

        {/* Responsive Catalog Layout Grid (4 columns on wide viewports matching your image) */}
        {filteredApps.length === 0 ? (
          <div className="text-center py-20 text-slate-400 border border-dashed border-slate-200 rounded-2xl">
            No matching applications found. Try adjustments to your text
            keyword.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filteredApps.map((app) => (
              <Link to={`/apps/app/${app.id}`}>
                <div
                  key={app.id}
                  className="card bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Outer thumbnail frame aspect box container matching the gray preview tiles */}
                    <figure className="w-full aspect-square bg-[#e5e7eb] rounded-lg overflow-hidden p-4 mb-4">
                      <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-contain"
                      />
                    </figure>

                    {/* Card Application Name String */}
                    <h3 className="text-xs font-bold text-slate-800 tracking-wide line-clamp-1 mb-3">
                      {app.title}
                    </h3>
                  </div>

                  {/* Footer Metrics Row Badges */}
                  <div className="flex justify-between items-center pt-2 border-t border-slate-50 mt-auto">
                    {/* Left Side File Size Tag Badge */}
                    <div className="badge bg-emerald-50 text-emerald-600 border-none rounded font-bold px-2 py-2.5 text-[10px] gap-1">
                      <svg
                        xmlns="http://w3.org"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-2.5 h-2.5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {app.size}m
                    </div>

                    {/* Right Side Review Score Star Tag Badge */}
                    <div className="badge bg-orange-50 text-orange-500 border-none rounded font-bold px-2 py-2.5 text-[10px] gap-1">
                      <svg
                        xmlns="http://w3.org"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-2.5 h-2.5 text-orange-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {app.ratingAvg}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
