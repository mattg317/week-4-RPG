//Set-up variable====================
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

var attacker
var defender

// Attack function==========================
function attacking (player1, player2){
		player2.HP= player2.HP - player1.AP;
		player1.HP = player1.HP - player2.counter;
		player1.AP+=player1.AP;
	};

//Check for winner function========

//Events========
$(document).ready(function(){

			$('.players').on('click', function(){
				$(this).removeClass('playerChoice');
				// console.log("this; "+this);
				var attacker = $(this)
				console.log(attacker)


    $(this).change(function () {
        this.HP = $("#firstname").val();
    });

    $("#lastname").change(function () {
        myGuy.lastname = $("#lastname").val();
    });

    // etc...
});
				///
			});
				// console.log(attacker.HP)
				$('#enemies').append($('.playerChoice').removeClass('players'));
				console.log("attacker: "+attacker);
				// console.log(this);
			// });


				$('.playerChoice').on('click', function(){
					$(this).removeClass('playerChoice')
					$('#defender').append(this);
					var defender =$(this).data("let")
					console.log("defender: "+defender.HP)
				});
		// });	

// });



// <div data-dataId="data1" id="x">
// You can use jquery to get the data now like so :

// var dataId = $('#x').attr('data-dataId');




// if data attribute equals object then use that object