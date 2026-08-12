import styled from 'styled-components'

export const Page = styled.div`
  font-family: 'Poppins', sans-serif;
  background: white;

  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

/* TITLE */
export const TitleArea = styled.div`
  text-align: center;
 
`

export const Title = styled.h1`
  font-size: 40px;
  margin: 40px 0;
`

/* CENTRALIZA O CALENDÁRIO NA TELA */
export const Container = styled.div`
  width: 80%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 0px; 
`
export const CalendarBox = styled.div`
  width: 700px;

  background: #fff;
  border-radius: 16px;
  padding: 20px;

  border: 1px solid #eaeaea;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: #f4f4f4;
  cursor: pointer;
`

export const MonthText = styled.div`
  font-size: 22px;
  font-weight: bold;
  text-transform: capitalize;
`

export const WeekRow = styled.div`
  display: flex;
  margin-bottom: 10px;
`

export const WeekDay = styled.div`
  width: 14.28%;
  text-align: center;
  font-weight: bold;
  color: #666;
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Day = styled.button`
  width: 14.28%;
  height: 60px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  background: ${({ $active, $today }) =>
    $active ? '#f9be06' : $today ? '#EAEAEA' : 'transparent'};
`

export const DayText = styled.div`
  font-size: 16px;
  font-weight: 700;
`

export const Info = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`
export const FloatingButton = styled.button`
  position: fixed;
  right: 35px;
  bottom: 35px;

  width: 70px;
  height: 70px;

  border: none;
  border-radius: 50%;

  background: #f9be06;
  color: #111;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

  transition: .2s;

  svg {
    font-size: 28px;
    transition: .2s;
  }

  &:hover {
    background: #000;
    color: #f9be06;
    transform: translateY(-2px);
  }

  &:hover svg {
    transform: rotate(90deg);
  }

  &:active {
    transform: translateY(1px);
  }
`;