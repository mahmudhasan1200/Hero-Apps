import appErrorPageImg from "../assets/App-Error.png";
import { useNavigate } from "react-router-dom";

export default function AppNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 max-w-xl mx-auto text-center font-sans">
      {/* Custom Vector SVG: Replicates the orange screen computer and grumpy cat logo block layout */}
      <div className="w-full max-w-sm mb-8 select-none pointer-events-none drop-shadow-sm">
        <img src={appErrorPageImg} alt="" />
      </div>

      {/* Main Action Headers Typography blocks matching your app image */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340] tracking-tight uppercase mb-3">
        OPPS!! APP NOT FOUND
      </h1>

      {/* Supporting context info instructions text lines description */}
      <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed max-w-md mb-8">
        The App you are requesting is not found on our system. please try
        another apps
      </p>

      {/* Navigation Return click trigger handler button */}
      <button
        onClick={() => navigate(-1)}
        className="btn bg-[#a35cfc] hover:bg-[#8e44eb] border-none text-white font-bold rounded-lg px-8 h-10 min-h-0 text-xs normal-case shadow-sm transition-all"
      >
        Go Back!
      </button>
    </div>
  );
}
