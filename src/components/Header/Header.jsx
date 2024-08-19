import React, { useEffect, useState } from "react";
import { LogoutBtn } from "../index";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import appwriteService from ".../"
// import appwriteService from "../../apppwrite/config";


function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation();
  // const [post, setPost] = useState(null);
  // const { slug } = useParams();


  const userData = useSelector((state) => state.auth.userData);

  const isAuthor =userData ? userData.$id : false;

  // useEffect(() => {
  //   if (slug) {
  //     appwriteService.getPost(slug).then((post) => {
  //       if (post) setPost(post);
  //       else navigate("/");
  //     });
  //   } else navigate("/");
  // }, [slug, navigate]);

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
      active: authStatus && isAuthor,
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
