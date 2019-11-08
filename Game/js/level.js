/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */
var levelState = {

  render: function() {
     game.debug.body(player);
  },

   create: function() {

      game.physics.startSystem(Phaser.Physics.ARCADE);
      game.world.setBounds(0,0,4000,1000);
      background  = game.add.sprite(0, 0, 'background');
      background.height = game.world.height;
      background.width = game.world.width;
      platforms = game.add.group();
      platforms.enableBody = true;
      var ground = platforms.create(0, game.world.heght - 64, 'ground');
        ground.scale.setTo(2, 2);
        ground.body.immovable = true;

      player = game.add.sprite(32, game.world.height - 150, 'reginald')
        game.physics.arcade.enable(player);
        //player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;

      cursors = game.input.keyboard.createCursorKeys();
      game.camera.follow(player);

   },

   update: function() {
      player.body.velocity.x = 0;
      if (cursors.left.isDown){
        player.body.velocity.x = -150;
      }
      if (cursors.right.isDown){
        player.body.velocity.x = 150;
      }
   },

   // this is how you write a function
   // note the comma after the } above
   // see that variables go in the brackets still
   // to use this function in collision detection, write this.exampleFunction
   // to call it manually, write this.exampleFunction(1, 2)
   exampleFunction: function(something, somethingElse) {

   }

};
