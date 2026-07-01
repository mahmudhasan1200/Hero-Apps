const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-[#051329] text-slate-400 text-xs py-8 px-4 md:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Footer Branding Block */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-[10px]">
              H
            </div>
            <span className="text-sm font-bold tracking-wide text-white uppercase">
              Hero.io
            </span>
          </div>

          {/* Central Copyright Note */}
          <div className="text-slate-500 font-medium text-[11px] text-center md:text-left">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </div>

          {/* Right Social Action Node Links */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="text-white font-semibold text-[11px] tracking-wide">
              Social Links
            </span>
            <div className="flex gap-3 text-slate-400">
              {/* Simple circle link layout tags simulating those inside your graphic panel */}
              <a
                href="#twitter"
                className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"
              >
                t
              </a>
              <a
                href="#github"
                className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"
              >
                g
              </a>
              <a
                href="#facebook"
                className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"
              >
                f
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
