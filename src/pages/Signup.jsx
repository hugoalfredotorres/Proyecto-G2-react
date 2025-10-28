import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Lock, MailIcon, PhoneIcon, User2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const {  loading } =
    useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    roll: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Signup Successful");
    console.log(formData);
  };

  return (
    <div className="bg-[#EBEBFE] min-h-screen py-32 mt-3">
      <form
        onSubmit={handleSubmit}
        className="max-w-96 w-full mx-auto  text-center border border-gray-300/60 rounded-2xl px-8 bg-primary"
      >
        <h1 className="text-white text-3xl mt-10 font-medium">Registrarse</h1>
        <p className="text-white text-sm mt-2">Por favor regístrate para continuar</p>
        <div className="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <User2Icon />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-transparent text-gray-800 placeholder-gray-800 outline-none text-sm w-full h-full"
            placeholder="Name"
            required
          />
        </div>
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <PhoneIcon />
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-transparent text-gray-800 placeholder-gray-800 outline-none text-sm w-full h-full"
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
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
          <User2Icon />
          <select
            name="roll"
            value={formData.roll}
            onChange={handleChange}
            className="bg-transparent text-gray-800 placeholder-gray-800 outline-none text-sm w-full h-full"
          >
            <option value="patient">Paciente</option>
            <option value="doctor">Doctor</option>
          </select>
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
          {loading ? "please wait..." : "Registrate"}
        </button>
        <p className="py-4 text-white">
          ¿Ya tienes una cuenta?
          <Link to="/login">
            <span className="text-secondary"> Inicia sesión🚶‍♀️‍➡️ </span>
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Signup;
