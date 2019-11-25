/**
 * A single level of the game.
 * You will need multiple copies of this for each level you
 * want to include.
 * Make sure they have different file names and different state names.
 * level2State etc will work fine
 */
var levelState = {

  render: function() {
  },

   create: function() {

//this is the game world

      game.physics.startSystem(Phaser.Physics.ARCADE);
      game.world.setBounds(0,0,4000,1000);
      background  = game.add.sprite(0, 0, 'background');
      background.height = game.world.height;
      background.width = game.world.width;

      paper = game.add.group();
      paper.enableBody = true;
      paper1 = paper.create(1700, game.world.height - 309, 'paper')
      paper1.body.immovable = true
      paper1.alpha = 100
      paper2 = paper.create()

      platforms = game.add.group();
      platforms.enableBody = true;
      platforms.immovable = true;

      desk = game.add.group();
      desk.enableBody = true;

      var ground = platforms.create(0, (6300 - 500) / 6300 * game.world.height, 'ground');
        ground.body.immovable = true;
        ground.scale.setTo(10, 1);
        ground.alpha = 0;

      end = game.add.group();
      end.enableBody = true;
      end1 = end.create(3900, 0, 'end1');
        end1.body.immovable = true;
        end1.scale.setTo(1, 1000);
        end1.alpha = 0;
      end2 = end.create(100, 0, 'end2');
        end2.body.immovable = true;
        end2.scale.setTo(1, 1000);
        end2.alpha = 0;

//part 1

      desks = platforms.create(3220, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(3120, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(3120, game.world.height - 203, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(2900, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(2900, game.world.height - 203, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(2700, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(2700, game.world.height - 203, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(2600, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(2500, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(2400, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(2300, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(2200, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(2100, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(2000, game.world.height - 203, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(2000, game.world.height - 256, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(2000, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(1800, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(1700, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(1700, game.world.height - 203, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(1700, game.world.height - 256, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(1600, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(1400, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(1400, game.world.height - 203, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(1300, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(1200, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(1100, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(1400, game.world.height - 256, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(1000, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(1000, game.world.height - 203, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(1000, game.world.height - 256, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(900, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(900, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(700, game.world.height - 203, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(700, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(600, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(600, game.world.height - 203, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(600, game.world.height - 256, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(600, game.world.height - 309, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(600, game.world.height - 362, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(500, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(700, game.world.height - 256, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(500, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(500, game.world.height - 256, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(500, game.world.height - 203, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(500, game.world.height - 309, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(500, game.world.height - 362, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(500, game.world.height - 415, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(500, game.world.height - 468, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(500, game.world.height - 521, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(400, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(400, game.world.height - 203, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(400, game.world.height - 256, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(400, game.world.height - 309, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(400, game.world.height - 362, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(400, game.world.height - 415, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(400, game.world.height - 468, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(400, game.world.height - 521, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(400, game.world.height - 574, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(400, game.world.height - 623, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(400, game.world.height - 680, 'desks');
        desks.body.immovable = true;

//part 2

      desks = platforms.create(100, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(100, game.world.height - 309, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(100, game.world.height - 362, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(100, game.world.height - 415, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(100, game.world.height - 468, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(100, game.world.height - 521, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(100, game.world.height - 574, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(100, game.world.height - 623, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(100, game.world.height - 680, 'desks');
        desks.body.immovable = true;
      desks = platforms.create(300, game.world.height - 362, 'desks');
        desks.body.immovable = true;

//part 3

      desks = desk.create(200, game.world.height - 468, 'desks');
        desks.body.immovable = true;
      desks = desk.create(300, game.world.height - 256, 'desks');
        desks.body.immovable = true;
      desks = desk.create(300, game.world.height - 680, 'desks');
        desks.body.immovable = true;
      desks = desk.create(200, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = desk.create(300, game.world.height - 150, 'desks');
        desks.body.immovable = true;
      desks = desk.create(1, game.world.height - 150, 'desks');
        desks.body.immovable = true;

    //  desks = platforms.create(0, game.world.height - 150, 'desks');
      //  desks.body.immovable = true;
    //  desks = platforms.create(600, game.world.height - 203, 'desks');
      //  desks.body.immovable = true;






      cursors = game.input.keyboard.createCursorKeys();

//this is the player
      player = game.add.sprite(3800, game.world.height - 150, 'reginald');
        game.physics.arcade.enable(player);
        player.body.gravity.y = 1400;
        player.body.collideWorldBounds = true;
        player.animations.add('right', [1, 2, 3, 4, 3, 2], 10, true);
        player.animations.add('left', [5, 6, 7, 8, 7, 6], 10, true);
        game.camera.follow(player);

//this is meatloaf1

      meatloaf1 = game.add.sprite(2500, 750, 'meatloaf1');
        game.physics.arcade.enable(meatloaf1);
        meatloaf1.body.gravity.y = 10000;
        meatloaf1.collideWorldBounds = true;
        meatloaf1.animations.add('right', [0, 1, 2, 3 ], 10, true);
        meatloaf1.animations.add('left', [4, 5, 6, 7], 10, true);

//this is meatloaf2

      meatloaf2 = game.add.sprite(1200, 750, 'meatloaf2');
        game.physics.arcade.enable(meatloaf2);
        meatloaf2.body.gravity.y = 10000;
        meatloaf2.collideWorldBounds = true;
        meatloaf2.animations.add('right', [0, 1, 2, 3 ], 10, true);
        meatloaf2.animations.add('left', [4, 5, 6, 7], 10, true);

//this is meatloaf 3

      meatloaf3 = game.add.sprite(600, 400, 'meatloaf3');
        game.physics.arcade.enable(meatloaf3);
        meatloaf3.body.gravity.y = 20000;
        meatloaf3.collideWorldBounds = true;
        meatloaf3.animations.add('right', [0, 1, 2, 3 ], 10, true);
        meatloaf3.animations.add('left', [4, 5, 6, 7], 10, true);

//this is the cafeteria lady

      lady = game.add.sprite(250, 750, 'lady');
        game.physics.arcade.enable(lady);
        lady.body.gravity.y = 500;
        lady.collideWorldBounds = true;
        lady.animations.add('ground', [1, 5, 3, 2, 1], 10, true)



   },

   update: function() {

//collisions


      var hitPlatform = game.physics.arcade.collide(player, platforms);
      var ladyHitPlatform = game.physics.arcade.collide(platforms, lady)
      var hitPLatformMeatloaf1 = game.physics.arcade.collide(meatloaf1, platforms);
      var hitPlatformMeatloaf2 = game.physics.arcade.collide(meatloaf2, platforms);
      var hitPlatformMeatloaf3 = game.physics.arcade.collide(meatloaf3, platforms);
      var meatloafHit1 = game.physics.arcade.collide(meatloaf1, player);
      var meatloafHit2 = game.physics.arcade.collide(meatloaf2, player);
      var meatloafHit3 = game.physics.arcade.collide(meatloaf3, player);
      var hitEnd2 = game.physics.arcade.collide(player, end2);
      var hitEnd1 = game.physics.arcade.collide(player, end1);
      var hitDesk = game.physics.arcade.collide(player, desk);


      if (player.x < 3200 && player.y > game.world.height - 150) {
      game.state.start('gameover')

      }

      if (player.body.x == 100 && player.body.y == 200) {
      game.state.start('endscreen')
      }



//this is the player movement

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

      if (cursors.up.isDown && player.body.touching.down && hitDesk){
        player.body.velocity.y = -700
      }

//meatloaf1 movement

     meatloaf1.body.velocity.y = 0;
     meatloaf1.body.velocity.x = 0;

     if (player.x < meatloaf1.x) {
       meatloaf1.animations.play("left");
       if (meatloaf1.x - player.x < 500 && meatloaf1.x > 500) {
          meatloaf1.body.velocity.x = -130;
        }

      }
      else {
        meatloaf1.animations.play("right");
        if (player.x - meatloaf1 .x < 500 && meatloaf1.x < game.world.width) {
           meatloaf1.body.velocity.x = 130;
        }

      }

    if (player.y + 200 < meatloaf1.y) {
      player.animations.stop();
      frame = 0;
      meatloaf1.body.velocity.x = 0;
    }

  if (meatloafHit1 && player.body.x > 1701) {
    player.x = 3500
    meatloaf1.body.x = 2500
    meatloaf1.body.y = 750
    meatloaf2.body.x = 1200
    meatloaf3.body.x = 600
    meatloaf3.body.y = 400
  }


//meatloaf2 movement

    meatloaf2.body.velocity.y = 0;
    meatloaf2.body.velocity.x = 0;

    if (player.x < meatloaf2.x) {
      meatloaf2.animations.play("left");
      if (meatloaf2.x - player.x < 500 && meatloaf2.x > 500) {
         meatloaf2.body.velocity.x = -180;
       }

     }
     else {
       meatloaf2.animations.play("right");
       if (player.x - meatloaf2 .x < 500 && meatloaf2.x < game.world.width) {
          meatloaf2.body.velocity.x = 180;
       }

     }

   if (player.y + 200 < meatloaf2.y) {
     player.animations.stop();
     frame = 0;
    meatloaf2.body.velocity.x = 0;
   }

   if (meatloafHit2 && player.body.x < 1700) {
     player.body.x = 1700
     player.body.y = game.world.height - 309
     meatloaf2.body.x = 1200
     meatloaf1.body.x = 2500
     meatloaf1.body.y = 750
     meatloaf3.body.x = 600
     meatloaf3.body.y = 400
     paper1.alpha = 0
   }

//meatloaf3 movement

   meatloaf3.body.velocity.y = 0;
   meatloaf3.body.velocity.x = 0;

   if (player.x < meatloaf3.x) {
     meatloaf3.animations.play("left");
     if (meatloaf3.x - player.x < 500 && meatloaf3.x > 500) {
        meatloaf3.body.velocity.x = -90;
      }

    }
    else {
      meatloaf3.animations.play("right");
      if (player.x - meatloaf3 .x < 500 && meatloaf3.x < game.world.width) {
         meatloaf3.body.velocity.x = 90;
      }

    }

  if (player.y + 200 < meatloaf3.y) {
    player.animations.stop();
    frame = 0;
    meatloaf3.body.velocity.x = 0;
  }

  if (meatloafHit3 && player.body.x < 1000) {
    player.body.x = 1000
    player.body.y = game.world.height - 309
    meatloaf3.body.x = 600
    meatloaf3.body.y = 400
    meatloaf2.body.x = 1200
    meatloaf1.body.x = 2500
    meatloaf1.body.x = 2500
    meatloaf1.body.y = 750

  }

// Lady movement
  lady.body.velocity.x = 0

  if (player.x < lady.x) {
    if (lady.x - player.x < 300 && lady.x > 300) {
       lady.body.velocity.x = -130;
     }

   }
  else {
    if (player.x - lady .x < 300 && lady.x < game.world.width && ladyHitPlatform && lady.body.touching.down) {
      lady.body.velocity.y = -10000;
     }

   }




  }
   };
