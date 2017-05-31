var w = 800,h = 600;
var player, keyboard, cursors, apple, apples,cherry, cherrys,lemon,lemons, platform,GameOver,score, hiScore, life;
var titlepage;
var startButton;
var restartButton;
var ai1, ai1s, ai2, ai2s, ai3, ai3s, ai4, ai4s, ai5, ai5s,ai6,ai6s, star, stars;
var playing = false;
var bw = 4000, bg;
var b=3,a = 0, button, gameover,pause;
var bgmusic, loopAudio, boomusic, yaymusic;
var hi,h2,h3,h4,h5,h6,h7;

var game = new Phaser.Game(w, h, Phaser.CANVAS, '');


game.state.add('bootGame', bootGame);
game.state.add('preloadGame', preloadGame);
game.state.add('menuGame', menuGame);
game.state.add('playGame', playGame);
game.state.add('winGame', winGame);

game.state.start("bootGame");