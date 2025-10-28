import { assets, benefitsData } from "../assets/assets.js";
const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-[#F7F7FF]">
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* left section  */}
        <div className="md:w-1/2 space-y-6">
          <img src={assets.why_choose_us} alt="" />
        </div>

        {/* Right section  */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-700 capitalize">
            Nuestra <span className="text-secondary">Atencion </span>{" "}
            <span className="text-secondary">y</span>
            <span className="text-secondary"> La</span> <br />
            Tecnologia
          </h1>
          <p className=" text-gray-600 mt-4 max-w-2xl mx-auto px-4">
            {" "}
            Equipados con los últimos avances, utilizamos tecnología de vanguardia para garantizar precisión, eficiencia y resultados de máxima calidad.
          </p>
          <div>
            {benefitsData.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 mb-4 border border-black p-4 shadow-lg rounded-xl"
              >
                <img src={item.image} alt="" className="w-10" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-700">
                    {item.heading}
                  </h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
