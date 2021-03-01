
var scores, roundScore, activePlayer, gamePlaying;
init();

document.querySelector(".image").style.display = "none";
document.querySelector(".roller__heading").addEventListener("click", function(){

    if(gamePlaying){

               //get the random number
               var dice = Math.floor(Math.random() * 6 + 1);

               // update the UX
               var myDOM  = document.querySelector(".image");
               myDOM.style.display = "block";
               myDOM.src =  dice + ".jpg";
       
                // update the roundscore if the image is not a 1
               if(dice !== 1){
                  roundScore += dice;
                  document.getElementById("current-" + activePlayer).textContent = roundScore;
                }else{
                  switchPlayer();
            
                }
    }
});

document.querySelector(".holder__heading").addEventListener("click", function(){

    if(gamePlaying){
          //1 record the result to the global score
          scores[activePlayer] += roundScore;
          document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
         //2.move to the next 
          if( scores[activePlayer] >= 30){
 
               document.querySelector("#name-" + activePlayer).textContent = "winner!!";
               document.querySelector(".image").style.display = "none";
               document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
               document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
               gamePlaying = false;
               
          }else{
               switchPlayer();
          }
    }     
});



function switchPlayer(){
    activePlayer === 0? activePlayer = 1:activePlayer = 0;
    roundScore = 0;

    document.querySelector("#current-0").textContent ="0";
    document.querySelector("#current-1").textContent = "0" ;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}

document.querySelector(".newGAME__heading").addEventListener("click",init);

function init(){

scores =[0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;


document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.getElementById("name-0").textContent = "player-1";
document.getElementById("name-1").textContent = "player-2";


document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");
document.querySelector(".image").style.display = "none";

}