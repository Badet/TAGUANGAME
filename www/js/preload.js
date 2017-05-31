preloadGame={
  preload:function() {
   game.load.image('platform','img/platform.png');
	game.load.image('bg','img/bg1.png');
	game.load.image("bg3","img/bg3.png");
 game.load.image('title','img/title.png',800,600);
 game.load.image('button', 'img/button.png');
	game.load.image('pause', 'img/pause.png');
	game.load.image('star','img/p1.png');
	game.load.image('ai1','img/p2.png');
	game.load.image('ai2','img/p3.png');
	game.load.image('ai3','img/p4.png');
	game.load.image('ai4','img/p5.png');
	game.load.image('ai5','img/p6.png');
	game.load.image('ai6','img/p7.png');
	game.load.image("h1","img/h1.png");
    game.load.image("h2","img/h2.png");
    game.load.image("h3","img/h3.png");
    game.load.image("h4","img/h4.png");
    game.load.image("h5","img/h5.png");
    game.load.image("h6","img/h6.png");
    game.load.image("h7","img/h7.png");
	game.load.spritesheet('ninja','img/tricia.png',75,75);
	game.load.image("up","img/up.png");
	game.load.image("down","img/down.png");
	game.load.image("gameover","img/gameover.png");
	game.load.image("restart","img/restart.png");
	game.load.audio('bgMusic', 'audio/bgmusic.mp3');
    game.load.audio('yay', 'audio/save.mp3');
  //game.load.audio('boo', 'audio/clapping.mp3');
	

  },
  create:function() {
    game.state.start("menuGame");
  },
}