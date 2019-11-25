var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'game-world');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('level', levelState);
game.state.add('gameover', gameoverState);
//game.state.add('endscreen', endState);

game.global = {
<<<<<<< HEAD
  score = 0
=======

>>>>>>> e4f4a2774a8ed19b6e29782e9b3fa05ace35acc1
};


   // set variables that travel between the states here
   // eg score = 0;
   // access using game.global
   // eg game.gloabl.score
};

game.state.start('boot');
//Bruh
