/**
 * Displays a game menu
 * use game.state.start('level') to go levelState
 */
var menuState = {
  create: function() {
     title = game.add.sprite(400, 300, 'title');

     menubutton = game.add.button(game.world.centerX, game.world.centerY, 'button');
     menubutton.anchor.setTo(0.5,0.5);
     menubutton.onInputUp.add(this.startGame);
     if (menubutton.onInputUp){
       game.state.start('level')
     }

     //button = game.add.button(game.world.centerX, game.world.centerY, 'button');
    // button.onInputUp.add(myFunction)
      // game.state.start('load')


    // create the scene
   },

   // this is how you write a function
   // note the comma after the } above
   // see that variables go in the brackets still
   // to use this function in collision detection, write this.exampleFunction
   // to call it manually, write this.exampleFunction(1, 2)
   startGame: function() {
     game.state.start('level')
   }

};
