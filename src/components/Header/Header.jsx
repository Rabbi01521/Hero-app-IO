import { Link, NavLink } from "react-router";
import logo from "/logo.png";

const navStyle = ({ isActive }) =>
  isActive
    ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent border-b-2 border-transparent rounded-b-none border-b-[2px] border-b-[#632EE3] font-bold text-"
    : "text-gray-500 font-bold text-";

const links = (
  <>
    <li>
      <NavLink to="/" className={navStyle}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/apps"
        className={navStyle}
      >
        Apps
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/installations"
        className={navStyle}
      >
        Installation
      </NavLink>
    </li>
  </>
);

const Header = () => {
//   const [isActive, setIsActive] = useState(false);
  return (
    <div className="bg-base-100 shadow-sm ">
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img className="max-w-8 " src={logo} alt="" /> HERO.IO 
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none">
            Contribution
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
