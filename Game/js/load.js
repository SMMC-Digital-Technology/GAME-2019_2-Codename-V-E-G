/**
 * Use this state to load all of your assets
 */
var loadState = {
   preload: function() {
     game.load.image ('title', 'assets/title.png');
     game.load.image ('help', 'assets/help.png');
     game.load.image ('button', 'assets/button..png');


      loadingLabel = game.add.text(80, 150, 'loading...', {
         font: '30px Courier',
         fill: '#ffffff'
      });

      // load all assets
      game.load.image('background', "assets/background.png");
   },

   create: function() {
      game.state.start('level');
   }

};
