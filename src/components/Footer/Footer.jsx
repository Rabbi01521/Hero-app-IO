import { FaEnvelope, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import footerImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1200px] mx-auto text-gray-200 border-b-2 border-gray-300 py-8 px-5">
        <div className="lg:grid lg:grid-cols-2">
          <div className="">
            <h1 className="mb-3 text-xl lg:text-xl flex items-center">
              <img className="w-12 mr-3" src={footerImg} alt="" /> <span className="font-black">Hero---IO</span>
            </h1>
            <p className="text-xs md:pr-0 lg:pr-50">
              A modern app marketplace designed to help users explore, install, and manage applications effortlessly. Built with a focus on performance, simplicity, and a seamless user experience across all devices.
            </p>
          </div>

          <div className="lg:flex lg:justify-between md:grid md:grid-cols-2 md:gap-5">
            <div className="lg:px-5 mt-5 lg:mt-0">
              <h2 className="mb-3 text-xl font-bold lg:text-xl">Company</h2>
              <ul>
                <li>
                  <a className="text-xs" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-xs " href="#">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a className="text-xs " href="#">
                    Contact Saled
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:px-0 mt-5 lg:mt-0">
              <h2 className="mb-3 text-xl font-bold lg:text-xl">Services</h2>
              <ul>
                <li>
                  <a className="text-xs " href="#">
                    Products & Services
                  </a>
                </li>
                <li>
                  <a className="text-xs " href="#">
                    Customer Stories
                  </a>
                </li>
                <li>
                  <a className="text-xs " href="#">
                    Download Apps
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:px-0 mt-5 lg:mt-0">
              <h2 className="mb-3 text-xl font-bold lg:text-xl">Information</h2>
              <ul>
                <li>
                  <a className="text-xs" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-xs" href="#">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="text-xs" href="#">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:px-0 mt-5 lg:mt-0">
              <h2 className="mb-3 text-xl font-bold lg:text-xl">
                Social Links
              </h2>
              <ul className="flex lg:justify-around lg:items-center gap-4">
                <li>
                  <a className="text-lg items-center" href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="#">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="#">
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a className="text-lg" href="#">
                    <FaEnvelope />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-5">
        <span className="text-gray-400 text-xs font-light lg:text-sm md:text-sm">
          © 2025 Hero-IO. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
