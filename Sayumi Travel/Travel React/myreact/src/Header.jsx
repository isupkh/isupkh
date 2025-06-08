import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/logo.png';




function Header() {
  return (
    <>
      <header className="absolute top-0">
        <div className="bg-white w-full h-[100px] fixed z-10 border-b-2">
          <div className="container mx-auto w-[1400px] flex justify-between items-center p-4">

{/* logo */}
            <NavLink to="/">
            <div className="w-[80px] h-[80px]">
                <img className="w-full h-full object-contain" src={logo} alt="Logo" />
              </div>
            </NavLink>

{/* nav bar */}
            <nav>
              <ul className="flex items-center justify-between gap-7">

                <li>
                  <NavLink to="/" className={({ isActive }) => isActive
                        ? "font-semibold text-red-700 border-b-4 border-red-700 cursor-pointer duration-300"
                        : "text-gray-600 font-semibold cursor-pointer hover:text-blue-700 duration-300"
                    }>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/destination"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-red-700 border-b-4 border-blue-700 cursor-pointer duration-300"
                        : "text-gray-600 font-semibold cursor-pointer hover:text-blue-700 duration-300"
                    }
                  >
                    Destinations
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/packages"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-red-700 border-b-4 border-blue-700 cursor-pointer duration-300"
                        : "text-gray-600 font-semibold cursor-pointer hover:text-blue-700 duration-300"
                    }
                  >
                    Packages
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-red-700 border-b-4 border-blue-700 cursor-pointer duration-300"
                        : "text-gray-600 font-semibold cursor-pointer hover:text-blue-700 duration-300"
                    }
                  >
                    About Us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-red-700 border-b-4 border-blue-700 cursor-pointer duration-300"
                        : "text-gray-600 font-semibold cursor-pointer hover:text-blue-700 duration-300"
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/calendar"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-red-700 border-b-4 border-blue-700 cursor-pointer duration-300"
                        : "text-gray-600 font-semibold cursor-pointer hover:text-blue-700 duration-300"
                    }
                  >
                    Calendar
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/ticket"
                    className={({ isActive }) =>
                      isActive
                        ? "font-semibold text-red-700 border-b-4 border-blue-700 cursor-pointer duration-300"
                        : "text-gray-600 font-semibold cursor-pointer hover:text-blue-700 duration-300"
                    }
                  >
                    Ticket Booking
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* icon dropdown */}
            <div className="relative group">
              <i className="bi bi-person-circle text-orange-700 text-xl cursor-pointer " />
              {/* dropdown list */}
              <div className="absolute right-0 mt-2 w-28 border bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition duration-200 z-10">
                <a target="_blank" href="login.html" className="block px-3 py-2">
                  <div className="flex gap-3 hover:text-blue-700 font-semibold text-sm">
                    <i className="bi bi-box-arrow-in-right" />
                    <p>Login</p>
                  </div>
                </a>
                <a href="#" className="block px-3 py-2 ">
                  <div className="flex gap-3 hover:text-blue-700 font-semibold text-sm">
                    <i className="bi bi-person-plus-fill" />
                    <p>Signup</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;