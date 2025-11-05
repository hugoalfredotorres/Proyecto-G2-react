import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { Menu, User, X } from "lucide-react";
import toast from "react-hot-toast";
const Navbar = () => {
  const {
    navigate,
    user,
    setUser,
    isDoctor,
    isAdmin,
    isPaciente,
    setIsDoctor,
    setIsAdmin,
    setIsPaciente,
  } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menus = [
    { name: "Inicio", link: "/" },
    { name: "Doctores", link: "/doctors" },
    { name: "Servicios", link: "/services" },
  ];

  const handleLogout = () => {
    toast.success(`Hasta pronto ${user.name}`);
    setUser(null);
    setIsDoctor(false);
    setIsPaciente(false);
    setIsAdmin(false);
    localStorage.removeItem("usuario-logueado");
    navigate("/");
  };

  return (
    <div className="max-w-7xl mx-auto mt-8">
      {/* Desktop Navbar */}

      <div className="hidden md:flex items-center justify-between bg-white py-4 px-4 rounded-2xl border border-gray-200 shadow-sm">
        <Link to="/">
          <img src={assets.logo} alt="" className="w-52 font-bold" />
        </Link>

        <div className="flex items-center gap-4">
          {menus.map((menu, index) => (
            <Link
              className="font-medium text-lg text-[#231F69]"
              to={menu.link}
              key={index}
            >
              {menu.name}
            </Link>
          ))}
        </div>

        <div>
          {user ? (
            <div className="relative group">
              <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                <User className="w-6 h-6 text-gray-700" />
              </button>
              <div
                className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg 
                   opacity-0 scale-95 
                   group-hover:opacity-100 group-hover:scale-100 
                   transition-all duration-300 origin-top 
                   z-50 inline-block"
              >
                <ul className="flex flex-col p-2 text-gray-700">
                  {!isAdmin ? (
                    <li
                      onClick={() => navigate("/my-appointments")}
                      className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                      Mis Turnos
                    </li>
                  ) : (
                    <li
                      onClick={() => navigate("/admin-dashboard")}
                      className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                      Ver usuarios
                    </li>
                  )}
                  <li
                    onClick={handleLogout}
                    className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer text-red-500"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-secondary text-white cursor-pointer py-2 px-8 hover:bg-primary duration-300 transition-all rounded-lg"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}

      <div className="md:hidden bg-white py-4 px-4 rounded-2xl border border-gray-200">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <img src={assets.logo} alt="" className="w-40 font-bold" />
          </Link>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 " />
            ) : (
              <Menu className="w-6 h-6 " />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 flex flex-col gap-2">
            {menus.map((menu, index) => (
              <Link
                onClick={() => setIsMenuOpen(false)}
                key={index}
                to={menu.link}
                className="text-[#231F69] font-medium text-lg"
              >
                {menu.name}
              </Link>
            ))}
            {user ? (
              <div className="relative group">
                <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                  <User className="w-6 h-6 text-gray-700" />
                </button>
                <div
                  className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg 
                   opacity-0 scale-95 
                   group-hover:opacity-100 group-hover:scale-100 
                   transition-all duration-300 origin-top 
                   z-50 inline-block"
                >
                  <ul className="flex flex-col p-2 text-gray-700">
                    <li
                      onClick={() => navigate("/profile")}
                      className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                      Perfil
                    </li>

                    <li
                      onClick={() => navigate("/my-appointments")}
                      className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                      Mis Turnos
                    </li>
                    <li
                      onClick={handleLogout}
                      className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer text-red-500"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-secondary text-white cursor-pointer py-2 px-8 hover:bg-primary duration-300 transition-all rounded-lg"
              >
                Login
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
