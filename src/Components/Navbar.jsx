import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import { BsCart4, BsMoonFill, BsSunFill } from "react-icons/bs";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [theme, setTheme] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-gray-200 relative">
      <div className=" align-element border-3 rounded-2xl text-black grid grid-cols-3 items-center">
        <div className=" justify-self-start ">
          <NavLink
            to="/"
            className="bg-gray-100 flex items-center justify-center font-bold  w-18  lg:flex text-3xl mt-3 mb-3 rounded-lg px-5 py-3 hover:bg-green-300 transition-all "
          >
            BK
          </NavLink>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            <FaBarsStaggered className="h-9 w-9 mt-2 mb-2" />
          </button>

          {/* Dropdown menu */}

          {isOpen && (
            <div className="bg-gray-200">
              <ul
                ref={dropdownRef}
                className="absolute left-3 mt-2 p-5 bg-gray-400 rounded-lg shadow-lg "
              >
                <li className=" rounded-2xl hover:bg-gray-300">
                  <NavLinks isDropdown={true} />
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className=" justify-self-center hidden lg:flex">
          <ul className=" flex gap-15 font-bold ">
            <NavLinks isDropdown={false} />
          </ul>
        </div>
      </div>
      <div className=" justify-self-end absolute top-5 right-19 dark:bg-gray-800 transition-colors flex gap-4">
        <div className="ml-2 items-center flex">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={() => {
                setTheme(!theme);
              }}
            />
            <BsSunFill className="swap-on h-7 w-7" />
            <BsMoonFill className="swap-off h-7 w-7" />
          </label>
        </div>
        <NavLink to="/cart" className="">
          <div className="relative inline-block">
            <BsCart4 className="h-10 w-9  p-1 rounded border-1 " />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
              8
            </span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
