//RETURNS rock, paper, or scissors at random
function getComputerChoice(){
    // GET random number greater than or equal to 0 and less than 1
    let rand = Math.random()
    // IF number is between 0 and 1/3 return "rock"
    if(rand >= 0  && rand < 1/3){
        return "rock";
    }
    // ELSE IF number is between 1/2 and 2/3 return "paper"
    else if(rand >= 1/3 && rand < 2/3){
        return "paper";
    }
    //ELSE return scissors
    else{
        return "scissors";
    }
}
//RETURN rock, paper, or scissors based on user input
function getHumanChoice(){
    // prompt user for input
    let input;
    while(input === undefined) {
        input = prompt('please enter "r" or "rock", "p" or "paper, or "s" or "scissors": ')
        input = input.toLowerCase();
        switch(input) {
            case 'r':
            case 'rock':
                return "rock";
                break;
            case 'p':
            case 'paper':
                return "paper";
                break;
            case 's':
            case 'scissors':
                return "scissors";
                break;
            default:
                input = undefined;
                break;
        }
    }
}
//INPUT rock, paper, scissors for human and computer and display winner
function playRound(humanChoice, computerChoice) {
    // TIE if human chocie is equal to computer choice
    if(humanChoice === computerChoice){
        console.log(`You tied! ${humanChoice} = ${computerChoice}.`);
        return "tie";
    }
    // WIN if human is rock and computer is scissors
    // WIN if human is paper and computer is rock
    // WIN if human is scissors and computer is paper
    else if(humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return "win";
    }
    //LOSE otherwise
    else{
        console.log(`You lose! ${humanChoice} loses to ${computerChoice}.`);
        return "loss";
    }
}
// CALL 5 rounds of rock paper scissors
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    //DISPLAY rules
    alert("You will play rock paper scissors against a computer best of 5.");
    // play 5 rounds
    for(let i = 0; i < 5; i++){
        let cs = getHumanChoice();
        let hs = getComputerChoice();
        // GET win/loss/tie outcome from round
        let outcome = playRound(cs, hs);
        // ADD 1 to human score if win
        if(outcome === "win"){
            humanScore++;
        }
        //ADD 1 to computer score if loss
        if(outcome === "loss"){
            computerScore++;
        }
        //DO NOTHING if tie
    }
    // TIE if humanScore = computerScore
    if(humanScore === computerScore){
        console.log(`The game was a tie!\nScore: ${humanScore} - ${computerScore}`);
    }
    // WIN if humanScore > computerScore
    else if(humanScore > computerScore) {
        console.log(`Congragulations you won the game!\nScore: ${humanScore} - ${computerScore}`);
    }
    // LOSE if humanScore <computerScore
    else{
        console.log(`Sorry you lost the game!\nScore: ${humanScore} - ${computerScore}`);
    }
}
// main
playGame();

