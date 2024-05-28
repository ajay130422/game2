let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreFinal = document.querySelector("#user-score");
const comScoreFinal = document.querySelector("#com-score");


const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; 
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};
   
const drawGame = () => {
    console.log("The Game was Draw");
    msg.innerText= "Game was Draw. Play Again.";
    msg.style.backgroundColor = "#081b31";

};


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin)
    {
        userScore++;
        userScoreFinal.innerText = userScore;
        console.log("You Win!!!!");
        msg.innerText= `You Win! :) Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }
    else
    {
        comScore++;
        comScoreFinal.innerText = comScore;
        console.log("You lose :(");
        msg.innerText= `You Lost! :( Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}; 

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = generateCompChoice();
    console.log("Computer choice =", compChoice);

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper" ? flase : true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "rock" ? true : false;
        }
        else
        {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }


};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked" , userChoice);     
        playGame(userChoice);     
    });
});