menuGame={
	create:function(){
		     game.stage.backgroundColor="#ff0";
    mainmenu = game.add.image(0,0,"title")

  	menuText  = game.add.text(game.width/2-50,game.height/2-70,"Menu",{"fill":"orange"});
    menuText.scale.x = 2;
    menuText.scale.y = 2;
    playText = game.add.text(game.width/2-50,game.height/2,"Play",{"fill":"pink"});
    button = game.add.button(game.width/2-50,game.height/2,"button",this.playGo);
		  


	},
	update:function(){
		
	},

playGo: function(){
    game.state.start("playGame");
},
}