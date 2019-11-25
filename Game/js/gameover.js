/**
 * A "game over" screen for the end of the game
 */
var gameoverState = {
   create: function() {
      // create the screen

      //add button
      //gameoverbutton = game.add.button(game.world.centerX, game.world.centerY, 'gameoverbutton');
      //gameoverbutton.anchor.setTo(0.5,0.5);
      //gameoverbutton.onInputUp.add(this.buttonclick);

   },

       // create the scene
         //}
   //},
    buttonClick: function() {
     game.state.start('menu');
   }
};
