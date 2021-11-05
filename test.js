function playgame(){
    let randomNumberOne = Math.floor(Math.random()*6)+1;
    let randomImageOnePath = "images" +randomNumberOne+".png";

    let randomNumberTwo = Math.floor(Math.random()*6)+1;
    let randomImageTwoPath = "images" +randomNumberOne+".png";

    document.querySelectorAll("images")[0];
    image1.setAttribute("src", randomImageOnePath);

     document.querySelectorAll("images")[1];
    image1.setAttribute("src", randomImageTwoPath);

    if(randomNumberOne > randomNumberTwo){
        document.querySelector("h1").innerHTML = "Player One Wins"
    }
    else if(randomNumberTwo > randomNumberOne){
    document.querySelector("h1").innerHTML = "Player Two Wins";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw"
    }
}
document.querySelector("button").addEventListener("click", ("playgame"));