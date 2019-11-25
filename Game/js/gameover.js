/**
 * A "game over" screen for the end of the game
 */
var gameoverState = {
   create: function() {
      // create the screen

      gameoverbutton = game.add.button(window.innerWidth / 5, game.world.centerY, 'retrybutton', actionOnClick, this, 2, 1, 0);
      function actionOnClick(){
<<<<<<< HEAD
        game.state.start('menu')
      }
=======
        game.state.start('menu');

   }
>>>>>>> 13d95e5769d656919433bcca0927b7bded1a8a59

    }

 };
