/**
 * A "game over" screen for the end of the game
 */
var gameoverState = {
   create: function() {
      hinttitle =

      gameoverbutton = game.add.button(window.innerWidth / 2.7, game.world.centerY, 'retrybutton', actionOnClick, this, 2, 1, 0);
      function actionOnClick(){
        game.state.start('menu')
      }

    }

 };
