angular
.module('tttApp',['firebase'])
.controller("TTTController", TTTController)

TTTController.$inject = ['$firebase'];

function TTTController($firebase) {

	vm = this;
	vm.title = "TicTacToe";
	vm.playerOneWon = false;
	vm.playerTwoWon = false;
	vm.playersTie = false;
	vm.winningName = "";
	vm.newGame = newGame;

	//The players variable
	var playerTurn = 0;

	function Player(name) {
		this.name = name;
		this.wins = 0;
	}

	vm.playerOne = new Player("Player One");
	vm.playerTwo = new Player("Player Two");

//Design of TTT Board
	vm.tiles = [];

	function Tile(position){
		this.position = position;
		this.playerOne = false;
		this.playerTwo = false;
			this.click = function(){
				if (playerTurn % 2 == 0){
					if (!this.state){
						this.state = "x";	
						playerOneWinCheck();
						tieCheck();
						playerTurn++;
					}
				} else if (playerTurn % 2 == 1){
					if (!this.state){
						this.state = "o";
						playerTwoWinCheck();
						tieCheck();
						playerTurn++;
					}
				}
			}
		}

	for(var i = 0; i < 9; i++){
		vm.tiles.push(new Tile(i));
	}

//Winning Game Function
	function playerOneWinCheck() {
		if((vm.tiles[0].state == "x" && vm.tiles[1].state == "x" && vm.tiles[2].state == "x") ||
		(vm.tiles[3].state == "x" && vm.tiles[4].state == "x" && vm.tiles[5].state == "x") ||
		(vm.tiles[6].state == "x" && vm.tiles[7].state == "x" && vm.tiles[8].state == "x") ||
		(vm.tiles[0].state == "x" && vm.tiles[3].state == "x" && vm.tiles[6].state == "x") ||
		(vm.tiles[1].state == "x" && vm.tiles[4].state == "x" && vm.tiles[7].state == "x") ||
		(vm.tiles[2].state == "x" && vm.tiles[5].state == "x" && vm.tiles[8].state == "x") ||
		(vm.tiles[0].state == "x" && vm.tiles[4].state == "x" && vm.tiles[8].state == "x") ||
		(vm.tiles[2].state == "x" && vm.tiles[4].state == "x" && vm.tiles[6].state == "x")) {
			vm.playerOne.wins++;
			vm.playerOneWon = true;
			vm.winningName = "Player One";
		}	
	}

	function playerTwoWinCheck() {
		if((vm.tiles[0].state == "o" && vm.tiles[1].state == "o" && vm.tiles[2].state == "o") ||
		(vm.tiles[3].state == "o" && vm.tiles[4].state == "o" && vm.tiles[5].state == "o") ||
		(vm.tiles[6].state == "o" && vm.tiles[7].state == "o" && vm.tiles[8].state == "o") ||
		(vm.tiles[0].state == "o" && vm.tiles[3].state == "o" && vm.tiles[6].state == "o") ||
		(vm.tiles[1].state == "o" && vm.tiles[4].state == "o" && vm.tiles[7].state == "o") ||
		(vm.tiles[2].state == "o" && vm.tiles[5].state == "o" && vm.tiles[8].state == "o") ||
		(vm.tiles[0].state == "o" && vm.tiles[4].state == "o" && vm.tiles[8].state == "o") ||
		(vm.tiles[2].state == "o" && vm.tiles[4].state == "o" && vm.tiles[6].state == "o")){
			vm.playerTwo.wins++;
			vm.playerTwoWon = true;
			vm.winningName = "Player Two";
		}
	}

//Tie Check
		function tieCheck() {
				var check = 0;
				for(i = 0; i < 9; i++){
					if(!vm.tiles[i].state == ""){
						check++;
					}
				}
				if(check > 8){
					vm.playersTie = true;
				}
				return check;
					var gameIsTie = true;
			}

//Modal Popup
		function modalPopup() {
			playerOneWon = false;
			playerTwoWon = false;
		}

		function newGame() {
			console.log("High");
			vm.winningName = "";
			vm.playersTie = false;
			for(i = 0; i < 9; i++) {
				vm.tiles[i].state = "";
				}
		}	

	

}