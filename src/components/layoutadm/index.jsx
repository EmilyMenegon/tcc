import { Navbar, NavCenter, NavItem, ProfileIcon } from "./style";
import { FaUser } from "react-icons/fa";


export default function Layoutadm() {
  return (
    <Navbar>

      
      <ProfileIcon to="/adm/profileadm">
        <FaUser />
      </ProfileIcon>


      <NavCenter>

        <NavItem to="/adm/inscricaoadm">
          Inscrições
        </NavItem>

        <NavItem to="/adm/galeriaadm">
          Galeria
        </NavItem>

        <NavItem to="/adm/mural">
          Mural
        </NavItem>

           <NavItem to="/adm/eventos">
          Eventos
        </NavItem>
        
      </NavCenter>

    </Navbar>
  );
}