import styled from 'styled-components'

/* PAGE */
export const Page = styled.div`
  font-family: 'Poppins', sans-serif;
  background: white;

  min-height: 100%;
  display: flex;
  flex-direction: column;
`

/* TITLE */
export const TitleArea = styled.div`
  text-align: center;
`

export const Title = styled.h1`
  font-size: 40px;
`

/* CONTAINER */
export const Container = styled.div`
  width: 80%;
  height: 450px;

  margin: 15px auto 0 auto;

  display: flex;

  border-radius: 20px;

  overflow: hidden;

  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  animation: aparecer .6s ease;

  @keyframes aparecer {
    from {
      opacity: 0;
      transform: translateY(30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

/* LEFT SIDE */
export const LeftSide = styled.div`
  width: 40%;

  background: #f9be06;

  color: black;

  padding: 30px;
`

export const SectionTitle = styled.h2`
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const InfoText = styled.div`
  display: flex;

  align-items: center;

  justify-content: flex-start;

  width: 220px;

  gap: 14px;

  div {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
  }

  strong {
    font-size: 18px;
    color: black;
  }

  p {
    margin: 0;

    font-size: 15px;

    opacity: .85;

    color: black;
  }

  svg {
    min-width:40px;
    color:black;
  }
`

export const SocialContainer = styled.div`
  display:flex;

  flex-direction:column;

  align-items:center;

  justify-content:center;

  gap:35px;

  width:100%;

  height:60%;
`

/* RIGHT SIDE */
export const RightSide = styled.div`
  width:60%;

  background:#ecf0f1;

  padding:30px;

  gap:35px;
`

export const Form = styled.div`
  display:flex;

  flex-direction:column;

  gap:35px;
`

export const Input = styled.input`
  height: 42px;

  padding: 0 15px;

  border: none;

  border-radius: 20px;

  outline: none;

  transition: .2s;

  font-size: 14px;
`;

export const Button = styled.button`
  padding:12px;

  border:none;

  border-radius:20px;

  background: #f9be06;

  color:black;

  cursor:pointer;

  font-size:15px;

  font-weight:bold;

  transition:.2s;


  &:hover{

    background:black;

    color: #f9be06;

    transform:translateY(-2px);

  }


  &:active{

    transform:translateY(1px);

  }
`