let boxes = document.querySelectorAll(".box");
let reset_game = document.querySelector("#reset-game");
let New_game = document.querySelector("#New-game");
let msg = document.querySelector("#msg");
let msg_container = document.querySelector(".msg-container");
let container = document.querySelector(".container");
let hidden = document.querySelector(".hidden");
let hid = document.querySelector(".hid");
let main = document.querySelector("main");

main.classList.remove("hid");

let trueO = true;

let WinPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const reset = () => {
    turn0 = true;
    enableBoxes();
    msg_container.classList.add("hidden");
    main.classList.remove("hid");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(trueO){
            box.innerText = "O";
            trueO = false;
        }
        else{
            main.classList.add("X_cos");
            box.innerText = "X";
            trueO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (Winner) => {
    msg.innerText = 'Congratulations, Winner is '+ Winner;
    msg_container.classList.remove("hidden");
    main.classList.add("hid");
    disableBoxes();
};

function checkWinner() {
    for (pattern of WinPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                showWinner(pos1val);
            }
        }
    }
};

New_game.addEventListener("click", reset);
reset_game.addEventListener("click", reset);