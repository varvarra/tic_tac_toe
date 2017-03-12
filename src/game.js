//understands the processes in the game - whose turn is it, if anybody wins, and when it all ends

(function(exports){
  function Game(playerOne, playerTwo, board = new Board()){
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.board = board;
    // this.ruleBook = ruleBook;
    this.turn = playerOne.role;
  }

  exports.Game = Game;

})(this);
