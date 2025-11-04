import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { appointments, updateAppointmentStatus } = useContext(AppContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Panel del Médico</h1>

      {appointments.length === 0 ? (
        <p>No hay turnos pendientes.</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((a) => (
            <li key={a.id} className="border p-4 rounded shadow">
              <p><strong>Paciente:</strong> (pendiente agregar nombre)</p>
              <p><strong>Especialidad:</strong> {a.specialty}</p>
              <p><strong>Fecha:</strong> {a.date}</p>
              <p><strong>Hora:</strong> {a.time}</p>
              <p><strong>Estado:</strong> {a.status}</p>

              <div className="mt-2 space-x-2">
                <button
                  onClick={() => updateAppointmentStatus(a.id, "Aprobado")}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Aprobar
                </button>
                <button
                  onClick={() => updateAppointmentStatus(a.id, "Rechazado")}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Rechazar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
