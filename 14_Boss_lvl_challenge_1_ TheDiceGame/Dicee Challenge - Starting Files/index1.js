document.addEventListener('DOMContentLoaded', function() {
   for (i = 0; i < 2; i++){
          var num1 = Math.floor(Math.random()*6)+1;
          randomNumber.push(num1);
       }
       if (randonNumber[0]==1){
        document.querySelector("img1").setAttribute("src",".\images\dice1.png" );
       }
       else if (randonNumber[0]==2){
        document.querySelector(".img1").setAttribute("src",".\images\dice2.png" );
       }
       else if (randonNumber[0]==3){
        document.querySelector(".img1").setAttribute("src",".\images\dice3.png" );
       }
       else if (randonNumber[0]==4){
        document.querySelector(".img1").setAttribute("src",".\images\dice4.png" );
       }
       else if (randonNumber[0]==5){
        document.querySelector(".img1").setAttribute("src",".\images\dice5.png" );
       }
       else {
        document.querySelector(".img1").setAttribute("src",".\images\dice6.png" );
       }
    
}, false);

function randomGen(){
    randomNumber = [];
       for (i = 0; i < 2; i++){
          var num1 = Math.floor(Math.random()*6)+1;
          randomNumber.push(num1);
       }
     return randomNumber;
   }
  
  
   if (randonNumber[1]==1){
    document.setElementsByClassName("img2").src(".\images\dice1.png");
   }
   else if (randonNumber[1]==2){
    document.setElementsByClassName("img2").src(".\images\dice2.png");
   }
   else if (randonNumber[1]==3){
    document.setElementsByClassName("img2").src(".\images\dice3.png");
   }
   else if (randonNumber[1]==4){
    document.setElementsByClassName("img2").src(".\images\dice4.png");
   }
   else if (randonNumber[1]==5){
    document.setElementsByClassName("img2").src(".\images\dice5.png");
   }
   else {
    document.setElementsByClassName("img").src(".\images\dice6.png");
   }
