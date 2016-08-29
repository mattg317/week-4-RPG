
	function Player(name, HP,AP){
		this.name=name;
		this.HP= HP; //Health POints
		this.AP= AP; //Attack POints
		this.counter= AP; //counter attack
	}
	var bFett= new Player("Bobba Fett", 100, 20)
	var dVader= new Player("Darth Vader", 100, 20);
	var chewie= new Player("Chewbacca", 100,20);
	var solo= new Player("Han solo", 100,20);

	console.log(solo.HP)

$(document).ready(function(){
//Attack Function===================================================================
function attacking (player1, player2){
		player2.HP= player2.HP - player1.AP;
		player1.HP = player1.HP - player2.counter;
		player1.AP+=player1.AP;
	};

///Picking Players==================================================================
	console.log("hey")
	$('.players').on('click', function(){
		$(this).removeClass('playerChoice');
		var attacker = $('.players').attr("data-let");
		$('#enemies').append($('.playerChoice').removeClass('players'));
		console.log("attacker: "+attacker);
		console.log("attackerHP: "+attacker.HP);


		$('.playerChoice').on('click', function(){
			$(this).removeClass('playerChoice')
			$('#defender').append(this);
			var defender =$(this).data("let")
			console.log("defender: "+defender.HP)

		});
		$('#attack').on('click',function(){
		attacking(attacker, defender);
		console.log("bfett: " +attacker.HP);
		console.log("solo: "+ defender.HP);
	});
});


});