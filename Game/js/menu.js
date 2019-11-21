/**
 * Displays a game menu
 * use game.state.start('level') to go levelState
 */
var menuState = {
   create: function() {
     game.stage.backgroundColor = '#fff';
     title = game.add.sprite(400, 300, 'title');

     button = game.add.button(game.world.centerX, game.world.centerY, 'button');
   button.anchor.setTo(0.5,0.5);
   button.onInputUp.add(this.startGame);

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
