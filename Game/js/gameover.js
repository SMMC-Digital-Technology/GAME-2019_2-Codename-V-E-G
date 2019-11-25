/**
 * A "game over" screen for the end of the game
 */
var gameoverState = {
   create: function() {
      // create the screen
      gameoverBackground = game.add.sprite(0, 0, 'gameoverbackground')

      //add button
      retrybutton = game.add.button(window.innerWidth / 2.3, game.world.centerY, 'retrybutton', actionOnClick, this, 2, 1, 0);
      function actionOnClick(){
        game.state.start('menu')
      }

    }

 };
