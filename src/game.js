//understands the processes in the game, how to play - whose turn is it, if anybody wins, and when it all ends

(function(exports){
  function Game(playerOne, playerTwo, board = new Board(), ruleBook = new Rulebook()){
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.board = board;
    this.ruleBook = ruleBook;
    this.turn = playerOne.role;
    this.result = 'still playing';

    this.play = function (row, column) {
      if (this.ruleBook.isClaimedIncorrectly(row, column)) throw Error('Field is outside the board');
      if (this.board.isFieldTaken(row, column)) throw Error('Field is taken, try another one');
      this.board.claimField(row, column, role = this.turn, ruleBook);
      // game over if statements:
      if (this.ruleBook.isWon(board)) {
        this.result = "Game over! " + this.turn + " has won"
        return this.result
      } else if (this.ruleBook.isDraw(board)) {
          this.result = "Game over! No one has won. It's a draw!"
          return this.result
      } else {
          this.changeTurn();
          return "Now is the turn of " + this.turn;
      }
    };
  }

  Game.prototype.changeTurn =  function (){
    if (this.turn === this.playerOne.role) {
      this.turn = this.playerTwo.role;
    } else {
      this.turn = this.playerOne.role;
    }
  };

  exports.Game = Game;

})(this);
