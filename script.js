let boxes = document.querySelectorAll(".btn");
let reset= document.querySelector(".reset");
let msg = document.querySelector(".msg");
let newBtn = document.querySelector(".new");

let symbol = true;
let count = 0;
let winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const checkWinner = ()=>{
    for(let patterns of winningPatterns){
        let p1 = boxes[patterns[0]].innerText;
        let p2 = boxes[patterns[1]].innerText;
        let p3 = boxes[patterns[2]].innerText;
        if(p1 != "" &&p2 !="" && p3 !=""){
        if(p1===p2 && p2===p3){
          showMsg(p1);
        return true;
        }
     }
    }   
};

const resetB = ()=>{
    for(let box of boxes){
        box.innerText= "";
    }
    symbol =true;
    count=0;
    EnableBox();
    msg.classList.add("hide");

}

const disableBox = () =>{
    for(box of boxes){
    box.disabled = true;
    }
}

const EnableBox = () =>{
    for(box of boxes){
    box.disabled = false;
    }
}

const showMsg = (winner) =>{
    msg.innerText = `Congratulations the Winner is ${winner}`;
    msg.classList.remove("hide");
    disableBox();
}

const draw = () =>{
    msg.innerHTML = "The Game is Tie";
    msg.classList.remove("hide");
    disableBox();
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(symbol){
           box.innerText = "O";
            symbol=false;
        }
        else{
            box.innerText = "X";
            symbol=true;
        }
        box.disabled = true;
        count++;
       let isWinenr = checkWinner();

     if(count === 9 && !isWinenr){
        draw();
     }

    });
});
newBtn.addEventListener("click",resetB);
reset.addEventListener("click",resetB);