/**
 * Displays a game menu
 * use game.state.start('level') to go levelState
 */
var menuState = {
  create: function() {




     //menuBackground = game.add.sprite(0, 0, 'backgroundmenu')

     title = game.add.sprite(window.innerWidth / 3.4, 100, 'menutitle');

     menubutton = game.add.button(window.innerWidth / 2.3, game.world.centerY, 'menubutton', actionOnClick, this, 2, 1, 0);
     function actionOnClick(){
       game.state.start('level');
     }

      // create the scene
        }

     };

   // this is how you write a function
   // note the comma after the } above
   // see that variables go in the brackets still
   // to use this function in collision detection, write this.exampleFunction
   // to call it manually, write this.exampleFunction(1, 2)
   //exampleFunction: function(something, somethingElse) {
