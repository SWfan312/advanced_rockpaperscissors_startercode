// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES


var options = ['rock','scissors','paper'];

const tie = (whatever, other) => whatever === other;

const wins = {
 rock : (other) => (other === scissors),
 paper : (other) => (other === rock),
 scissors : (other) => (other === paper)
};

// DOCUMENT READY FUNCTION BELOW



$('document').ready(function() {
  console.log('test'); 
    $('#input-button').on('click', function(){
        
        console.log('click');
        
        // user answers
        var user = $('#input-text').val().toLowerCase();
        $('#user').html(user);
        
    
        
        //computer answers
        var rand = Math.floor(Math.random() * (3));
        var computer = options[rand];
        $('#computer').html(computer);
      
      if ( tie(user, computer) ) {
         $('#results').html('tie');
        } else {  
         const winner = wins[user] (computer) ? user : computer;
          $('#results').html(winner); 
        }
      
        
        
    });

});
