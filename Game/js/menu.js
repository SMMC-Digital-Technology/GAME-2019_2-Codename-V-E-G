/**
 * Displays a game menu
 * use game.state.start('level') to go levelState
 */
var menuState = {
  create: function() {


     title = game.add.sprite(360,0, 'menutitle');

     menubutton = game.add.button(game.world.centerX, game.world.centerY, 'menubutton', actionOnClick, this, 2, 1, 0);
     menubutton.anchor.setTo(0.5,0.5);
     function actionOnClick(){
       game.state.start('level');
     }

      // create the scene
<<<<<<< HEAD
=======
        }

     };
>>>>>>> e4f4a2774a8ed19b6e29782e9b3fa05ace35acc1

   // this is how you write a function
   // note the comma after the } above
   // see that variables go in the brackets still
   // to use this function in collision detection, write this.exampleFunction
   // to call it manually, write this.exampleFunction(1, 2)
   //exampleFunction: function(something, somethingElse) {
