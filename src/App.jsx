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
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
const App = () => {
  const { doctor } = useContext(AppContext);
  const doctorPath = useLocation().pathname.includes("doctor-dashboard");
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
          element={doctor ? <Layout /> : <Login />}
        >
          <Route index element={doctor ? <Dashboard /> : <Login />} />
          <Route
            path="appointments"
            element={doctor ? <Appointments /> : <Login />}
          />
          <Route
            path="my-profile"
            element={doctor ? <MyProfile /> : <Login />}
          />
        </Route>
      </Routes>
      {!doctorPath && <Footer />}
    </div>
  );
};
export default App;
