
let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let highest=0;
// let btn=["red","yellow","green","blue"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        // level++;
        levelUp();
    }
    // console.log(event);  
});

function levelUp(){
    userSeq=[];
    console.log(level);
    level++;

   
    h2.innerText=`Your Level is ${level}`;
    //random button choose and send flash command to btnFlash function
    
    
    let randIndex=Math.floor(Math.random()*4);
    // console.log(randIndex);
    // console.log(btns[randIndex]);
    btnFlash(btns[randIndex]);
    gameSeq.push(btns[randIndex].getAttribute("id"));
    console.log(gameSeq);
    console.log(level);
};

function userFlash(){
    let btn=this;
    console.log(this,"this is a this");
    btn.classList.add("userFlash");
        setTimeout(function(){
            btn.classList.remove("userFlash");
                // console.log("User flashing done");
        },100);
    userSeq.push(btn.getAttribute("id"));
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

function btnFlash(btn){

    // Blink one time.
    btn.classList.add("flash");
            setTimeout(function(){
                    btn.classList.remove("flash");
                    console.log("Button blinked");
                },100);
    console.log(gameSeq);

    //testing...

    //code for continuous blinking for 4 times.
    // console.log(btn);
    // count=0;
    // setInterval(function(){
    //     console.log(count);
    //     btn.classList.add("flash");
    //     setTimeout(function(){
    //         btn.classList.remove("flash");
    //         count++;
    //     },50);
    //     if(count==4){
    //         clearInterval(1);
    //         count=0;
    //     };
    //     console.log(count);
    // },100);
    // console.log(btn);
                
    // Trial loop to exucute the loop of 4
    //     for(let i=0;i<=3;i++){
    //         btn.classList.add("flash");
    //         console.log("enter",i);
    //         setTimeout(function(){
    //             btn.classList.remove("flash");
    //             console.log("exit",i);
    //     },1000);
    // };

};

// function btnPress(){
//     // console.log
//     let btn=this;
//     console.log("Button was Pressed");
//     console.log(this,"btnpress");
//     userFlash(btn);
// } 

let btns=document.querySelectorAll(".btn");
for(btn of btns){
        // if(level>0){
            btn.addEventListener("click",userFlash);
        // };
};


    
    // for(btn of btns){
    //     btn.addEventListener("click",function(){
    //         console.log(this);
    //     });
    // }
    

function checkAns(ind){
    // console.log("The current level is",level);
    // let ind=level-1;
    // console.log("the index is ",ind);
    if(userSeq[ind]==gameSeq[ind]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
            // console.log("You are go to go");
        }
    }
    else{
        if(level>highest){
            highest=level;
        }
        h2.innerHTML=`Game Over Your Score was <b>${level}<b> <br>Press any key to start again!!`;
        h3.innerText=`The Highest Score till now is ${highest}`;
        reset();
        console.log("Game Over");
    }
}

function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}