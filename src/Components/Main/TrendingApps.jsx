import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";

export default function TrendingApps() {
  //   Data from the Router
  const apps = useRouteLoaderData("root");
  const homepageApps = apps.slice(0, 8);

  // Navigate to all apps
  const nagivate = useNavigate();

  return (
    <section className="w-full bg-slate-50/50 py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Centered Component Headers */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Trending Apps
          </h2>
          <p className="text-sm text-slate-400 mt-2 font-medium">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* 
          Responsive Adaptive App Grid Container: 
          Scales fluidly from 1 column up to exactly 4 columns on large screens 
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homepageApps.map((app) => (
            <Link to={`/apps/app/${app.id}`}>
              <div
                key={app.id}
                className="card bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
              >
                {/* Top Section: Graphic Banner Image Block wrapper */}
                <div>
                  <figure className="w-full aspect-square bg-slate-200 rounded-lg overflow-hidden p-4 mb-4">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-contain"
                    />
                  </figure>

                  {/* Card Main App Title Line */}
                  <h3 className="text-sm font-bold text-slate-800 tracking-wide line-clamp-1 mb-3">
                    {app.title}
                  </h3>
                </div>

                {/* Bottom Section: Footer Metadata Badges Row matching your image */}
                <div className="flex justify-between items-center pt-2 border-t border-slate-50 mt-auto">
                  {/* Left Side Tag Badge: Size / Metrics representation */}
                  <div className="badge bg-emerald-50 text-emerald-600 border-none rounded font-bold px-2 py-2.5 text-[11px] gap-1">
                    {/* Small upward pointer triangle icon matching your mockup symbol */}
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

                  {/* Right Side Tag Badge: Star Ratings metrics count representation */}
                  <div className="badge bg-orange-50 text-orange-500 border-none rounded font-bold px-2 py-2.5 text-[11px] gap-1">
                    {/* Rating Solid Star Icon */}
                    <svg
                      xmlns="http://w3.org"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 text-orange-400"
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

        {/* Center Button Wrapper: "Show All" action trigger footer */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => nagivate("/apps")}
            className="btn bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg px-8 h-11 border-none shadow-sm min-h-0 normal-case text-sm"
          >
            Show All
          </button>
        </div>
      </div>
    </section>
  );
}
