import { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Turnos = () => {
  const { user } = useContext(AppContext);
  const [doctores, setDoctores] = useState([]);
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    const turnosStorage = localStorage.getItem("turnos");
    if (turnosStorage) {
      const turnos = JSON.parse(turnosStorage);
      const turnosDelPaciente = turnos.filter(
        (turno) => turno.paciente_id == user.id
      );
      setTurnos(turnosDelPaciente);
    }
    const usuariosStorage = localStorage.getItem("usuarios");
    if (usuariosStorage) {
      const usuarios = JSON.parse(usuariosStorage);
      const doctores = usuarios.filter(
        (usuarios) => usuarios.role == "doctor" && usuarios.accepted
      );
      setDoctores(doctores);
    }
  }, []);

  const [form, setForm] = useState({
    doctor_id: null,
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doctor = doctores.find((doctor) => doctor.id == form.doctor_id);
    const nuevoTurno = {
      id: turnos.length + 1,
      paciente_id: user.id,
      nombre_paciente: user.name,
      nombre_doctor: doctor.name,
      ...form,
      especialidad: doctor.speciality,
      estado: "pendiente",
    };
    const nuevosTurnos = [...turnos, nuevoTurno];
    localStorage.setItem("turnos", JSON.stringify(nuevosTurnos));
    setTurnos(nuevosTurnos);
    setForm({
      doctor_id: null,
      fecha: "",
      hora: "",
      sintomas: "",
    });
    toast.success("Turno solicitado correctamente ✅");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Solicitar Turno</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow space-y-4"
      >
        <div>
          <label className="block font-semibold mb-1">Doctor</label>
          <select
            name="doctor_id"
            value={form.doctor_id}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          >
            <option selected disabled value={null}>
              Seleccione un doctor del listado...
            </option>
            {doctores.map((doctor, index) => (
              <option value={doctor.id} key={index}>
                {doctor.name} ({doctor.speciality})
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Fecha</label>
            <input
              type="date"
              name="fecha"
              value={form.fecha}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Hora</label>
            <input
              type="time"
              name="hora"
              value={form.hora}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Síntomas</label>
          <textarea
            name="sintomas"
            value={form.sintomas}
            onChange={handleChange}
            placeholder="Describe tus síntomas..."
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-200 text-white px-4 py-2 rounded"
          disabled={!form.doctor_id || !form.hora || !form.fecha}
        >
          Solicitar Turno
        </button>
      </form>

      {/* LISTA DE TURNOS */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Mis Turnos</h2>

        {!turnos.length ? (
          <p>No hay turnos aún.</p>
        ) : (
          <ul className="space-y-4">
            {turnos.map((turno, index) => (
              <li key={index} className="border p-4 rounded shadow">
                <p>
                  <strong>Doctor:</strong> {turno.nombre_doctor}
                </p>
                <p>
                  <strong>Especialidad:</strong> {turno.especialidad}
                </p>
                <p>
                  <strong>Fecha:</strong> {turno.fecha}
                </p>
                <p>
                  <strong>Hora:</strong> {turno.hora}
                </p>
                <p>
                  <strong>Estado:</strong>{" "}
                  <span
                    className={
                      turno.estado == "pendiente"
                        ? "text-yellow-700"
                        : turno.estado == "aprobado"
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {turno.estado}
                  </span>
                </p>
                <p>
                  <strong>Síntomas:</strong>{" "}
                  {turno.sintomas || "(Sin declarar)"}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Turnos;
