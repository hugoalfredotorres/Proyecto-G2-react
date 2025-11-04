import { useContext, useEffect, useState } from "react";
import "./dash_admin.css";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const DashAdmin = () => {
  const { user } = useContext(AppContext);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const usuariosStorage = localStorage.getItem("users");
    const usuariosParse = JSON.parse(usuariosStorage);
    setUsuarios(usuariosParse);
  }, []);

  const aceptarUsuario = (usuario) => {
    if (usuario.accepted) {
      toast.error("El usuario ya está aprobado.");
      return;
    }
    const usuariosCopia = [...usuarios];
    const indice = usuariosCopia.findIndex((copia) => copia.id == usuario.id);
    usuariosCopia[indice].accepted = true;
    localStorage.setItem("users", JSON.stringify(usuariosCopia));
    toast.success(`Usuario ${usuariosCopia[indice].name} aprobado.`);
    setUsers([...usuariosCopia]);
  };

  return (
    <div className="contenedor">
      <h2>Usuarios registrados</h2>
      <span>Para aprobar usuarios hacer click en uno</span>
      <div className="contenedor-usuarios">
        {usuarios.map(
          (usuario) =>
            user.id !== usuario.id && (
              <div className="usuario" onClick={() => aceptarUsuario(usuario)}>
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
