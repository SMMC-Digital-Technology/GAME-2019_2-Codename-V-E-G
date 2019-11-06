/**
 * Displays a game menu
 * use game.state.start('level') to go levelState
 */
var menuState = {
   create: function() {
     title = this.add.text(100, 200, 'Phaser', { fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });
     title.anchor.setTo(0.5, 0.5);
      // create the scene
   },

   // this is how you write a function
   // note the comma after the } above
   // see that variables go in the brackets still
   // to use this function in collision detection, write this.exampleFunction
   // to call it manually, write this.exampleFunction(1, 2)
   exampleFunction: function(something, somethingElse) {

   }

};
