import { Navigate } from 'react-router-dom'
import { Navbar, NavCenter, NavItem, ProfileIcon } from './style'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Layout() {
  return (
    <Navbar>
<ProfileIcon to="/usuario/profile">
  <FaUser />
</ProfileIcon>
     

      <NavCenter>
        <NavItem to="/usuario/home">Início</NavItem>
        <NavItem to="/usuario/inscricao">Inscrição</NavItem>
        <NavItem to="/usuario/galeria">Galeria</NavItem>
        <NavItem to="/usuario/cronograma">Cronograma</NavItem>
      </NavCenter>

    </Navbar>
  )
}