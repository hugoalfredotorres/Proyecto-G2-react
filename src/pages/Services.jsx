import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Services = () => {
  const { navigate, healthSpecialties } = useContext(AppContext);
  return (
    <div className="py-16 bg-[#F7F7FF]">
      <h1 className="text-3xl md:text-5xl font-semibold text-gray-700 text-center capitalize">
        Contamos con <span className="text-secondary">Servicios de Alta Complejidad</span>
      </h1>
      <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto px-4">
        Ofrecemos una gama integral de servicios de salud para satisfacer sus necesidades, desde atención preventiva hasta tratamientos especializados.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center">
        {healthSpecialties.map((specialty, index) => (
          <div
            key={index}
            onClick={() => {
              navigate("/doctors");
              window.scrollTo(0, 0);
            }}
            className="flex flex-col items-center justify-center bg-white hover:bg-[#9DDFF9] duration-300 transition-all max-w-[300px]  mx-auto border border-gray-200 my-4 p-2 rounded-2xl cursor-pointer"
          >
            <img src={specialty.image} alt="" className="w-18" />
            <p className="text-lg font-semibold">{specialty.name}</p>
            <p className="max-w-xs text-sm">{specialty.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
