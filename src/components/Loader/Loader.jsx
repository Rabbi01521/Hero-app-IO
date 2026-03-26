import "./Loader.css";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#632EE3] to-[#9F62F2] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-white/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-white/20 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Glass Card */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-10 py-8 flex flex-col items-center shadow-2xl">
        {/* Logo */}
        <img
          src="https://i.ibb.co.com/R4yp62tZ/logo.png"
          alt="logo"
          className="w-20 mb-4 animate-spin-slow spinSlow drop-shadow-lg"
        />

        {/* Text */}
        <h2 className="text-white text-2xl font-bold tracking-wide">
          Loading App...
        </h2>

        {/* Dots Animation */}
        <div className="flex gap-1 mt-3">
          <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
