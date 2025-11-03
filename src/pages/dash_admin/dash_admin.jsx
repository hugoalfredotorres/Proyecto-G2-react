import { useContext, useEffect, useState } from "react";
import "./dash_admin.css";
import { AppContext } from "../../context/AppContext";

const DashAdmin = () => {
  const { user } = useContext(AppContext);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const usuariosStorage = localStorage.getItem("users");
    const usuariosParse = JSON.parse(usuariosStorage);
    setUsuarios(usuariosParse);
  }, []);

  return (
    <div className="contenedor">
      <h2>Usuarios registrados</h2>
      <div className="contenedor-usuarios">
        {usuarios.map(
          (usuario) =>
            user.id !== usuario.id && (
              <div className="usuario">
                <div className="datos-usuario">
                  <span>Nombre: {usuario.name}</span>
                  <span>Email: {usuario.email}</span>
                  <span>Rol: {usuario.role}</span>
                  {usuario.role == "doctor" && (
                    <span>Especialidad: {usuario.speciality}</span>
                  )}
                </div>
                <div
                  className={
                    "estado-usuario " +
                    (usuario.accepted ? "aceptado" : "pendiente")
                  }
                >
                  {usuario.accepted ? "Aceptado" : "Pendiente"}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
export default DashAdmin;
