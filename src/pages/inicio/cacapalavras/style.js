import styled from "styled-components";


export const Page = styled.div`

min-height:100vh;

background:white;

font-family:'Poppins',sans-serif;

overflow-x:hidden;

`;



export const Header = styled.div`

width:92%;

margin:3% auto 0;


display:flex;

align-items:center;


gap:2%;



@media(max-width:700px){

display:grid;

grid-template-columns:22% 39% 39%;

gap:3%;

}

`;



export const Logo = styled.div`
  width: 120px;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 90px;
  }
`;



export const GameTitle = styled.h1`

flex:1;


font-size:clamp(2rem,5vw,3.5rem);


font-weight:800;


color:#111;


text-align:center;


margin:0;



@media(max-width:700px){

grid-column:1 / 4;

order:3;

margin-top:5%;

font-size:8vw;

}

`;

export const BackButton = styled.button`
  width: 12%;
  height: 55px;

  border: 2px solid #000;
  border-radius: 10px;

  background: white;
  color: #000;

  font-size: 15px;
  font-weight: bold;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  transition: .2s;

  svg{
    font-size:16px;
    transition:.2s;
  }

  &:hover{
    background:#000;
    color:#f9be06;
    transform:translateY(-2px);
  }

  &:hover svg{
    transform:translateX(-4px);
  }

  &:active{
    transform:translateY(1px);
  }

  @media(max-width:700px){
    width:48%;
    height:48px;
    font-size:13px;
    gap:0;

    svg{
      display:none;
    }
  }
`;

export const ParticipateButton = styled.button`
  width:16%;
  height:55px;

  border:none;
  border-radius:10px;

  background:#f9be06;
  color:#111;

  font-size:15px;
  font-weight:bold;

  cursor:pointer;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;

  transition:.2s;

  .desktopText{
    display:inline;
  }

  .mobileText{
    display:none;
  }

  svg{
    font-size:16px;
    width:16px;
    height:16px;
    flex-shrink:0;
    transition:.2s;
  }

  &:hover{
    background:#000;
    color:#f9be06;
    transform:translateY(-2px);
  }

  &:hover svg{
    transform:translateX(4px);
  }

  &:active{
    transform:translateY(1px);
  }

  @media(max-width:700px){
    width:48%;
    height:48px;
    font-size:13px;
    gap:0;

    .desktopText{
      display:none;
    }

    .mobileText{
      display:inline;
    }

    svg{
      display:none;
    }
  }
`;

export const Container = styled.div`

width:85%;


margin:5% auto;


display:flex;


justify-content:space-between;


align-items:flex-start;



gap:5%;



@media(max-width:900px){

flex-direction:column;

align-items:center;

width:92%;

}

`;






export const LeftSide = styled.div`

width:45%;


padding-top:1%;



@media(max-width:900px){

width:100%;

}

`;







export const Title = styled.h1`

font-size:clamp(1.8rem,4vw,2.6rem);


color:#111;


margin:0 0 3%;


@media(max-width:900px){

text-align:center;

}

`;








export const Text = styled.p`

font-size:clamp(.95rem,3vw,1.15rem);


line-height:1.7;


color:#333;


text-align:justify;



b{

font-weight:800;

color:#111;

}

`;









export const FindBox = styled.div`

margin-top:8%;



h3{

margin:0 0 4%;


font-size:clamp(1.2rem,4vw,1.8rem);


}



@media(max-width:900px){

text-align:center;

}


@media(max-width:600px){

margin-top:10%;

}

`;








export const Words = styled.div`

display:flex;


flex-wrap:wrap;


gap:14px;


width:100%;



@media(max-width:900px){

justify-content:center;

gap:12px;

}



@media(max-width:600px){

gap:10px;

padding:0 2%;

}

`;








export const Word = styled.span`

padding:8px 16px;


border-radius:20px;


background:${props=>props.found ? "#f9be06":"#eee"};



font-size:clamp(.7rem,3vw,1rem);


font-weight:bold;


`;







export const RightSide = styled.div`

width:50%;


display:flex;


justify-content:center;


align-items:center;



margin-top:3%;



@media(max-width:900px){

width:100%;

margin-top:8%;

}



@media(max-width:600px){

margin-top:12%;

}

`;









export const Board = styled.div`

width:min(94vw,600px);


aspect-ratio:1;



background:#f9be06;



padding:3%;



border-radius:20px;



display:flex;


flex-direction:column;


justify-content:center;


align-items:center;



box-shadow:0 10px 25px rgba(0,0,0,.15);


`;









export const Row = styled.div`

display:flex;


width:100%;


justify-content:center;


`;









export const Letter = styled.button`

width:8%;


aspect-ratio:1;


margin:.35%;



border:none;


border-radius:10%;



background:${props=>

props.active

?"#111"

:props.found

?"#32c36c"

:"white"

};



color:${props=>

props.active

?"white"

:"#111"

};



font-size:clamp(.55rem,3.5vw,.9rem);



font-weight:bold;



cursor:pointer;


user-select:none;


transition:.2s;



&:hover{

background:#f9be06;

transform:scale(1.08);

}

`;








export const Success = styled.div`

position:absolute;


top:50%;


left:50%;


transform:translate(-50%,-50%);



width:80%;


padding:5%;


border-radius:20px;



background:#28a745;


color:white;



font-size:clamp(1rem,5vw,1.6rem);



font-weight:bold;


text-align:center;

`;