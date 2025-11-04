import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { specialtiesData } from "../assets/assets";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isDoctor, setIsDoctor] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPaciente, setIsPaciente] = useState(false);
  const [healthSpecialties, setHealthSpecialties] = useState([]);
  const fetchHealthSpecialties = () => {
    setHealthSpecialties(specialtiesData);
  };
  useEffect(() => {
    fetchHealthSpecialties();
  }, []);
  //  Turnos compartidos
  const [appointments, setAppointments] = useState([]);

  // Cargar especialidades
  useEffect(() => {
    setHealthSpecialties(specialtiesData);
  }, []);

  //  Función para agregar turnos
  const addAppointment = (newAppointment) => {
    setAppointments((prev) => [...prev, newAppointment]);
  };

  //  Función para que el médico pueda actualizar un turno
  const updateAppointmentStatus = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
  };
  const value = {
    navigate,
    user,
    setUser,
    isDoctor,
    setIsDoctor,
    isAdmin,
    setIsAdmin,
    isPaciente,
    setIsPaciente,
    loading,
    setLoading,
    healthSpecialties,
    addAppointment,
    appointments,
    updateAppointmentStatus,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
