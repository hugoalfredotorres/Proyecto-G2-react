import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { specialtiesData } from "../assets/assets";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [doctor, setDoctor] = useState(true);
  const [healthSpecialties, setHealthSpecialties] = useState([]);
  const fetchHealthSpecialties = () => {
    setHealthSpecialties(specialtiesData);
  };
  useEffect(() => {
    fetchHealthSpecialties();
  }, []);
  const value = {
    navigate,
    user,
    setUser,
    doctor,
    setDoctor,
    loading,
    setLoading,
    healthSpecialties,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
