// PLAYER 1
const userBatu = document.getElementById("userBatu");
const userKertas = document.getElementById("userKertas");
const userGunting = document.getElementById("userGunting");

// RESULT
const vs = document.querySelector(".vs");
const resultText = document.querySelector(".result-text");

// COMPUTER
const comBatu = document.getElementById("comBatu");
const comKertas = document.getElementById("comKertas");
const comGunting = document.getElementById("comGunting");

// REFRESH
const refreshPage = document.getElementById("refresh-page");


const hands = document.querySelectorAll(".hand");

class Game {
    constructor() {
        const userBatu = document.getElementById("userBatu");
        const userKertas = document.getElementById("userKertas");
        const userGunting = document.getElementById("userGunting");

    }

    remove() {

        console.log("remove class");
        console.log(userKertas);

        userKertas.classList.remove('hightlight');
        console.log(userKertas);
    }
}
const removeAll = () => {
    hands.forEach((element) => {
        element.classList.remove("highlight");
    });
};


const game = new Game();

const computer = () => {
    const comRandom = [comBatu, comKertas, comGunting];
    const random = comRandom[Math.floor(Math.random() * 3)];
    random.classList.add("highlight");
    console.log("random :" + random.id);

    return random.id
};


userKertas.onclick = () => {
    let resultPlayer = userKertas.id;
    console.log("kertas di klik");
    removeAll();
    userKertas.classList.add("highlight");
    let resultCom = computer();
    document.querySelector("#game-result .player-result").style.display = "block";
    document.querySelector("#game-result .result-text").remove();
    document.querySelector("#game-result .player-result").textContent =
        getResult(resultCom, resultPlayer);
}

userBatu.onclick = () => {
    let resultPlayer = userBatu.id;
    console.log("batu di klik");
    removeAll();
    userBatu.classList.add("highlight");
    let resultCom = computer();
    document.querySelector("#game-result .player-result").style.display = "block";
    document.querySelector("#game-result .result-text").remove();
    document.querySelector("#game-result .player-result").textContent =
        getResult(resultCom, resultPlayer);
};

userGunting.onclick = () => {
    let resultPlayer = userGunting.id;
    console.log("gunting di klik");
    removeAll();
    userGunting.classList.add("highlight");
    let resultCom = computer();
    document.querySelector("#game-result .player-result").style.display = "block";
    document.querySelector("#game-result .result-text").remove();
    document.querySelector("#game-result .player-result").textContent =
        getResult(resultCom, resultPlayer);
};

refreshPage.onclick = () => {
    console.log('refresh');
    document.location.reload(true);
}


function getResult(resultCom, resultPlayer) {

    let result = "";


    // perhitungan

    console.log("resultCom :" + resultCom);
    console.log("resultPlayer :" + resultPlayer);


    if (
        (player == "batu" && com == "gunting") ||
        (player == "gunting" && com == "kertas") ||
        (player == "kertas" && com == "batu")
    ) {
        result = "PLAYER WIN";
    } else if (
        (player == "batu" && com == "kertas") ||
        (player == "gunting" && com == "batu") ||
        (player == "kertas" && com == "gunting")
    ) {
        result = "COM WIN";
    }
    return result;
}