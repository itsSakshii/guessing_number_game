"use strict";

let number = Math.trunc(Math.random()*20)+1;
let score = 20; 
document.querySelector('.score').textContent = score;
let highScore = 0;

    document.querySelector('.hidden-box').textContent = number;
    
document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);

//there is no input or zero
    
   
    
 if(!guess)
 {
    document.querySelector('.message').textContent = 'you cant choose empty.....';
   
    //The guessed no is equals to secret number
    
   }else if(guess === number){
    document.querySelector('.message').textContent = 'hey u guess right....';
   //  document.querySelector('body').style.background = '#60b347';
     //highScore code
   
    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
   
    }
       //The guessed no is greater than secret number
    
     }else if(guess > number){
 
    if(score > 1){
    
      document.querySelector('.message').textContent = 'number is high then hidden number...';
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.message').textContent = 'you lost the game...';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.background ='#ff0000';
   }
      //The guessed no is lower than secret number
    
 }else if(guess < number){
   if(score > 1){
      document.querySelector('.message').textContent = 'number is low then hidden number...';
      score--;
      document.querySelector('.score').textContent = score;
   }else{
      document.querySelector('.message').textContent = 'you lost the game...';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.background ='#ff0000';
   }
} 
});
document.querySelector('.again').addEventListener('click',function(){
      score = 20;
   
      document.querySelector('.message').textContent='start guessing...';
      document.querySelector('.hidden-box').textContent='?';
      document.querySelector('.guess').value='';
      document.querySelector('.score').textContent=score;
      document.querySelector('.highscore').textContent=highScore;
});
