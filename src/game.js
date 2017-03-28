//understands the processes in the game, how to play - whose turn is it, if anybody wins, and when it all ends

(function(exports){
  function Game(playerOne, playerTwo, board = new Board()){
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.board = board;
    this.turn = playerOne.role;

    this.play = function (row, column) {
      this.board.claimField(row, column, role = this.turn);
      this.changeTurn();
      return this.turn;
    };
  }


  Game.prototype.changeTurn =  function (){
    this.turn === this.playerOne.role ? this.turn = this.playerTwo.role : this.turn = this.playerOne.role;
  };


  exports.Game = Game;

})(this);
