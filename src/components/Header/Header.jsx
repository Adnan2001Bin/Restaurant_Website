import React from "react";
import { LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Menu",
      slug: "/all-menu",
      active: authStatus,
    },
    {
      name: "Add Menu",
      slug: "/add-menu",
      active: authStatus,
    },
  ];

  return (
    // </header>

    <header className="bg-black text-white font-fontFooter1">
      <div className="container mx-auto p-4 flex justify-between items-center w-3/4">
        {/* Logo */}
        <Link to={"/"} className="text-3xl font-bold font-fontFooter">
          Feane
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="hover:text-yellow-500 list-none font-fontFooter1"
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-yellow-400">
              <i className="fas fa-user"></i>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fas fa-search"></i>
            </a>
          </div>

          <a
            href="#"
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
          >
            Order Online
          </a>
        </div>
      </div>

      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src="public\assets\Header\hero-bg.jpg"
          alt="Burger and Fries"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-fontFooter">
            Fast Food Restaurant
          </h1>
          <p className="text-base md:text-base text-gray-300 mb-6">
            "Welcome to Savory Haven – Where Culinary Art Meets Comfort.
            Experience the finest blend of tradition and innovation in every
            bite. Join us for a journey of flavors, crafted with passion and
            served with care."
          </p>
          <a
            href="#"
            className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-500"
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
