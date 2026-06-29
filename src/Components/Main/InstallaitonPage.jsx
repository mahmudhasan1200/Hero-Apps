import { useState, useContext } from "react";
import { AppContext } from "../GlobalContext/AppContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function InstallationPage() {
  // Pulling the Data from the State
  const { unInstallApp, installedApps } = useContext(AppContext);

  // Tracking local sorting datas
  const [sortBy, setSortBy] = useState("");

  // Local handler to manage removals cleanly with user alerts feedback
  const handleUninstall = (id, title) => {
    unInstallApp(id);
    toast.warn(`${title} has been uninstalled successfully.`, {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
    });
  };

  // Sorting copies based on app file size metrics
  const getDisplayedApps = () => {
    const appsCopy = [...installedApps];
    if (sortBy === "size-desc") {
      // Sort descending: largest megabyte count floats to top row
      return appsCopy.sort((a, b) => b.size - a.size);
    }
    return appsCopy; // Fallback to addition history timing order
  };

  const displayedApps = getDisplayedApps();

  return (
    <div className="w-full bg-[#fdfdfd] min-h-screen flex flex-col justify-between font-sans">
      {/* Toast alert system framework element container */}
      <ToastContainer />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 md:px-8 py-12">
        {/* Meta Utility Row Bar Layout (Counters + Sort Dropdown) */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-slate-100 pb-5 mb-8 text-sm">
          {/* Active Counters Indicator */}
          <div className="font-bold text-slate-800 text-base">
            ({installedApps.length}) Installed Apps Found
          </div>

          {/* daisyUI Sort Dropdown Component Configuration */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg border-none px-4 shadow-sm min-h-0 h-9 normal-case text-xs gap-1"
            >
              {sortBy === "size-desc" ? "Sorted by: Size" : "Sort Options"}
              <svg
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-1.5 bg-white border border-slate-200 rounded-lg w-44 shadow-md z-50 mt-1 text-center text-slate-600 font-medium text-xs gap-0.5"
            >
              <li>
                <button
                  onClick={() => setSortBy("")}
                  className={`py-2 justify-center rounded-md ${sortBy === "" ? "bg-slate-100 font-bold text-slate-900" : ""}`}
                >
                  Default Order
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSortBy("size-desc")}
                  className={`py-2 justify-center rounded-md ${sortBy === "size-desc" ? "bg-slate-100 font-bold text-slate-900" : ""}`}
                >
                  Size (High to Low)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Horizontal List Container Element Layout */}
        {displayedApps.length === 0 ? (
          <div className="text-center py-20 text-slate-400 border border-dashed border-slate-200 rounded-2xl flex flex-col items-center gap-4">
            <span className="font-medium text-sm">
              Your device storage is empty.
            </span>
            <Link
              to="/apps"
              className="btn btn-sm bg-purple-600 text-white border-none rounded-lg font-semibold px-5 shadow-sm normal-case"
            >
              Browse Apps Marketplace
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {displayedApps.map((app) => (
              <div
                key={app.id}
                className="flex flex-col sm:flex-row items-center justify-between gap-6 p-5 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Left Block: Image Vector Logo + Name Parameters */}
                <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left w-full sm:w-auto">
                  {/* Small Square Vector Icon Frame container */}
                  <figure className="w-16 h-16 bg-slate-50 border border-slate-100 p-2 rounded-xl flex items-center justify-center shrink-0">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-contain"
                    />
                  </figure>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm tracking-wide leading-snug line-clamp-1">
                      {app.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                      File Size Indicator:{" "}
                      <span className="text-emerald-600 font-bold">
                        {app.size} Mb
                      </span>
                    </p>
                  </div>
                </div>

                {/* Right Block: Interactive Multi Action Buttons Triggers */}
                <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-center sm:justify-end">
                  {/* View Profile Detail Path Route Redirection link */}
                  <Link
                    to={`/apps/app/${app.id}`}
                    className="btn btn-outline border-slate-200 hover:bg-slate-50 hover:text-slate-900 text-slate-600 font-semibold rounded-lg px-4 h-9 min-h-0 text-xs normal-case bg-transparent"
                  >
                    View Details
                  </Link>
                  {/* Dangerous uninstallation filter handler trigger button */}
                  <button
                    onClick={() => handleUninstall(app.id, app.title)}
                    className="btn bg-red-500 hover:bg-red-600 border-none text-white font-bold rounded-lg px-4 h-9 min-h-0 text-xs normal-case shadow-sm"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
