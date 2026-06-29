import { NavLink } from "react-router";
import logoPng from "../assets/logo.png";
import { FaRegHeart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  // Navigation Links array helper so we don't repeat the NavLink blocks twice
  const links = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installedApps" },
  ];

  return (
    <div className="drawer font-sans">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      {/* 1. Main Page Content Section */}
      <div className="drawer-content">
        {/* Navbar */}
        <div className="w-full navbar flex justify-between bg-base-100 border-b border-base-200 h-20 px-4 md:px-8 mx-auto">
          {/* Mobile Hamburguer Trigger (Hidden on Desktop) */}
          <div className="flex-none lg:hidden">
            <label
              htmlFor="nav-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <RxHamburgerMenu className="text-2xl" />
            </label>
          </div>

          {/* Logo Brand Frame */}
          <button className="flex flex-row px-2 mx-2 gap-2 hover:cursor-pointer">
            <div className="w-8 h-8">
              <img src={logoPng} alt={logoPng} />
            </div>
            <span className="text-xl font-bold tracking-wide text-transparent bg-clip-text bg-[linear-gradient(125deg,#632ee3_0%,#9f62f2_100%)]">
              Hero.io
            </span>
          </button>

          {/* Desktop Inline Links (Hidden on Mobile) */}
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal px-1 gap-4">
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm font-semibold transition-colors rounded-lg px-4 py-2 ${
                        isActive
                          ? "bg-purple-50 text-purple-600 font-bold"
                          : "text-gray-500 hover:text-gray-900"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Action Trigger (Visible on all viewports) */}
          <div className="inline-flex items-center ml-2">
            <button className="btn bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl border-none shadow-sm flex items-center gap-2 normal-case btn-sm h-11 px-4 md:px-5">
              <FaRegHeart />
              <span className="inline">Contribute</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Mobile Drawer Sidebar Overlay */}
      <div className="drawer-side z-50">
        <label
          htmlFor="nav-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content gap-2">
          {/* Header Title inside Sidebar */}
          <div className="text-xl font-bold tracking-wide text-gray-900 px-4 py-3 border-b border-gray-100 mb-2">
            Hero.io Menu
          </div>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-semibold ${isActive ? "bg-purple-600 text-white font-bold" : ""}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
