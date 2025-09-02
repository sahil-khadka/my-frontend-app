import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import { BsCart4 } from "react-icons/bs";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    <nav className="bg-black">
      <div className=" align-element  text-white grid grid-cols-3 items-center">
        <div className=" justify-self-start ">
          <NavLink
            to="/"
            className="bg-gray-400 flex items-center justify-center font-bold  w-18  lg:flex text-3xl mt-3 mb-3 rounded-lg px-5 py-3 hover:bg-green-300 transition-all "
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
                className="absolute left-3 mt-2 p-5 bg-gray-400 rounded-lg shadow-lg"
              >
                <li className=" rounded-2xl ">
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
        <div className="justify-self-end">
          <NavLink to="/cart" className="">
            <div className="relative inline-block">
              <BsCart4 className="h-10 w-9 bg-black p-1 rounded border-1 " />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
