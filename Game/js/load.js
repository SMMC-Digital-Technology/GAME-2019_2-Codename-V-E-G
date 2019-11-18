/**
 * Use this state to load all of your assets
 */
var loadState = {
   preload: function() {
    loadingLabel = game.add.text(80, 150, 'loading...', {
         font: '30px Courier',
         fill: '#ffffff'
      });

      // load all assets
      game.load.image('background', 'assets/background.png');
      //game.load.image('title', 'assets/VEG_TITLE.png');
      //game.load.image('help', 'assets/help.png');
      //game.load.image('button', 'assets/button.png');
      //game.load,image('backgroundmenu', 'assets/background2.png')
      game.load.spritesheet('reginald', 'assets/REGINALD BOI.png', 64, 64);
      game.load.image('ground', 'assets/platform.png');
   },

   create: function() {
      game.state.start('level');
   }

};
