const choices=["rock","paper","scissors"]
const playerDisplay=document.getElementById("playerDisplay")
const computerDisplay=document.getElementById("computerDisplay")
const resultDisplay=document.getElementById("resultDisplay");
const playerscore=document.getElementById("playerscore")
const computerscore=document.getElementById("computerscore")
let playerscoredisplay=0;
let computerscoredisplay=0;
function playgame(playerChoice){
            const computerChoice=choices[Math.floor(Math.random()*3)]
               let result='';
   if(playerChoice===computerChoice){
    result="its a tie"

    }
    else{switch(playerChoice){
              case "rock":
             result=(computerChoice==="paper")?"You lose!":"You win!!";
          break;
              case "paper":
              result=(computerChoice==="scissors")?"You lose!":"You win!!";
           break;

               case "scissors":
               result=(computerChoice==="rock")?"You lose!":"You win!!";
         break;

   }

   

   playerDisplay.textContent=`Player's choice:${playerChoice}`}
   computerDisplay.textContent=` computer's choice:${computerChoice}`
   resultDisplay.textContent=result;
   resultDisplay.classList.remove("greentext","redtext");
   switch(result){
    
    case "You lose!":
    resultDisplay.classList.add("redtext")
    computerscoredisplay++;
    computerscore.textContent=`computerscore:${computerscoredisplay}`;
    break;
    case "You win!!":
    resultDisplay.classList.add("greentext")
    playerscoredisplay++;
    playerscore.textContent=`playerscore:${playerscoredisplay}`;
   }
 

}
// playgame();
// console.log(computerChoice)

