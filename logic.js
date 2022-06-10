console.log("welcome");
let music = new Audio("music.mp3")
let turn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let Turn = "X"
let Gameover = false;

//function to change the turn
const changeTurn = () => {

    return Turn === "X" ? "0" : "X"
}

//function to check for a win
const checkwin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 5, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {

        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            Gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            gameover.play();
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${(e[3])}vw, ${(e[4])}vw) rotate(${e[5]}deg)`


        }

    })

}

//main game logic
// music.play();

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = Turn;
            Turn = changeTurn();
            turn.play();
            checkwin();

            if (!Gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
            }
        }
    })
})


//reset
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    Turn = "X"
    Gameover = false;
    gameover.play();
    // document.querySelector(".line").style.width = "0";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})