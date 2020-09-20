
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
 
            (Hint: Always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. 

           (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
           
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1.

          (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
var scores,roundScore,previousScore ,ActivePlayer;


scores=[0,0];
ActivePlayer=0;
roundScore=0;
gamePlaying=true;
previousScore=0;


document.querySelector('.dice').style.display='none';


document.querySelector('.btn-roll').addEventListener('click',function (){
    
    //1.random no.
    //2.display the result
    //3.update the round score If the rolled number
    //    was NOT 1
    if(gamePlaying){

        var dice=Math.floor(Math.random()*6 +1);
        
        var diceDOM=document.querySelector('.dice');
        
        diceDOM.style.display='block';
        diceDOM.src='dice-' + dice + '.png';
        
        if(dice!==1){
            
            roundScore+=dice;
            document.getElementById('current-'+ActivePlayer).textContent=roundScore;
        }
        else if(dice===6 && previousScore ===6){
            scores[ActivePlayer]=0;
            nextPlayer();

        }
        else{
            scores[ActivePlayer]=0;
            nextPlayer();
            
            
        }
        previousScore=dice;
        
    }
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
   if(gamePlaying){

       //add current score to global score
       var Active=ActivePlayer;
       scores[Active]+=roundScore;
       
       //update the UI
       
       nextPlayer();
       document.getElementById('score-'+Active)
       .textContent=scores[Active];
       
       // check if player won the GAME
       
       if(scores[Active]>=20){
           document.querySelector('.player-'+Active+'-panel').classList.add('winner');
           document.querySelector('.player-'+Active+'-panel').classList.remove('active');
           document.querySelector('#name-'+Active).textContent= 'winner winner chicken dinner';
           document.querySelector('.dice').style.display='none';
           gamePlaying=false;
        }
        // else
        // nextPlayer();
        
    }
    });

function nextPlayer(){
    document.getElementById('current-'+ActivePlayer).textContent=0;
    
    document.getElementById('score-'+ActivePlayer).textContent=0;
    document.querySelector('.player-'+ActivePlayer+'-panel').classList.remove('active');
    roundScore=0;
    ActivePlayer===0?ActivePlayer=1:ActivePlayer=0;
    document.getElementById('current-'+ActivePlayer).textContent=0;
    document.querySelector('.player-'+ActivePlayer+'-panel').classList.add('active');

}



// console.log(dice);

// document.querySelector('#current-'+ActivePlayer).textContent=dice;

document.querySelector('.btn-new').addEventListener('click',function(){

    scores=[0,0];
    ActivePlayer=0;
    roundScore=0;
    gamePlaying=true;
    document.getElementById('current-0').textContent=0;
    
    document.getElementById('score-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    
    document.getElementById('score-1').textContent=0;
    document.querySelector('.player-'+0+'-panel').classList.remove('winner');
    document.querySelector('.player-'+1+'-panel').classList.remove('active');
    document.querySelector('.player-'+1+'-panel').classList.remove('winner');
    document.querySelector('.player-'+0+'-panel').classList.remove('active');
    document.querySelector('.player-'+0+'-panel').classList.add('active');
    document.querySelector('#name-'+0).textContent= 'Player-0';
    document.querySelector('#name-'+1).textContent= 'Player-1';




document.querySelector('.dice').style.display='none';

})

