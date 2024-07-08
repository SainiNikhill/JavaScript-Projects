let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;

// store winning patterns

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetgame=()=>
{
    turnO=true;
    enablebtn();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        

        if(turnO){
            box.innerText="0";
            turnO=false;

        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        
        
    });
});
const disablebtn=()=>
{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enablebtn=()=>
    {
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }
const showWinner=(winner)=>
{
    msg.innerText=`congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();
};

const checkWinner=()=>{
    for(pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("winner",pos1val);

                showWinner(pos1val);
            }
        }

    }
}
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame)