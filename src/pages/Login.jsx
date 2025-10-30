import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Lock, MailIcon, User2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { navigate, setUser, loading, setIsDoctor, setIsPaciente, setIsAdmin } =
    useContext(AppContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formData;
    const usersLocal = localStorage.getItem("users");
    const users = usersLocal ? JSON.parse(usersLocal) : [];
    const userFind = users.find((user) => {
      return user.email.toLowerCase() === form.email.toLowerCase();
    });
    if (userFind) {
      if (userFind.password == form.password) {
        if (!userFind.accepted) {
          toast.error("Su registro aún no fué aprobado.");
          return;
        }
        toast.success(`Bienvenido ${userFind.name}`);
        setUser(userFind);
        if (userFind.role == "admin") {
          setIsAdmin(true);
          navigate("/admin-dashboard");
        } else if (userFind.role == "doctor") {
          setIsDoctor(true);
          navigate("/doctor-dashboard");
        } else {
          setIsPaciente(true);
          navigate("/");
        }
      } else {
        toast.error("Contraseña incorrecta.");
      }
    } else {
      toast.error("El usuario ingresado no existe.");
    }
  };

  return (
    <div className="bg-[#EBEBFE] min-h-screen py-32 mt-3">
      <form
        onSubmit={handleSubmit}
        className="max-w-96 w-full mx-auto  text-center border border-gray-300/60 rounded-2xl px-8 bg-primary"
      >
        <h1 className="text-white text-3xl mt-10 font-medium">Login</h1>
        <p className="text-white text-sm mt-2">Inicie sesión para continuar</p>
        <div className="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <MailIcon />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent text-gray-800 placeholder-gray-800 outline-none text-sm w-full h-full"
            placeholder="Email"
            required
          />
        </div>

        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Lock />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-transparent text-gray-800 placeholder-gray-800 outline-none text-sm w-full h-full"
            placeholder="Password"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-white bg-secondary  cursor-pointer hover:opacity-90 transition-opacity"
        >
          {loading ? "please wait..." : "Login"}
        </button>
        <p className="py-4 text-white">
          ¿No tienes una cuenta?
          <Link to="/signup">
            <span className="text-secondary"> Registrarse 🔔</span>
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
