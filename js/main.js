var app = angular.module('tttApp', []);

app.controller("TTTController", ["$scope", function($scope)  {

vm = this;
vm.title = "TicTacToe";

//The players variable
var playerTurn = 0;

function Player() {
	name: "";
	wins: 0;
}

var playerOne = new Player();
var playerTwo = new Player();

playerOne.name = "Player One";
playerTwo.name = "Player Two";

//Design of Tile
function Tile(position){
	this.position = position;
	this.state = "";
	this.playerOne = false;
	this.playerTwo = false;
}

vm.tiles = [];

for(var i = 0; i < 9; i++){
	vm.tiles.push(new Tile(i));
}

//What happens when user clicks on tile
$scope.click = function(){
		console.log(this.tile);
		if (playerTurn % 2 == 0){
			if (this.tile.state == ""){
				this.tile.state = "x";
				playerTurn++;	
				playerOneWinCheck();
				tieCheck();
			}
		} else if (playerTurn % 2 == 1){
			if (this.tile.state == ""){
				this.tile.state = "o";
				playerTurn++;
				playerTwoWinCheck();
				tieCheck();
			}
			
		}
}
function resetGame() {
	for(i = 0; i < 9; i++) {
		vm.tiles[i].state = "";
	}
}


function tieCheck() {
	var check = 0;
	for(i = 0; i < 9; i++){
		if(!vm.tiles[i].state == ""){
			check++;
		}
	}
	if(check > 8){
		alert("Tie");
	}
	return check;
}

function playerOneWinCheck() {
		if(vm.tiles[0].state == "x" && vm.tiles[1].state == "x" && vm.tiles[2].state == "x"){
			alert(playerOne.name + " Wins");
			resetGame();
		}
		else if(vm.tiles[3].state == "x" && vm.tiles[4].state == "x" && vm.tiles[5].state == "x"){
			alert(playerOne.name + " Wins");
			resetGame();
		}
		else if(vm.tiles[6].state == "x" && vm.tiles[7].state == "x" && vm.tiles[8].state == "x"){
			alert(playerOne.name + " Wins");
			resetGame();
		}
		else if(vm.tiles[0].state == "x" && vm.tiles[3].state == "x" && vm.tiles[6].state == "x"){
			alert(playerOne.name + " Wins");
			resetGame();
		}
		else if(vm.tiles[1].state == "x" && vm.tiles[4].state == "x" && vm.tiles[7].state == "x"){
			alert(playerOne.name + " Wins");
			resetGame();
		}
		else if(vm.tiles[2].state == "x" && vm.tiles[5].state == "x" && vm.tiles[8].state == "x"){
			alert(playerOne.name + " Wins");
			resetGame();
		}
		else if(vm.tiles[0].state == "x" && vm.tiles[4].state == "x" && vm.tiles[8].state == "x"){
			alert(playerOne.name + " Wins");
			resetGame();
		}
		else if(vm.tiles[2].state == "x" && vm.tiles[4].state == "x" && vm.tiles[6].state == "x"){
			alert(playerOne.name + " Wins");
			resetGame();
		}
}

function playerTwoWinCheck() {
		if(vm.tiles[0].state == "o" && vm.tiles[1].state == "o" && vm.tiles[2].state == "o"){
			alert(playerTwo.name + " Wins");
			resetGame();
		}
		else if(vm.tiles[3].state == "o" && vm.tiles[4].state == "o" && vm.tiles[5].state == "o"){
			alert(playerTwo.name + " Wins");
			resetGame();
		}
		else if(vm.tiles[6].state == "o" && vm.tiles[7].state == "o" && vm.tiles[8].state == "o"){
			alert(playerTwo.name + " Wins");
			resetGame();
		}
		else if(vm.tiles[0].state == "o" && vm.tiles[3].state == "o" && vm.tiles[6].state == "o"){
			alert(playerTwo.name + " Wins");
			resetGame();
		}
		else if(vm.tiles[1].state == "o" && vm.tiles[4].state == "o" && vm.tiles[7].state == "o"){
			alert(playerTwo.name + " Wins");
			resetGame();
		}
		else if(vm.tiles[2].state == "o" && vm.tiles[5].state == "o" && vm.tiles[8].state == "o"){
			alert(playerTwo.name + " Wins");
			resetGame();
		}
		else if(vm.tiles[0].state == "o" && vm.tiles[4].state == "o" && vm.tiles[8].state == "o"){
			alert(playerTwo.name + " Wins");
			resetGame();
		}
		else if(vm.tiles[2].state == "o" && vm.tiles[4].state == "o" && vm.tiles[6].state == "o"){
			alert(playerTwo.name + " Wins");
			resetGame();
		}
}


}]);