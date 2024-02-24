let started=false;
let highestScore=0;
let currentScore=0;
let level=0;
let h1=document.querySelector("h1");
let h2=document.querySelector("h2");
let gameSeq=[];
let userSeq=[];
let btnColor=["red","yellow","green","blue"];

document.addEventListener("keypress",function(){
console.log("key is pressed");
if(started===false){
    started=true;
    console.log("Game Started");
    levelup();
}
});

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level${level}`;
    //console.log(h2.innerText);
    let randomIndex=Math.floor(Math.random()*3);
    let randomColor=btnColor[randomIndex];
    let randomBtn=document.querySelector(`.${randomColor}`);
    // console.log(`random index:${randomIndex}`);
    // console.log(`random color:${randomColor}`);
    // console.log(`random button:${randomBtn}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },500);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}

function btnPress(){
   
    console.log("btn was pressed");
    console.log(this);
    let btn=this;
    let userColor=btn.getAttribute("id");
    console.log(`userColor :${userColor}`);
    userSeq.push(userColor);
    //console.log(userSeq);
    userFlash(btn);
    check(userSeq.length-1);
}

function check(index){
    if(gameSeq[index]===userSeq[index]){
        if(userSeq.length==gameSeq.length){
           setTimeout( levelup(),1000);
        }
    }
    else{
        currentScore=level;
        Score();
        h2.innerHTML=`Game over! Your Score is ${level} <br> Press any key to Start <br> Highest Score: ${highestScore} `;
        //console.log(highestScore);
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";  
        },250)
        reset();
    }
}


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    currentScore=0;
    
}
 
function Score(){
    if(highestScore==0){
        highestScore=currentScore;
        //console.log(currentScore);
       // console.log(`heightestScore: ${highestScore}`);
    }
    if(currentScore>highestScore){
        highestScore=currentScore;
     //  console.log(currentScore);
    }
        
}