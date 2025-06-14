//step-1
let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compScorepara = document.querySelector("#comp-score");
const userScorepara = document.querySelector("#user-score");
const resetgame = document.querySelector("#reset-btn")


//------------------step-3------------------------- generate computer choices
// if we multiply math.random() * 10 = we get  number from 9 - 0
const getComputerChoice = () =>{
   const options=["rock","paper","scissor"];
  const randIdx= Math.floor(Math.random() *3);
  return options[randIdx];

//rock,paper,,scissors
}
const drawGame =() =>{
    msg.innerText ="Game was Draw.Play Again!";
    msg.style.backgroundColor = "black"
}
//---step 4
const showWinner = (userWin, userChoice,compChoice) =>{
if(userWin){
    userScore++;
    userScorepara.innerText =userScore;
    msg.innerText = `You Win!  yours ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor ="green";

}else{
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = `You lose ${compChoice} beats ${userChoice}}`;
    msg.style.backgroundColor = "red";
}
}
//----------------step -2--------------------------
const playGame = (userChoice) =>{
//generate comp choice
const compChoice =getComputerChoice();

if(userChoice === compChoice){
drawGame();
}else{
   let userWin = true;
    if(userChoice === "rock"){
        //scissors , paper
  userWin =  compChoice === "paper"?false : true;
    }else if(userChoice === "paper"){
      //rock, scissors
      userWin = compChoice === "scissor"? false : true;  
    }else{
        //paper, rock
        userWin = compChoice ==="rock"? false : true;
    }
showWinner(userWin, userChoice, compChoice);
}
};
//----------------------------------------------------
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
     playGame(userChoice);
    })
})
