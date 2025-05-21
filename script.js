let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-button");
let msg = document.querySelector(".msg");
let newGame = document.querySelector("#new-game");
let c = document.querySelector("#congrats-msg");

let turn0 = true
const patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turn0) {
            box.innerHTML = "O";
            turn0 = false;
        }
        else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const newgame = () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
    })
    turn0 = true;
     msg.style.visibility = "hidden";
}

reset.addEventListener("click",newgame);

checkWinner = () => {
    for(let pattern of patterns) {
        let pos1 = boxes[pattern[0]].innerText 
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3){
                msg.style.visibility = "visible";
                if (pos1 == "O"){
                    c.innerHTML = "Congrats! Winner is player 1."
                }
                else{
                    c.innerHTML = "Congrats! Winner is player 2."
                }
                    
            }
        }
    }
}

newGame.addEventListener("click", newgame);