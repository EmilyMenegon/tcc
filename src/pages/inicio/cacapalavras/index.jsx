import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import {
  Page,
  Header,
  Logo,
  ParticipateButton,
  BackButton,
  GameTitle,
  Container,
  LeftSide,
  Title,
  Text,
  FindBox,
  Words,
  Word,
  RightSide,
  Board,
  Row,
  Letter,
  Success,
} from "./style";

import { useState } from "react";


const words = [
  "SLAM",
  "POESIA",
  "SENTIMENTOS",
  "ARTE",
  "ESCRITA",
  "ORALIDADE",
  "RIMAS",
  "PERFORMANCES",
  "CONFIANÇA",
  "EXPRESSÃO"
];


const board = [

["S","E","N","T","I","M","E","N","T","O","S","R"],
["P","Q","X","L","M","N","B","V","C","D","R","T"],
["O","E","S","C","R","I","T","A","F","G","T","E"],
["E","W","R","Y","U","I","O","P","A","S","E","Z"],
["S","L","A","M","H","J","K","L","M","N","P","O"],
["I","D","F","G","H","J","K","A","R","T","E","R"],
["A","B","C","D","E","F","G","H","I","J","K","L"],
["O","R","A","L","I","D","A","D","E","M","N","P"],
["R","I","M","A","S","Q","W","E","R","T","Y","U"],
["P","E","R","F","O","R","M","A","N","C","E","S"],
["C","O","N","F","I","A","N","Ç","A","X","Z","A"],
["E","X","P","R","E","S","S","Ã","O","Q","W","E"]

];



export default function CacaPalavras(){


const [selected,setSelected] = useState([]);

const [found,setFound] = useState([]);

const [foundCells,setFoundCells] = useState([]);

const [gameComplete,setGameComplete] = useState(false);



function selectLetter(row,col){


const position = `${row}-${col}`;



// primeiro clique
if(selected.length === 0){

setSelected([position]);

return;

}



const first = selected[0];

const [r1,c1] = first.split("-").map(Number);



const r2 = row;

const c2 = col;



let cells=[];



// horizontal
if(r1 === r2){


const start=Math.min(c1,c2);

const end=Math.max(c1,c2);



for(let c=start;c<=end;c++){

cells.push(`${r1}-${c}`);

}

}



// vertical
else if(c1 === c2){


const start=Math.min(r1,r2);

const end=Math.max(r1,r2);



for(let r=start;r<=end;r++){

cells.push(`${r}-${c1}`);

}

}



// diagonal
else if(Math.abs(r1-r2) === Math.abs(c1-c2)){


const rowStep = r2 > r1 ? 1 : -1;

const colStep = c2 > c1 ? 1 : -1;



let r=r1;

let c=c1;



while(true){


cells.push(`${r}-${c}`);



if(r===r2 && c===c2)
break;



r+=rowStep;

c+=colStep;


}

}



const letters = cells.map(item=>{


const [r,c]=item.split("-");


return board[r][c];


});



const word = letters.join("");

const reverse = word.split("").reverse().join("");



const correctWord = words.find(item=>

item === word || item === reverse

);



if(correctWord && !found.includes(correctWord)){



const newFound=[

...found,

correctWord

];



setFound(newFound);



setFoundCells(prev=>[

...new Set([

...prev,

...cells

])

]);




if(newFound.length === words.length){

setGameComplete(true);

}



}



setSelected([]);

}




return (

<Page>

<Header>


<Logo>

<img src="/logo.png" alt="Logo"/>

</Logo>



<GameTitle>

Caça-palavras

</GameTitle>



<BackButton
onClick={() => window.location.href="/"}
>

 <FaArrowLeft /> Voltar

</BackButton>



<ParticipateButton onClick={() => window.location.href="/login"}>

<span className="desktopText">
  Participar do Slam
</span>

<span className="mobileText">
  Participar
</span>

<FaArrowRight />

</ParticipateButton>



</Header>



<Container>


<LeftSide>


<Title>
O que é o Slam?
</Title>



<Text>

O <b>Slam</b> Interescolar é uma competição de <b>poesia</b> falada que reúne estudantes de diferentes escolas para compartilharem suas ideias, <b>sentimentos</b> e vivências por meio da <b>arte</b> e da palavra.

<br/><br/>

Além de incentivar a <b>escrita</b> e a <b>oralidade</b>, a iniciativa fortalece a autoestima, o pensamento crítico e o respeito. Entre <b>rimas</b>, emoções e <b>performances</b>, os jovens desenvolvem <b>confiança</b> e ampliam suas formas de <b>expressão</b>.

</Text>


<FindBox>

<h3>
Encontre:
</h3>


<Words>


{

words.map(word=>(


<Word

key={word}

found={found.includes(word)}

>

{word}

</Word>


))

}


</Words>


</FindBox>



</LeftSide>




<RightSide>


<Board finished={gameComplete}>


{

board.map((row,i)=>(


<Row key={i}>


{

row.map((letter,j)=>(


<Letter


type="button"


key={j}



active={

selected.includes(`${i}-${j}`)

}



found={

foundCells.includes(`${i}-${j}`)

}




onClick={()=>selectLetter(i,j)}



>

{letter}


</Letter>



))


}



</Row>


))


}



</Board>



{

gameComplete && (

<Success>

Parabéns! Você encontrou todas as palavras!

</Success>

)


}



</RightSide>



</Container>



</Page>

)

}