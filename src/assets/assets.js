import banner from "./banner.jpg";
import appointment from "./appointment.png";
import book_appointment from "./book_appointment.jpg";
import calculator from "./calculator.png";
import car from "./car.png";
import Cardiology from "./Cardiology.png";
import clock from "./clock.png";
import doctor_1 from "./doctor_1.jpg";
import doctor_2 from "./doctor_2.jpg";
import doctor_3 from "./doctor_3.jpg";
import doctor_4 from "./doctor_4.jpg";
import doctor from "./doctor.png";
import Fever from "./Fever.png";

import Hematology from "./Hematology.png";
import hero_img from "./hero_img.jpg";
import home from "./home.png";
import Infection from "./Infection.png";
import mission_img1 from "./mission_img1.jpg";
import mission_img2 from "./mission_img2.jpg";
import mobile from "./mobile.png";
import Neurology from "./Neurology.png";
import Oncology from "./Oncology.png";
import Paediatrician from "./Paediatrician.png";
import profile from "./profile.png";
import Pulmonology from "./Pulmonology.png";

import telephone from "./telephone.png";
import why_choose_us from "./why_choose_us.jpg";
import { CheckCheckIcon } from "lucide-react";
import banner_img from "./banner_img.jpg";
import logo from "./logo.png";
export const assets = {
  mission_img1,
  mission_img2,
  profile,
  logo,
  banner_img,
  hero_img,
  why_choose_us,
  banner,
  appointment,
  book_appointment,
};
export const specialtiesData = [
  {
    name: "Hematologia",
    image: Hematology,
    description: "Diagnóstico y tratamiento de trastornos relacionados con la sangre.",
  },
  {
    name: "Neurologia",
    image: Neurology,
    description: "Atención para problemas cerebrales, de columna y del sistema nervioso.",
  },
  {
    name: "Oncologia",
    image: Oncology,
    description: "Prevencion y diagnostico Oncologicos en pacientes .",
  },
  {
    name: "Pediatria",
    image: Paediatrician,
    description: "Atención médica especializada para bebés, niños y adolescentes.",
  },
  {
    name: "Neumología",
    image: Pulmonology,
    description: "Tratamiento para afecciones pulmonares y del sistema respiratorio.",
  },
  {
    name: "Infecion",
    image: Infection,
    description: "Atención experta para infecciones bacterianas, virales y fúngicas.",
  },
  {
    name: "Cardiologia",
    image: Cardiology,
    description: "Chequeos cardíacos, tratamientos y cuidados cardiovasculares.",
  },
  {
    name: "Fiebre",
    image: Fever,
    description: "Consulta rápida por fiebre y síntomas relacionados..",
  },
];

export const featuresData = [
  {
    image: home,
    heading: "Medico en Casa",
    description:
      "Reciba atención médica desde la comodidad de su hogar. Nuestros médicos calificados lo visitan cuando más los necesita.",
  },
  {
    image: calculator,
    heading: "Citas o Reserva de Turnos",
    description:
      "Programe citas fácilmente con solo unos clics. Elija su médico, fecha y hora al instante. Desde todo el pasi, reciba informacion al instante.",
  },
  {
    image: mobile,
    heading: "Salud via celular",
    description:
      "Conéctate virtualmente con médicos mediante videollamadas seguras. Recibe asesoramiento experto sin salir de casa.",
  },
  {
    image: telephone,
    heading: "Obtener consulta",
    description:
      "Hable con un médico por teléfono para obtener orientación médica rápida. Ideal para seguimientos y urgencias.",
  },
];
export const howItWorks = [
  {
    icon: CheckCheckIcon,
    heading: "Elegir especialista médico",
    description:
      "Explora y selecciona entre nuestra amplia gama de médicos verificados. Encuentra al especialista ideal para tu problema de salud..",
  },
  {
    icon: CheckCheckIcon,
    heading: "Elija el servicio de consulta",
    description:
      "Elige cómo quieres consultar: presencial, por telemedicina o por teléfono. Hacemos que la atención médica sea más cómoda para ti..",
  },
  {
    icon: CheckCheckIcon,
    heading: "Pedir hora",
    description:
      "Programe su cita con solo unos click. Reciba confirmación instantánea para la fecha y hora que prefiera asistir a nuestro hospital..",
  },
  {
    icon: CheckCheckIcon,
    heading: "Obtenga un dDiagnóstico",
    description:
      "Consulte con el médico y reciba un diagnóstico preciso. Se incluyen instrucciones de seguimiento y planes de tratamiento.",
  },
];
export const benefitsData = [
  {
    image: car,
    heading: "Rapido y Confiable",
    description:
      "Acceda rápidamente a servicios médicos con un tiempo de espera mínimo. Garantizamos una atención oportuna y confiable..",
  },
  {
    image: clock,
    heading: "Atención médica en cualquier lugar y en cualquier momento",
    description:
      "Reserva consultas 24/7 desde cualquier lugar. Tu apoyo sanitario está disponible siempre que lo necesites..",
  },
  {
    image: doctor,
    heading: "Profesionales experimentados",
    description:
      "Nuestro equipo está formado por médicos cualificados y con experiencia. Reciba atención de calidad de expertos de confianza..",
  },
  {
    image: calculator,
    heading: "Cita fácil",
    description:
      "Programar una cita es sencillo e intuitivo. Elija a su médico, seleccione un horario y confirme al instante..",
  },
];
export const doctorsData = [
  {
    _id: 1,
    image: doctor_1,
    name: "Dr. Ricardo Alvarez",
    specialty: "Neurocirujano",
    rating: 5,
    education: "Faculatad medicina La Plata",
    experience: "12 years",
    fees: 0,
    location: " Hospital Garrahan-consultori 32 A 5° Piso",
    phone: "+54-11-1234567",
    email: "ricardo.alvarez@example.com",
    buttonText: "Turnos",
  },
  {
    _id: 2,
    image: doctor_2,
    name: "Dr. Maria Eugenia Caceres",
    specialty: "Cardiologaa",
    rating: 4.9,
    education: "Facultade medicina BS AS (Cardiology)",
    experience: "10 years",
    fees: 0,
    location: "Hospital Garrahan-consultori 3 A 2° Piso",
    phone: "+54-11-9876543",
    email: "maria.caceres@example.com",
    buttonText: "Turnos",
  },
  {
    _id: 3,
    image: doctor_3,
    name: "Dr. Sophia Martinez",
    specialty: "Pediatria",
    rating: 4.8,
    education: "Facultad medicina Mendoza (Pediatria)",
    experience: "8 years",
    fees: 0,
    location: "Hospital Garrahan-consultori 3 A 4° Piso",
    phone: "+54-11-5678910",
    email: "sophia.martinez@example.com",
    buttonText: "Turnos",
  },
  {
    _id: 4,
    image: doctor_4,
    name: "Dr. Amelia Cejas",
    specialty: "Dermatologia",
    rating: 4.7,
    education: "Facultad medicina Santa Fe (Dermatologia)",
    experience: "7 years",
    fees: 900,
    location: "SHospital Garrahan-consultori 34 A 6° Piso",
    phone: "+54-11-2233445",
    email: "amelia.cejs@example.com",
    buttonText: "Turnos",
  },
];


