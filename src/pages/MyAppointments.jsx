import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { appointments, addAppointment } = useContext(AppContext);

  const [form, setForm] = useState({
    doctorName: "",
    specialty: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      id: Date.now(),
      ...form,
      patientName: "Leandro Esper", // podrías usar user.name si lo tienen
      status: "pendiente",
    };

    addAppointment(newAppointment);

    setForm({
      doctorName: "",
      specialty: "",
      date: "",
      time: "",
      symptoms: "",
    });

    alert("Turno solicitado correctamente ✅");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Solicitar Turno</h1>

      {/* FORMULARIO */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block font-semibold mb-1">Doctor</label>
          <input
            name="doctorName"
            value={form.doctorName}
            onChange={handleChange}
            placeholder="Ej: Dr. Sarah Ahmed"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Especialidad</label>
          <input
            name="specialty"
            value={form.specialty}
            onChange={handleChange}
            placeholder="Ej: Cardiología"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Fecha</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Hora</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Síntomas</label>
          <textarea
            name="symptoms"
            value={form.symptoms}
            onChange={handleChange}
            placeholder="Describe tus síntomas..."
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Solicitar Turno
        </button>
      </form>

      {/* LISTA DE TURNOS */}
<div className="mt-8">
  <h2 className="text-xl font-semibold mb-4">Mis Turnos</h2>

  {!appointments || appointments.length === 0 ? (
    <p>No hay turnos aún.</p>
  ) : (
    <ul className="space-y-4">
      {appointments.map((a) => (
        <li key={a.id} className="border p-4 rounded shadow">
          <p><strong>Doctor:</strong> {a.doctorName}</p>
          <p><strong>Especialidad:</strong> {a.specialty}</p>
          <p><strong>Fecha:</strong> {a.date}</p>
          <p><strong>Hora:</strong> {a.time}</p>
          <p><strong>Estado:</strong> {a.status}</p>
        </li>
      ))}
    </ul>
  )}
</div>
   </div>
  );
};

export default MyAppointments;

