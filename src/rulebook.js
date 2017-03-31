// knows the rules of the game(winning pattern, ending pattern of the the game), can validate a game

(function(exports){
  function Rulebook(){
    this.MIN_FIELDS = 0;
    this.MAX_FIELDS = 2;
  }

  Rulebook.prototype.isClaimedIncorrectly = function (row, column) {
    return (row < this.MIN_FIELDS || row > this.MAX_FIELDS)||(column < this.MIN_FIELDS || column > this.MAX_FIELDS);
  };

  Rulebook.prototype.gameFinished = function (board) {
    return board.areAllClaimed() || isWinning();
  };

  Rulebook.prototype.isWinning = function(board, role) {
    if ((board.fields[0][0] == role && board.fields[0][1] === role && board.fields[0][2] === role)||
        (board.fields[1][0] == role && board.fields[1][1] === role && board.fields[1][2] === role)||
        (board.fields[2][0] == role && board.fields[2][1] === role && board.fields[2][2] === role)||
        (board.fields[0][0] == role && board.fields[1][0] === role && board.fields[2][0] === role)||
        (board.fields[0][1] == role && board.fields[1][1] === role && board.fields[2][1] === role)||
        (board.fields[0][2] == role && board.fields[1][2] === role && board.fields[2][2] === role)||
        (board.fields[0][0] == role && board.fields[1][1] === role && board.fields[2][2] === role)||
        (board.fields[0][2] == role && board.fields[1][1] === role && board.fields[2][0] === role))
          {return true;} else {
         return false;
       }
    };

  exports.Rulebook = Rulebook;

})(this);
