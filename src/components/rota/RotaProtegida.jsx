import { Navigate } from "react-router-dom";
import { getUsuarioLogado } from "../../utils/auth";

export default function RotaProtegida({ children, tiposPermitidos }) {

  const usuario = getUsuarioLogado();

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  if (tiposPermitidos && !tiposPermitidos.includes(usuario.tipo)) {
    return <Navigate to="/login" replace />;
  }

  return children;

}