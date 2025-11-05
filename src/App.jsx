import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./pages/doctor/Layout";
import Dashboard from "./pages/doctor/Dashboard";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import DashAdmin from "./pages/dash_admin/dash_admin";
import Turnos from "./pages/turnos";
import usuariosDefecto from "./constants/usuarios_defecto";
import turnosDefecto from "./constants/turnos_defecto";

const App = () => {
  const {
    navigate,
    isDoctor,
    isPaciente,
    isAdmin,
    setUser,
    setIsDoctor,
    setIsPaciente,
    setIsAdmin,
  } = useContext(AppContext);
  const doctorPath = useLocation().pathname.includes("doctor-dashboard");

  const verificarUsuarioLogueado = () => {
    const usuarioStorage = localStorage.getItem("usuario-logueado");
    if (usuarioStorage) {
      const usuario = JSON.parse(usuarioStorage);
      setUser(usuario);
      if (usuario.role == "admin") {
        setIsAdmin(true);
        navigate("/admin-dashboard");
      } else if (usuario.role == "doctor") {
        setIsDoctor(true);
        navigate("/doctor-dashboard");
      } else {
        setIsPaciente(true);
      }
    }
  };

  const agregarDatosPorDefecto = () => {
    const existeUsuariosStorage = localStorage.getItem("usuarios")
      ? true
      : false;
    if (!existeUsuariosStorage) {
      const usuarios = JSON.stringify(usuariosDefecto);
      localStorage.setItem("usuarios", usuarios);
    }
    const existeTurnosStorage = localStorage.getItem("turnos") ? true : false;
    if (!existeTurnosStorage) {
      const turnos = JSON.stringify(turnosDefecto);
      localStorage.setItem("turnos", turnos);
    }
  };

  useEffect(() => {
    agregarDatosPorDefecto();
    verificarUsuarioLogueado();
  }, []);

  return (
    <div>
      <Toaster />
      {!doctorPath && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctor-details/:id" element={<DoctorDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/turnos" element={<Turnos />} />

        {/* Doctor Routes */}
        <Route
          path="/doctor-dashboard"
          element={isDoctor ? <Layout /> : <Login />}
        >
          <Route index element={isDoctor ? <Dashboard /> : <Login />} />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin-dashboard"
          element={isAdmin ? <DashAdmin /> : <Login />}
        />
      </Routes>
      {!doctorPath && <Footer />}
    </div>
  );
};
export default App;
