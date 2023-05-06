import { Link, NavLink } from "react-router-dom";
import { CgUser } from "react-icons/cg";
import { FaSearch, FaHeart } from "react-icons/fa";
import Search from "./Search";

function NavBar() {
  const hover = "hover:text-amber-300 transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);

  // new

  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img
                src="	https://etnomedia.kg/assets/images/logo.svg"
                alt="logo"
              />
            </Link>
          </div>
          <Search />
          <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-17 justify-between lg:flex xl:justify-end items-center">
            <NavLink to="/movies" className={Hover}>
              Фильмы
            </NavLink>
            <NavLink to="/about-us" className={Hover}>
              О нас
            </NavLink>
            <NavLink to="/contact-us" className={Hover}>
              Связаться с нами
            </NavLink>
            <NavLink to="/login" className={Hover}>
              <CgUser className="w-8 h-8" />
            </NavLink>
            <NavLink to="/favorites" className={`${Hover} relative`}>
              <FaHeart className="w-6 h-6" />
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-2 -right-1">
                2
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
