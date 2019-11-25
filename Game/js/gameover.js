/**
 * A "game over" screen for the end of the game
 */
var gameoverState = {
   create: function() {
      hinttitle =

      game.add.sprite(window.innerWidth / 3.4, 100, 'gameoverTitle')

      gameoverbutton = game.add.button(window.innerWidth / 2.7, game.world.centerY, 'retrybutton', actionOnClick, this, 2, 1, 0);
      function actionOnClick(){
        game.state.start('menu')
      }

    }

 };
