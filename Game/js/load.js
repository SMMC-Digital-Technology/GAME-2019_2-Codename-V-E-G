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
      game.load.image('menutitle', 'assets/VEG TITLE.png');
      //game.load.image('help', 'assets/help.png');
      game.load.image('menubutton', 'assets/button.png');
      //game.load,image('backgroundmenu', 'assets/background2.png')
      game.load.spritesheet('reginald', 'assets/REGINALD BOI.png', 42, 53);
      game.load.image('ground', 'assets/platform.png');
      game.load.spritesheet('meatloaf1', 'assets/OH MY.png', 64, 64);
      game.load.spritesheet('meatloaf2', 'assets/OH MY.png', 64, 64);
      game.load.spritesheet('meatloaf3', 'assets/OH MY.png', 64, 64);
      game.load.image('desks', 'assets/New Piskel (18).png');
      game.load.image('end1', 'assets/end.png');
      game.load.image('end2', 'assets/end.png');
      game.load.image('ground2', 'assets/platform.png');
   },

   create: function() {
      game.state.start('menu');
   }

};
