import { useContext, useEffect, useState } from "react";
import { doctorsData } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";
import { StarIcon } from "lucide-react";
const Doctors = () => {
  const { navigate } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);
  useEffect(() => {
    const result = doctorsData.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDoctors(result);
  }, [searchTerm]);
  return (
    <div className="py-16 bg-[#EBEBFE]">
      <h1 className="text-4xl font-bold text-center mb-8">
        Nueestros <span className="text-secondary">Doctores</span>
      </h1>
      <p className="text-center">Algunos Doctores con sus Especialidades !!!!</p>
      {/* 🔹 Search Bar */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="buscar aqui..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[90%] md:w-[400px] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 mt-10">
        {filteredDoctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white flex flex-col md:flex-row items-center gap-6 p-4 w-[350px] md:w-[500px] mx-auto border border-gray-300 rounded-2xl"
          >
            <img src={doctor.image} alt="" />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-gray-700">
                {doctor.name}
              </h2>
              <p>{doctor.specialty}</p>
              <p className="flex items-center gap-2">
                Rating:{doctor.rating}{" "}
                <StarIcon className="w-5 h-5 text-yellow-500" />
              </p>
              <button
                onClick={() => {
                  navigate("/doctor-details/" + doctor._id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="border border-secondary text-primary hover:bg-secondary hover:text-white transition-all duration-200 py-2 px-4 rounded-full cursor-pointer mt-2"
              >
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Doctors;
