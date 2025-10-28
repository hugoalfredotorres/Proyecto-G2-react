import { featuresData } from "../assets/assets.js";
const Featured = () => {
  return (
    <div className="py-16 bg-[#F7F7FF]">
      <h1 className="text-3xl md:text-5xl font-semibold text-gray-700 text-center capitalize">
        Comprometido con tu  <span className="text-secondary">Salud</span> <br />{" "}
        y Felicidad.
      </h1>
      <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto px-4">
        Tu bienestar es nuestra máxima prioridad, con atención diseñada para mantenerte sano y pleno cada día. Estamos aquí para apoyar tanto tu cuerpo como tu tranquilidad.
      </p>
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4  justify-center items-center">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="w-[250px] mx-auto bg-white hover:bg-[#C3B2FF] rounded-2xl flex flex-col  gap-5  p-4 items-center justify-center"
          >
            <img
              src={feature.image}
              alt=""
              className="w-20 hover:bg-white hover:transition hover:scale-105 duration-300 rounded-full"
            />
            <h2 className="text-gray-700">{feature.heading}</h2>
            <p>{feature.description}</p>
            <button className="bg-primary text-white py-2 px-4 rounded-full cursor-pointer">
              Leer Mas
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Featured;
