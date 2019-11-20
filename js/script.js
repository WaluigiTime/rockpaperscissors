// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function(){
   let userChoice = $("input").val();
   $("choice").html(`<li> ${userChoice} </li>`)

   let computerChoice = Math.random();

    
   {
    if (computerChoice < 0.33 && computerChoice < 0.0) {
        $("#text").html("You lose!");
    

    } else if (computerChoice < 0.33 && computerChoice < 0.66) {
      $("#text").html("You win!")

    } else (computerChoice < 0.66 && computerChoice < 1.0)
      $("#text").html("That's a tie bruh.")

      
    }

});



// DOCUMENT READY FUNCTION BELOW

