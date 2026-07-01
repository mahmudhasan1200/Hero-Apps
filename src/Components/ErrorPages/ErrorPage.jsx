import { useNavigate } from "react-router-dom";
import ErrorPageImg from "../assets/error-404.png";

export default function ErrorPage() {
  // 1. Initialize the browser history navigation hook
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#fdfdfd] min-h-[calc(100vh-5rem)] flex flex-col justify-between font-sans">
      {/* Centered Graphic and Alert Typography Body Container */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 max-w-xl mx-auto text-center">
        {/* Vector SVG Mockup Frame: Mimics the custom purple laptop 404 art asset inside your image */}
        <div className="w-full max-w-sm mb-10 text-[#a35cfc] drop-shadow-sm select-none pointer-events-none">
          <img src={ErrorPageImg} alt="" />
        </div>

        {/* Primary Alert Typography Headers strings matching your design panel */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0c2340] tracking-tight leading-none mb-3">
          Oops, page not found!
        </h1>

        {/* Secondary description status indicator row line */}
        <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-sm mb-8">
          The page you are looking for is not available.
        </p>

        {/* 2. Interactive Return Mechanism Action Button Trigger */}
        <button
          onClick={() => navigate(-1)}
          className="btn bg-[#a35cfc] hover:bg-[#8e44eb] border-none text-white font-bold rounded-lg px-8 h-10 min-h-0 text-xs normal-case shadow-sm transition-all"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
}
