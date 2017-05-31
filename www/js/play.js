playGame={
	 create:function() {
    platform = game.add.sprite(780,50,'platform');
    	bg = game.add.sprite(0,0, "bg");

    	bg3 = game.add.tileSprite(0,
            game.height - game.cache.getImage("bg3").height,
         	game.width,
            game.cache.getImage("bg3").height,
            "bg3");
       
        buttonUp = game.add.button(400,500,"up", pushUp);
        buttonDown = game.add.button(230,500,"down", pushDown);

    game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.scale.forceLascape = true;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    

    player = game.add.sprite(670,450,'ninja');
    player.scale.x = 1.4;
    player.scale.y = 1.4;
    
    player.animations.add('walk-right',[0,1,2],15,true);
    player.animations.add('walk-left',[3,4,5],10,true);
    keyboard = game.input.keyboard.createCursorKeys();
    
    star = game.add.group();
    star.enableBody = true;
	createStars(23000);
	h1 = game.add.image(70,287,"h1");
	ai1 = game.add.group();
    ai1.enableBody = true;
	createAi1s(5000);
    h2 = game.add.image(305,270,'h2');
	ai2 = game.add.group();
    ai2.enableBody = true;
	createAi2s(21700);
	h3 = game.add.image(330,410,"h3");	
	ai3 = game.add.group();
    ai3.enableBody = true;
	createAi3s(11870);
	h4 = game.add.image(475,447,"h4");
	ai4 = game.add.group();
    ai4.enableBody = true;
	createAi4s(16623);
	h5 = game.add.image(20,440,"h5");
	ai5 = game.add.group();
    ai5.enableBody = true;
	createAi5s(14322);
	h6 = game.add.image(187,375,"h6");
	ai6 = game.add.group();
    ai6.enableBody = true;
	createAi6s(14322);
	h7 = game.add.image(470,310,"h7");

	 yaymusic = game.add.audio('yay');
        //boomusic = game.add.audio('boo');
        bgmusic = game.add.audio('bgMusic');
        bgmusic.play().loopFull();
       


	game.physics.arcade.enable(platform);
    platform.body.immovable=true;
    platform.scale.y = 2;
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    // player.body.gravity.y = 10000;
    game.camera.follow(player);
    pause_label = game.add.image(100,520,'pause');

    score = game.add.text(50,15,'Score:',{font:"",fill:"magenta"});
    life = game.add.text(600,15,'Life: 3',{font:"",fill:"magenta"});
    score.fixedToCamera = true;
    hiScore = game.add.text(50,45,'High Score: '+ retrievehiScore(),{font:"",fill:"magenta"});
    hiScore.fixedToCamera = true;
	// titlepage = game.add.sprite(0,0, "title");
	//  startButton = game.add.button(game.world.centerY -0, 380, 'button', actionOnClick, this, 2, 1, 0);
	game.scale.x = 0.1
	game.scale.y = 0.1
	cursors = game.input.keyboard.createCursorKeys();
    pause_label.fixedToCamera=true;
    pause_label.scale.x=1.3;
    pause_label.scale.y=1.3;
    pause_label.inputEnabled=true;
    pause_label.events.onInputUp.add(function(){
    	game._paused=true;
    });
    game.input.onDown.add(unpause,self);

    function unpause(event){
    	if(game.paused){

    		game.paused =false;
    	}
    };


    


},
update:function() {
	game.physics.arcade.collide(platform,player);
	game.physics.arcade.overlap(platform,star,killStar);
	game.physics.arcade.overlap(platform,ai1,killAi1);
	game.physics.arcade.overlap(platform,ai2,killAi2);
	game.physics.arcade.overlap(platform,ai3,killAi3);
	game.physics.arcade.overlap(platform,ai4,killAi4);
	game.physics.arcade.overlap(platform,ai5,killAi5);
	game.physics.arcade.overlap(player,star,collectStars);
	game.physics.arcade.overlap(player,ai1,collectAi1s);
	game.physics.arcade.overlap(player,ai2,collectAi2s);
	game.physics.arcade.overlap(player,ai3,collectAi3s);
	game.physics.arcade.overlap(player,ai4,collectAi4s);
	game.physics.arcade.overlap(player,ai5,collectAi5s);
	game.physics.arcade.overlap(player,ai6,collectAi6s);

	bg3.tilePosition.x +=0.1;


	if(keyboard.left.isDown){
		player.body.velocity.x = -300;
		// player.animations.play('walk-left');
	}
	else if(keyboard.right.isDown){
		player.body.velocity.x = 1000;
		// player.body.velocity.y = -500;
		player.body.bounce.y=0.3;
		// player.animations.play('walk-right');
		
	}
	else if(keyboard.up.isDown){
		player.body.velocity.y = -3500;
		player.body.bounce.y=0.5;
		// player.animations.play('walk-right');

	}
	else if(keyboard.down.isDown){
		player.body.velocity.y = 000;
		player.body.bounce.y=0.5;
		// player.animations.play('walk-right');
		
	}
	else{
		player.body.velocity.y = 0;
		// player.body.velocity.y = 0;
		player.animations.stop();
	}
	if(keyboard.up.isDown && player.body.touching.down){
		player.body.velocity.y = -6000; 
	}
	if(player.body.touching.down){
	}
    },
}
   function actionOnClick(){
	titlepage.visible =! startButton.visible;
	startButton.destroy();
    startText = game.add.text(350,300,'Press Anywhere To Start',{ fontSize: '25px', fill: 'red' });
    game._paused=true;
	button.frame = 1;
}
function killStar(platform,star){
 	yaymusic.play();
	star.kill()
	b=b-1;
	life.text="Life: "+b;
	game._paused = true;
	if (b==0) {
		player.kill();
		// game._paused = true;
        button = game.add.button(350,300,"restart",pushRestart);
	// gameover = game.add.text(340,250,'Game Over',{fill:'red'});
	// game._paused=true;
	game.add.image(300,200,'gameover');
	if(retrievehiScore() <= a){
		localStorage.setItem("gameStorage", a);
} 	
}
}
function killAi1(platform,ai1){
 	yaymusic.play();
	ai1.kill()
		b=b-1;
	life.text="Life: "+b;
	if (b==0) {
		player.kill();
		game._paused = true;
        button = game.add.button(350,300,"restart",pushRestart);
	// gameover = game.add.text(340,250,'Game Over',{fill:'red'});
	// game._paused=true;
	game.add.image(300,200,'gameover');
	if(retrievehiScore() <= a){
		localStorage.setItem("gameStorage", a);
} 	
}
}
function killAi2(platform,ai2){
 	yaymusic.play();
	ai2.kill()
		b=b-1;
	life.text="Life: "+b;
	if (b==0) {
		player.kill();
		game._paused = true;
        button = game.add.button(350,300,"restart",pushRestart);
	// gameover = game.add.text(340,250,'Game Over',{fill:'red'});
	// game._paused=true;
	game.add.image(300,200,'gameover');
	if(retrievehiScore() <= a){
		localStorage.setItem("gameStorage", a);
} 	
}
}
function killAi3(platform,ai3){
 	yaymusic.play();
	ai3.kill()
		b=b-1;
	life.text="Life: "+b;
	if (b==0) {
		player.kill();
		game._paused = true;
        button = game.add.button(350,300,"restart",pushRestart);
	// gameover = game.add.text(340,250,'Game Over',{fill:'red'});
	// game._paused=true;
	game.add.image(300,200,'gameover');
	if(retrievehiScore() <= a){
		localStorage.setItem("gameStorage", a);
} 	
}
}
function killAi4(platform,ai4){
 	yaymusic.play();
	ai4.kill();
		b=b-1;
	life.text="Life: "+b;
	if (b==0) {
		player.kill();
		game._paused = true;
        button = game.add.button(350,300,"restart",pushRestart);
	// gameover = game.add.text(340,250,'Game Over',{fill:'red'});
	// game._paused=true;
	game.add.image(300,200,'gameover');
	if(retrievehiScore() <= a){
		localStorage.setItem("gameStorage", a);
} 	
}
}
function killAi5(platform,ai5){
   yaymusic.play();     
	ai5.kill();
		b=b-1;
	life.text="Life: "+b;
	if (b==0) {
		player.kill();
	game._paused = true;
        button = game.add.button(350,300,"restart",pushRestart);
	// gameover = game.add.text(340,250,'Game Over',{fill:'red'});
	game.add.image(300,200,'gameover');
	
	if(retrievehiScore() <= a){
		localStorage.setItem("gameStorage", a);
} 	
}
}
function killAi6(platform,ai6){
	yaymusic.play();
	ai6.kill()
		b=b-1;
	life.text="Life: "+b;
	if (b==0) {
		player.kill();
		game._paused = true;
        button = game.add.button(350,300,"restart",pushRestart);
	// gameover = game.add.text(340,250,'Game Over',{fill:'red'});
	// game._paused=true;
	game.add.image(300,200,'gameover');
	if(retrievehiScore() <= a){
		localStorage.setItem("gameStorage", a);
} 	
}
}
function collectStars(player,star){
	if(star.kill()){
		a=a+1;
		score.text="Score: "+a;
	}
	}
	function collectAi1s(player,ai1){
	if(ai1.kill()){
		a=a+1;
		score.text="Score: "+a;
	}
	}
