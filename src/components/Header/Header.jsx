
// export default Header;
{/* <div className="flex items-center space-x-4">
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
        </div> */}


        

        import React from "react";
        import { LogoutBtn } from "../index";
        import { Link, useLocation } from "react-router-dom";
        import { useSelector } from "react-redux";
        import { useNavigate } from "react-router-dom";
        
        function Header() {
          const authStatus = useSelector((state) => state.auth.status);
          const navigate = useNavigate();
          const location = useLocation();
        
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
            <header className="bg-black text-white font-fontFooter1 flex justify-center h-20">
              <div className="container mx-auto p-4 flex justify-between items-center w-3/4">
                {/* Logo */}
                <Link to={"/"} className="text-3xl font-bold font-fontFooter">
                  Feane
                </Link>
        
                {/* Navigation */}
                <nav className="flex space-x-8 ">
                  {navItems.map((item) =>
                    item.active ? (
                      <div className="flex justify-center" key={item.name}>
                        <button
                          onClick={() => navigate(item.slug)}
                          className={`hover:text-yellow-500 list-none font-fontFooter1 ${
                            location.pathname === item.slug ? "text-yellow-500" : ""
                          }`}
                        >
                          {item.name}
                        </button>
                      </div>
                    ) : null
                  )}
                  {authStatus && (
                    <div className="flex">
                      <LogoutBtn />
                    </div>
                  )}
                </nav>
              </div>
            </header>
          );
        }
        
        export default Header;
        