// console.log(hello)
// let userscore =0;
// let computerscore=0;
// let a= BigInt("567")
alert("hello partner")
function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("user-choice").textContent = `Your Choice: ${userChoice}`;
    document.getElementById("computer-choice").textContent = `Computer Choice: ${computerChoice}`;

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
        
    ) {
        result = "You Win!";
    } else {
        result = "You Lose!";
    }

    document.getElementById("game-result").textContent = `Result: ${result}`;
}