/**
 * A "game over" screen for the end of the game
 */
var gameoverState = {
   create: function() {
      // create the screen

      gameoverbutton = game.add.button(window.innerWidth / 2.3, game.world.centerY, 'menubutton', actionOnClick, this, 2, 1, 0);
      function actionOnClick(){
        game.state.start('menu');

   }

   }
};
