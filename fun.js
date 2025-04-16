let p1=Math.random();
let player1=Math.ceil(p1*6);
let p2=Math.random();
let player2=Math.ceil(p2*6);
console.log(player1);
console.log(player2);
document.querySelector(".player1").innerHTML=`<img src="./img/dice${player1}.png">`;
document.querySelector(".player2").innerHTML=`<img src="./img/dice${player2}.png">`;
if(player1>player2){
document.querySelector(".res").innerHTML="player 1 win";
}
else if(player1<player2){
    document.querySelector(".res").innerHTML="player 2 win";   
}
else{
    document.querySelector(".res").innerHTML="draw";
}
