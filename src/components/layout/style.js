import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

export const Navbar = styled.div`
  width: 70%;
  height: 50px;

  margin: 20px auto 0 auto;

  background: #f9be06;
  border-radius: 40px;

  display: flex;
  justify-content: center;
  align-items: center;


  padding: 0 20px;

  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`

export const NavCenter = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  position: relative;

  padding-bottom: 5px;

  &.active::after {
    content: '';
    position: absolute;

    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);

    width: 70%;
    height: 4px;

    background: black;
    border-radius: 2px;
  }

  &:hover {
    color: white;
  }
`
export const ProfileIcon = styled(Link)`
  position: absolute;
  left: 70px;
  top: 25px;

  width: 60px;
  height: 60px;

  border-radius: 50%;
  background: #000;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  box-shadow: 0 8px 20px rgba(0,0,0,.18);

  transition: .2s;

  svg{
    font-size: 22px;
    color: #fff;
    transition: .2s;
  }

  &:hover{
    background: #f9be06;
    transform: translateY(-2px);
  }

  &:hover svg{
    color: #000;
  }
`;