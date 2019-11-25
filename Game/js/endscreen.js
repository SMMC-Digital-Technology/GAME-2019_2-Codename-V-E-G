/**
 * A "game over" screen for the end of the game
 */
var endState = {
   create: function() {
     gameoverbutton = game.add.button(window.innerWidth / 2.7, game.world.centerY, 'retrybutton', actionOnClick, this, 2, 1, 0);
     function actionOnClick(){
       game.state.start('menu')
   },

   buttonClick: function() {
   }
};
