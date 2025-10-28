import { CircleCheck } from "lucide-react";
import { howItWorks } from "../assets/assets.js";
const HowItWorks = () => {
  return (
    <div className="py-16 bg-[#231F53] ">
      <h1 className="text-3xl font-semibold md:text-5xl text-center text-white ">
        Atención sanitaria optimizada <br />
        <span className="text-secondary">Acercarse</span>
      </h1>
      <p className="text-center text-white mt-4 max-w-2xl mx-auto px-4">
        {" "}
       Nuestro enfoque optimizado hace que la atención médica sea sencilla, eficiente y sin estrés. Nos centramos en brindar la atención adecuada en el momento oportuno para su bienestar. Desd cualquier parte de nuestra America Latian, brindamos un servicio de excelencia....
      </p>

      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4  justify-center items-center">
        {howItWorks.map((item, index) => (
          <div
            key={index}
            className="w-[250px] mx-auto bg-white  rounded-2xl flex flex-col  gap-5  p-4 items-center justify-center"
          >
            <CircleCheck className="w-10 h-10 text-[#3ED0F5]" />
            <h2 className="text-lg font-semibold text-gray-700">
              {item.heading}
            </h2>
            <p>{item.description}</p>
            <button className="bg-primary text-white py-2 px-4 rounded-full cursor-pointer">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HowItWorks;
