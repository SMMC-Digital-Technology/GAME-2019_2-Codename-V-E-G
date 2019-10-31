/**
 * Displays a game menu
 * use game.state.start('level') to go levelState
 */
var menuState = {
   create: function() {
     title = game.add.text(game.world.centerX, game.world.centerY-100, 'Codename-V-E-G', ) {font: '50px Arial', fill: '#00ff00'});
     title.anchor.setTo(0.5, 0.5);

     help = game.add.text(80, game.world.centerY+50, '', {font: '25px Arial', fill: '#ffffff'});
     helpText = 'Use WASD to move \n';
     helpText += 'protect the cities from the meteors';
     help.text = helpText;
      // create the scene
   },

   // this is how you write a function
   // note the comma after the } above
   // see that variables go in the brackets still
   // to use this function in collision detection, write this.exampleFunction
   // to call it manually, write this.exampleFunction(1, 2)
   exampleFunction: function(something, somethingElse) {

   }

};
