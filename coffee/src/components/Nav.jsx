import logo from "../assets/coffee cups.png";
import { useState } from "react";
const Nav = ({ cartItemCount, setLoginOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-neutral-100 px-4 py-2 flex items-center justify-between fixed w-full top-0 left-0 z-[1000] shadow-md">
      <div className="flex items-center space-x-5 font-[Pacifico]">
        <img src={logo} alt="Coffee Logo" className="w-12" />
        <h1 className="text-xl max-md:text-lg text-[#371409] ">
          <a href="#">Ray’s Coffee </a>
        </h1>
      </div>

      <ul className="flex space-x-4 max-md:hidden">
        <li className="hover:text-[#371409]  transition duration-300 ">
          <a href="#">
            Product <i class="fa-solid fa-angle-down"></i>
          </a>
        </li>
        <li className="hover:text-[#371409]  transition duration-300 ">
          <a href="#">Special offers</a>
        </li>

        <li className="hover:text-[#371409]  transition duration-300 ">
          <a href="#">Packing</a>
        </li>
        <li className="hover:text-[#371409]  transition duration-300 ">
          <a href="#">Delivery</a>
        </li>

        <li className="hover:text-[#371409]  transition duration-300 ">
          <a href="#">About</a>
        </li>
      </ul>

      {/* Cart Icon */}
      <div className="space-x-8 flex items-center ">
        <div>
          <i className="fa-solid fa-cart-shopping text-xl max-md:text-lg cursor-pointer text-[#371409]"></i>
          <span className="bg-[#371409] text-white text-xs rounded-full px-1.5 py-0.5 ml-[-10px] mt-[-10px] absolute">
            {cartItemCount}
          </span>
        </div>

        <button
          onClick={() => setLoginOpen(true)}
          className="bg-[#371409] px-4 py-3 rounded-lg text-white cursor-pointer hover:opacity-[0.9] transition duration-300 max-md:hidden"
        >
          Log in
        </button>
      </div>

      {/* ham-btn */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`text-2xl cursor-pointer md:hidden ${
          isMenuOpen ? "hidden" : "block"
        } `}
      >
        &#9776;
      </button>
      {isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-4xl cursor-pointer md:hidden"
        >
          &times;
        </button>
      )}

      <div
        className={`fixed w-full top-16 left-0 bg-neutral-100  transition-all duration-400 ease-in-out md:hidden z-[10]   ${
          isMenuOpen ? "translate-y-0" : "-translate-y-120"
        } `}
      >
        <ul className="flex flex-col space-y-4 md:hidden w-full  px-4 py-4 shadow-lg text-center">
          <li className="hover:text-[#371409]  transition duration-300  hover:bg-neutral-200 py-2">
            <a href="#">Product</a>
          </li>

          <li className="hover:text-[#371409]  transition duration-100 hover:bg-neutral-200 py-2">
            <a href="#">Special offers</a>
          </li>
          <li className="hover:text-[#371409]  transition duration-100 hover:bg-neutral-200 py-2">
            <a href="#">Packing</a>
          </li>
          <li className="hover:text-[#371409]  transition duration-100 hover:bg-neutral-200 py-2">
            <a href="#">Delivery</a>
          </li>
          <li className="hover:text-[#371409]  transition duration-100 hover:bg-neutral-200 py-2">
            <a href="#">About</a>
          </li>
          <li>
            <button
              onClick={() => setLoginOpen(true)}
              className="bg-[#371409] w-full px-4 py-3 rounded-lg text-white cursor-pointer hover:opacity-[0.9] transition duration-300 text-sm"
            >
              Log in
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
