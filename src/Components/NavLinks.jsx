import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "/about", text: "About" },
  { id: 3, url: "/product", text: "Product" },
  { id: 4, url: "/cart", text: "Cart" },
  { id: 5, url: "/checkout", text: "Checkout" },
  { id: 6, url: "/orders", text: "Orders" },
];

const NavLinks = ({ isDropdown = false }) => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink
              to={url}
              onClick={isDropdown ? () => setIsOpen(false) : ""}
              className={`capitalize px-5 py-4 rounded transition-all hover:bg-red-700 flex
                
                ${
                  !isDropdown && text === "Cart"
                    ? "bg-blue-600 text-white font-bold  hover:bg-gray-700"
                    : "hover:text-blue-500"
                }`}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
