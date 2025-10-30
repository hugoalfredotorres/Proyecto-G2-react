import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyAppointments from "./pages/MyAppointments";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./pages/doctor/Layout";
import Dashboard from "./pages/doctor/Dashboard";
import Appointments from "./pages/doctor/Appointments";
import MyProfile from "./pages/doctor/MyProfile";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import usersDefecto from "./constants/users_defaults";

const App = () => {
  const { isDoctor, isPaciente, isAdmin } = useContext(AppContext);
  const doctorPath = useLocation().pathname.includes("doctor-dashboard");

  useEffect(() => {
    const existStorage = localStorage.getItem("users") ? true : false;
    if (!existStorage) {
      const users = JSON.stringify(usersDefecto);
      localStorage.setItem("users", users);
    }
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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/profile" element={<Profile />} />

        {/* Doctor Routes */}
        <Route
          path="/doctor-dashboard"
          element={isDoctor ? <Layout /> : <Login />}
        >
          <Route index element={isDoctor ? <Dashboard /> : <Login />} />
          <Route
            path="appointments"
            element={isDoctor ? <Appointments /> : <Login />}
          />
          <Route
            path="my-profile"
            element={isDoctor ? <MyProfile /> : <Login />}
          />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin-dashboard"
          element={isAdmin ? <Layout /> : <Login />} // falta cambiar "Layout" por la vista del administrador
        />
      </Routes>
      {!doctorPath && <Footer />}
    </div>
  );
};
export default App;
