import { Routes, Route } from "react-router-dom";


import TelaInicial from "./pages/inicio/telainicial";
import Navegacao from "./pages/navegacao";
import Login from "./pages/login";


import Home from "./pages/usuario/home";
import Inscricao from "./pages/usuario/inscricao";
import Mural from "./pages/usuario/mural";
import Galeria from "./pages/usuario/galeria";
import Profile from "./pages/usuario/profile";
import EventosUsuario from "./pages/usuario/eventosusuario";


import Inscricaoadm from "./pages/adm/inscricaoadm";
import Inicioadm from "./pages/adm/inicioadm";
import Profileadm from "./pages/adm/profileadm";
import Galeriaadm from "./pages/adm/galeriaadm";
import Eventos from "./pages/adm/eventos";
import Muraladm from "./pages/adm/muraladm";

import Mat from "./pages/mat";



export default function App() {

  return (

    <Routes>


      {/* Páginas iniciais */}

      <Route 
        path="/" 
        element={<TelaInicial />} 
      />

      <Route 
        path="/navegacao" 
        element={<Navegacao />} 
      />

      <Route 
        path="/login" 
        element={<Login />} 
      />



      {/* USUÁRIO */}

      <Route 
        path="/usuario/home" 
        element={<Home />} 
      />

      <Route 
        path="/usuario/profile" 
        element={<Profile />} 
      />

      <Route 
        path="/usuario/inscricao" 
        element={<Inscricao />} 
      />

      <Route 
        path="/usuario/galeria" 
        element={<Galeria />} 
      />

      <Route 
        path="/usuario/mural" 
        element={<Mural />} 
      />

      <Route 
        path="/usuario/eventosusuario" 
        element={<EventosUsuario />} 
      />



      {/* ADMIN */}

      <Route 
        path="/adm/inscricaoadm" 
        element={<Inscricaoadm />} 
      />

      <Route 
        path="/adm/inicioadm" 
        element={<Inicioadm />} 
      />

      <Route 
        path="/adm/profileadm" 
        element={<Profileadm />} 
      />

      <Route 
        path="/adm/galeriaadm" 
        element={<Galeriaadm />} 
      />

      <Route 
        path="/adm/eventos" 
        element={<Eventos />} 
      />

      <Route 
        path="/adm/muraladm" 
        element={<Muraladm />} 
      />
      


      {/* SISTEMA MAT */}

      <Route
  path="/mat"
  element={<Mat />}
/>


    </Routes>

  );
}