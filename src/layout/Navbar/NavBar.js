import { Link, NavLink } from "react-router-dom";
import { CgUser } from "react-icons/cg";
import { FaSearch, FaHeart } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function NavBar() {
  const hover = "hover:text-amber-300 transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);

  const [users, setusers] = useState([]);
  // filter users
  const [filtered, setfiltered] = useState([]);
  const [search, setsearch] = useState("");

  const searchRef = useRef();

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setusers(response.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setfiltered(
      users.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

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
          <div className="col-span-3">
            <form className="w-full text-sm bg-white rounded flex-btn gap-4">
              <button
                type="submit"
                className="bg-amber-400 w-12 flex-colo h-8 rounded text-white"
              >
                <FaSearch />
              </button>
              <input
                type="text"
                placeholder="Поиск..."
                className="font-medium rounded-2xl placeholder:text-black text-sm w-11/12 h-8 bg-white border-none px-2 text-black"
                onChange={(e) => setsearch(e.target.value)}
                ref={searchRef}
              />
            </form>

            {search.length > 0 && (
              <div className="dropdown">
                {filtered.length > 0 ? (
                  filtered.map((item, index) => {
                    return (
                      <div
                        className="card"
                        key={index}
                        onClick={(e) => {
                          searchRef.current.value = item.name;
                          setsearch("");
                        }}
                      >
                        <p>{item.name}</p>
                      </div>
                    );
                  })
                ) : (
                  <p>no match</p>
                )}
              </div>
            )}
          </div>

          {/*  */}
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
                3
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
