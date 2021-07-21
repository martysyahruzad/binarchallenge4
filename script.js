const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const information = document.querySelector(".information");
const computerPicture = document.querySelector(".cpu");
const playerPictures = document.querySelectorAll(".playerone");

const findCpurChoice = () => {
    const cpuChoice = Math.random();
    if (cpuChoice < 0.5) return `rock`;
    if (cpuChoice >= 0.5 && cpuChoice <= 0.7) return `scissors`;
    return `kertas`;
};

const getGameResult = (playeroneChoice, cpuChoice) => {
    if (playeroneChoice == cpuChoice) return "DRAW !";
    if (playeroneChoice == "rock")
        return cpuChoice == "scissors" ? "PLAYER 1 WIN !" : "CPU WIN !";
    if (playeroneChoice == "scissors")
        return cpuChoice == "rock" ? "CPU WIN !" : "PLAYER 1 WIN !";
    if (playeroneChoice == "paper")
        return cpuChoice == "scissors" ? "CPU WIN !" : "PLAYER 1 WIN !";
};

const shufflePictures = () => {
    const pictures = ["rock", "paper", "scissor"];
    const startTime = new Date().getTime();
    let i = 5;
    setInterval(() => {
        if (new Date().getTime() - startTime > 1500) {
            clearInterval;
            return;
        }

const runTheGame = () => {
    playeronePictures.forEach((clickedPicture) => {
        clickedPicture.addEventListener("click", function () {
            const playeroneChoice = clickedPicture.className;
            const cpuChoice = findcpuChoice();
            const result = getGameResult(playeroneChoice, cpuChoice);

            shufflePictures();

            setTimeout(() => {
                information.innerText = result;
                computerPicture.setAttribute(
                    "src",
                    `assets/${cpuChoice}.png`
              );
        });
    });
};

runTheGame();
