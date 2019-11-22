/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */
var levelState = {

  render: function() {
     //game.debug.body(player);
  },

   create: function() {

//this is the game world
      game.physics.startSystem(Phaser.Physics.ARCADE);
      game.world.setBounds(0,0,4000,1000);
      background  = game.add.sprite(0, 0, 'background');
      background.height = game.world.height;
      background.width = game.world.width;
      platforms = game.add.group();
      platforms.enableBody = true;
      var ground = platforms.create(0, (6300 - 500) / 6300 * game.world.height, 'ground');
        ground.body.immovable = true;
        ground.scale.setTo(400, 2);
        ground.alpha = 0;

//this is the player
      player = game.add.sprite(3800, game.world.height - 150, 'reginald');
        game.physics.arcade.enable(player);
        //player.body.bounce.y = 0.2;
        player.body.gravity.y = 1000;
        player.body.collideWorldBounds = true;
        player.animations.add('right', [1, 2, 3, 4, 3, 2], 10, true);
        player.animations.add('left', [5, 6, 7, 8, 7, 6], 10, true);
        game.camera.follow(player);

//this is the enemy
      meatloaf = game.add.sprite(3700, game.world.hieght - 150, 'meatloaf');
        game.physics.arcade.enable(meatloaf);
        meatloaf.body.gravity.y = 1000;
        meatloaf.collideWorldBounds = true;
        meatloaf.animations.add('right', [1, 2, 3, 4], 10, true);
        meatloaf.animations.add('left', [5, 6, 7, 8], 10, true);

      cursors = game.input.keyboard.createCursorKeys();

      game.camera.follow(player);

   },

   update: function() {

//this is the player movement
      var hitPlatform = game.physics.arcade.collide(player, platforms);

      player.body.velocity.x = 0;

      if (cursors.left.isDown){
        player.body.velocity.x = -150;
        player.animations.play('left');
      }

      else if (cursors.right.isDown){
        player.body.velocity.x = 150;
        player.animations.play('right');
      }

      else {
        player.animations.stop();
        player.frame = 0;
      }

      if (cursors.up.isDown && player.body.touching.down && hitPlatform){
        player.body.velocity.y = -700;
      }

//Baddie movement
     meatloaf.body.velocity.y = 0;
     meatloaf .body.velocity.x = 0;

     if (player.x < meatloaf.x) {
      meatloaf.animations.play("left");
      if (meatloaf.x - player.x < 100 && meatloaf.x > 400) {
        meatloaf.body.velocity.x = -300;
      }
    }
      else {
        meatloaf.animations.play("right");
      if (player.x - baddie.x < 100 && meatloaf.x < game.world.width) {
         meatloaf.body.velocity.x = 100;
      }
   }
 }

};
