import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #f1f5f9;
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const NavButton = styled.button`
  width: 150px;
  height: 45px;

  border: none;
  border-radius: 8px;

  background: #2563eb;
  color: white;

  font-size: 16px;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: #1e40af;
  }
`;