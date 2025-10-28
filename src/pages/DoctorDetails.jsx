import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { doctorsData } from "../assets/assets";
import { Toaster } from "react-hot-toast";
import {
  ArrowLeft,
  Calendar,
  Clock,
  DollarSign,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Star,
  User,
} from "lucide-react";
const DoctorDetails = () => {
  const { id } = useParams();
  const { navigate } = useContext(AppContext);

  const doctor = doctorsData.find((doctor) => doctor._id === parseInt(id));

  // Booking form state
  const [bookingData, setBookingData] = useState({
    patientName: "",
    phone: "",
    email: "",
    appointmentDate: "",
    appointmentTime: "",
    symptoms: "",
    
  });
  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };
  const handleBookingSubmit = () => {
    if (
      !bookingData.patientName ||
      !bookingData.phone ||
      !bookingData.email ||
      !bookingData.appointmentDate ||
      !bookingData.appointmentTime
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    console.log("Booking submitted:", {
      doctor: doctor.name,
      ...bookingData,
    });

    toast.success(`Appointment booked successfully with ${doctor.name}!`);

    // Reset formulario
    setBookingData({
      patientName: "",
      phone: "",
      email: "",
      appointmentDate: "",
      appointmentTime: "",
      symptoms: "",
    });
    navigate("/my-appointments");
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* cabezera del detalle */}
      <div className="bg-primary text-white p-4">
        <div className="flex items-center gap-4 max-w-4xl mx-auto">
          <button
            onClick={handleGoBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {" "}
            <ArrowLeft className="w-6 h-6" />{" "}
          </button>
          <h1 className="text-xl font-semibold">Detalles del Dr.</h1>
        </div>
      </div>

      {/* contenido principal */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Detalles del doctor */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Perfil del Dr */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* imagen de Dr */}
                <div className="flex-shrink-0">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20"
                  />
                </div>

                {/* info Basica del Doc */}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {doctor.name}
                  </h2>
                  <p className="text-lg text-primary font-semibold mb-3">
                    {doctor.specialty}
                  </p>

                  {/* Rating */}

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {renderStars(doctor.rating)}
                    </div>
                    <span>{doctor.rating}.0 rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* detalles en el grid */}

            <div className="border-t border-gray-100">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* a la izq */}
                <div className="space-y-4">
                  {/* Educacion */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Educacion
                      </h3>
                      <p className="text-gray-600">{doctor.education}</p>
                    </div>
                  </div>
                  {/* Experiencias */}

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          Experiencias
                        </h3>
                        <p className="text-gray-600">{doctor.experience}</p>
                      </div>
                    </div>
                  </div>
                  {/* precio */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Precio de la Consulta
                      </h3>
                      <p className="text-gray-600">$ {doctor.fees}</p>
                    </div>
                  </div>
                </div>

                {/* columna a la derecha */}
                <div className="space-y-4">
                  {/* Lugar */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Lugar
                      </h3>
                      <p className="text-gray-600">{doctor.location}</p>
                    </div>
                  </div>

                  {/* celular informacion */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Celular
                      </h3>
                      <a
                        href={`tel:${doctor.phone}`}
                        className="text-primary hover:underline"
                      >
                        {doctor.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${doctor.email}`}
                        className="text-primary hover:underline break-all"
                      >
                        {doctor.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* formulario de reserva */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Formulario Para solicitar Turnos
              </h2>
              <p className="text-gray-600">
                Agenda tu consulta con {doctor.name}
              </p>
            </div>

            <div className="space-y-6">
              {/* nombre paciente */}
              <div>
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre de Paciente
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    name="patientName"
                    value={bookingData.patientName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                    placeholder="ingrese el nombre del paciente completo"
                  />
                </div>
              </div>

              {/* celular e email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nro de celular
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                      placeholder="+54-388-1234567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email 
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                      placeholder="paciente@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="appointmentDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Fecha del turno 
                  </label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="date"
                      id="appointmentDate"
                      name="appointmentDate"
                      value={bookingData.appointmentDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="appointmentTime"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Hora de la Atencion *
                  </label>
                  <div className="relative">
                    <Clock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <select
                      id="appointmentTime"
                      name="appointmentTime"
                      value={bookingData.appointmentTime}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                    >
                      <option value="">Seleccione la Hora</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* sintomas/ razo de la consulta */}
              <div>
                <label
                  htmlFor="symptoms"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Comentario breve de la consulta!!
                </label>
                <textarea
                  id="symptoms"
                  name="symptoms"
                  value={bookingData.symptoms}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors resize-vertical"
                  placeholder="describa con pocas palabras acerca de la consulta..."
                ></textarea>
              </div>


              

              {/* Submit Button */}
              <button
                onClick={handleBookingSubmit}
                className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors shadow-md cursor-pointer"
              >
                
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Ud recibira la confirmacion en 2 horas aprox....
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorDetails;
