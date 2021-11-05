const playerOneRoll = document.getElementById("playerOne");
// let playerTwoRoll= document.getElementById("myButton")
const diceimage = document.getElementById("diceimage");
const rollbutton = document.getElementById("myButton");
const playeroneMessage = document.getElementById("playeroneMessage");
const score = 0;

rollbutton.addEventListener("click", () => {
   num = Math.ceil(Math.random()*6);
    if(num === 1 && score < 20){
        
        playerOneRoll.innerText = num;
        diceimage.setAttribute("src", "images/dice1.png");
        score = 1;
        playeroneMessage.innerText = "Game Over";
    }
 else if(num === 2){
    
     playerOneRoll.innerText = num;
     diceimage.setAttribute("src", "images/dice2.png");
     score += 2;
 }
 else if(num === 3){
  
    playerOneRoll.innerText = num;
    diceimage.setAttribute("src", "images/dice3.png");
    score += 3;
}
else if(num === 4){
   
    playerOneRoll.innerText = num;
    diceimage.setAttribute("src", "images/dice4.png");
    score += 4;
}
else if(num === 5){
    
    playerOneRoll.innerText = num;
    diceimage.setAttribute("src", "images/dice5.png");
    score += 5;
}
else {
    
    playerOneRoll.innerText = num;
    diceimage.setAttribute("src", "images/dice6.png");
    score += 6;
}

});









//     let num = Math.ceil(Math.random()*6)+1
//     if(num === 1){
//     document.querySelector("images")[0];
// }
//     if (num ===2){
//         document.querySelectorAll("images")[1];
//     }
//     if (num === 3) {
//         document.querySelectorAll("images")[2];
//     }
//     if(num === 4){
//         document.querySelectorAll("images")[3];
//     }
//     if (num ===5){
//         document.querySelectorAll("images")[4];
//     } else{
//         document.querySelectorAll("images")[5];
//     }
    
// })