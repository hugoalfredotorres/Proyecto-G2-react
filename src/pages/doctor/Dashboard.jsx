import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { user } = useContext(AppContext);
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    const turnosStorage = localStorage.getItem("turnos");
    if (turnosStorage) {
      const turnos = JSON.parse(turnosStorage);
      const turnosDelDoctor = turnos.filter(
        (turno) => turno.doctor_id == user.id
      );
      setTurnos(turnosDelDoctor);
    }
  }, []);

  const cambiarEstadoTurno = (id, estado) => {
    const nuevoTurnos = [...turnos];
    const turnoIndice = nuevoTurnos.findIndex((turno) => turno.id == id);
    nuevoTurnos[turnoIndice].estado = estado;
    localStorage.setItem("turnos", JSON.stringify(nuevoTurnos));
    setTurnos(nuevoTurnos);
    toast.success(`Turno ${estado}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Panel del Médico</h1>

      {!turnos.length ? (
        <p>No hay turnos pendientes.</p>
      ) : (
        <ul className="space-y-4">
          {turnos.map((turno, index) => (
            <li key={index} className="border p-4 rounded shadow">
              <p>
                <strong>Paciente:</strong> {turno.nombre_paciente}
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
                <strong>Síntomas del paciente:</strong>{" "}
                {turno.sintomas || "(Sin declarar)"}
              </p>
              {turno.estado == "pendiente" && (
                <div className="mt-2 space-x-2">
                  <button
                    onClick={() => cambiarEstadoTurno(turno.id, "aprobado")}
                    className="bg-green-600 duration-200 hover:bg-green-400 text-white px-3 py-1 rounded"
                  >
                    Aprobar
                  </button>
                  <button
                    onClick={() => cambiarEstadoTurno(turno.id, "rechazado")}
                    className="bg-red-600 duration-200 hover:bg-red-400 text-white px-3 py-1 rounded"
                  >
                    Rechazar
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
