
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


	var guys =['nil',bFett, dVader, chewie, solo];

console.log(guys[1].HP)


///Picking Players==================================================================
	var attacker = "";
	var defender = "";

// //Hero==========================================================================
function chooseHero(){
	$('.players').on('click', 'div', function(){
				$(this).removeClass('playerChoice');
				var attackID= $(this).data('let');
				var attacker = guys[attackID]
				$('.enemies').append($('.playerChoice'));
				// console.log("attackerHP: "+ attacker.HP);
				console.log("---------------------------------")
				console.log(this)
				console.log("attacker: "+attacker.name);
	});
};

// choose a player, empties that div and adds your choice
// the rest get dynamically added to the defender area

//choose villian is those minus selected hero


// //Villian===============================================================
function chooseVillian(){
	$('.enemies').on('click','div', function(){
					$(this).removeClass('playerChoice')
					$('#defender').append(this);
					var defendID = $(this).data("let")
					var defender = guys[defendID]
					console.log("defender: "+defender.name)

				});
	
};
//Attack Function===================================================================
function attacking (player1, player2){
	$('#attack').on('click',function(){
	console.log(player1.name +("1"));
	console.log(player2.name +('2'))
		player2.HP= player2.HP - player1.AP;
		player1.HP = player1.HP - player2.counter;
		player1.AP+=player1.AP;

		console.log(player1.HP);
		console.log(player2.HP);

		if(player2.HP<=0){
			$('.enemy').empty();
		};
	});
};

//Play Game=====================================================
function playGame(){
	chooseHero();
	chooseVillian();
	if(attacker.name!= 'undefined' && defender.name != 'undefined'){
		$('#attack').on('click',function(){
		console.log('attack')
				attacking(attacker, defender);
				console.log("attacker: " +attacker);
				console.log("defender: "+ defender);
			});

	}

	

};

$(document).ready(function(){
	// playGame();


			$('.players').on('click', 'div', function(){
				$(this).removeClass('playerChoice');
				var attackID= $(this).data('let');
				console.log($(this).data('let'));
				console.log(guys[attackID]);
				// var attacker = $('.players').attr("data-let");
				var attacker = guys[attackID]
				$('.enemies').append($('.playerChoice'));
				console.log("attacker: "+attacker.HP);
				// console.log("attackerHP: "+ attacker.HP);
				console.log("---------------------------------")
				console.log(this)
				
});

				$('.enemies').on('click','div', function(){
					$(this).removeClass('playerChoice')
					$('#defender').append(this);
					var defendID = $(this).data("let")
					var defender = guys[defendID]
					console.log("defender: "+defender.HP)
					
				});

					$('#attack').on('click',function(){
						console.log('attack')
						attacking(attacker, defender);
						console.log("attacker: " +attacker);
						console.log("defender: "+ defender);
					});


	


});