function	 collectAi2s(player,ai2){
	if(ai2.kill()){
		a=a+1;
		score.text="Score: "+a;
	}
	}
	function collectAi3s(player,ai3){
	if(ai3.kill()){
		a=a+1;
		score.text="Score: "+a;
	}
	}
function	 collectAi4s(player,ai4){
	if(ai4.kill()){
		a=a+1;
		score.text="Score: "+a;
	}
	}
	function collectAi5s(player,ai5){
	if(ai5.kill()){
		a=a+1;
		score.text="Score: "+a;
	}
	}
function	collectAi6s(player,ai6){
	if(ai6.kill()){
		a=a+1;
		score.text="Score: "+a;
	}
	}
function createStars(time){
	setInterval(function(){
		stars = star.create(79,290,'star');
		stars.body.gravity.x = 60;
		// diamonds.body.bounce.y = 0.3;
		// diamonds.body.collideWorldBounds = true;
	},time);
}
function createAi1s(time){
	setInterval(function(){
		ai1s = ai1.create(319,285,'ai1');
		ai1s.body.gravity.x = 60;
		// diamonds.body.bounce.y = 0.3;
		// diamonds.body.collideWorldBounds = true;
	},time);
}
function createAi2s(time){
	setInterval(function(){
		ai2s = ai2.create(340,414,'ai2');
		ai2s.body.gravity.x = 60;
		// diamonds.body.bounce.y = 0.3;
		// diamonds.body.collideWorldBounds = true;
	},time);
}
function createAi3s(time){
	setInterval(function(){
		ai3s = ai3.create(488,467,'ai3');
		ai3s.body.gravity.x = 60;
		// diamonds.body.bounce.y = 0.3;
		// diamonds.body.collideWorldBounds = true;
	},time);
}
function createAi4s(time){
	setInterval(function(){
		ai4s = ai4.create(36,449,'ai4');
		ai4s.body.gravity.x = 60;
		// diamonds.body.bounce.y = 0.3;
		// diamonds.body.collideWorldBounds = true;
	},time);
}
function createAi5s(time){
	setInterval(function(){
		ai5s = ai5.create(192,375,'ai5');
		ai5s.body.gravity.x = 60;
		// diamonds.body.bounce.y = 0.3;
		// diamonds.body.collideWorldBounds = true;
	},time);
}
function createAi6s(time){
	setInterval(function(){
		ai6s = ai6.create(475,322,'ai6');
		ai6s.body.gravity.x = 60;
		// diamonds.body.bounce.y = 0.3;
		// diamonds.body.collideWorldBounds = true;
	},time);
}
function pushUp(){
		player.body.velocity.y= -350;
}
function pushDown(){
		player.body.velocity.y= 350;

}

	function retrievehiScore(){
		return ((localStorage.getItem("gameStorage") != null) || (localStorage.getItem("gameStorage") != ""))?localStorage.getItem("gameStorage"):0;
}
function pushRestart(){
	window.location.href=window.location.href;
}
    
   function actionOnClick(){
	titlepage.visible =! startButton.visible;
	startButton.destroy();
	if(player.body.touching.down){
    player.animations.play('walk-right');
    player.body.velocity.x=3000;
	}
	setTimeout(function(){
	// button.frame=0;
	},0)
	    game.camera.follow(player);
}
	