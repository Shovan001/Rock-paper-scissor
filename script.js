let userScore = 0;
let compScore = 0;

const choices  = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#computer-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

};

const drawGame = () =>{
    // console.log("game was draw.");
    msg.innerText = "Game is draw ! play again";
    msg.style.backgroundColor = "rgb(114, 44, 123)";

};

const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore; 
        msg.innerText = `You win the game ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose the game. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const playGame = (userChoice) => {
    //generate computer choice
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice)

    if (userChoice === compChoice) {
        //draw game
        drawGame();      
    }
    else{
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice ==="paper" ? false : true;
        }else if (userChoice === "paper"){
            //rock, scissore
           userWin = compChoice === "scossors" ? false : true;
        }else{
            //rock, paper
           userWin = compChoice === "rock" ?false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
};


choices.forEach((choice) => {
   
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});