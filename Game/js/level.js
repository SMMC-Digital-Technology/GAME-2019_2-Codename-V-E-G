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

      player = game.add.sprite(3800, game.world.height - 150, 'reginald');
        game.physics.arcade.enable(player);
        //player.body.bounce.y = 0.2;
        player.body.gravity.y = 1000;
        player.body.collideWorldBounds = true;
        player.animations.add('right', [1, 2, 3, 4, 3, 2], 10, true);
        player.animations.add('left', [5, 6, 7, 8, 7, 6], 10, true);
        //player.animations.add('stop', [0, 0], 10, true);

      cursors = game.input.keyboard.createCursorKeys();
      game.camera.follow(player);

   },

   update: function() {

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
        player.body.velocity.y = -700
      }
   }

};
