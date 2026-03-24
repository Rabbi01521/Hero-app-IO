import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";

import bannerImg from "../../assets/hero.png";

import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center flex flex-wrap">
        <div className="">
          <h1 className="lg:text-6xl md:text-5xl text-3xl font-black lg:w-xl md:w-lg mx-auto mt-15">
            We Build{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Production
            </span>{" "}
            <span>Apps</span>
          </h1>
          <p className="italic lg:max-w-9/12 md:max-w-9/12 mx-auto py-6">
            At <span className="font-bold">HERO.IO</span>, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="">
            <Link
              to="https://play.google.com/store/games"
              className="btn btn-md sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mr-4"
            >
              <BiLogoPlayStore className="text-3xl" />
              Google Play
            </Link>
            <Link
              to="https://www.apple.com/app-store/"
              className="btn btn-md sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
            >
              <FaAppStore className="text-3xl" />
              App Store
            </Link>
          </div>
        </div>
        <div className="pt-10 lg:-mb-4 md:-mb-4 -mb-4">
            <img className="" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
