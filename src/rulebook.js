// knows the rules of the game(winning pattern, ending pattern of the the game), can validate a game

(function(exports){
  function Rulebook(){
    this.MIN_FIELDS = 0;
    this.MAX_FIELDS = 2;
    this.LENGTH = 2;
  }

  Rulebook.prototype.isClaimedIncorrectly = function (row, column) {
    return (row < this.MIN_FIELDS || row > this.MAX_FIELDS)||(column < this.MIN_FIELDS || column > this.MAX_FIELDS);
  };

  Rulebook.prototype.isDraw = function (board) {
    return !this.isWon(board) && board.areAllClaimed()
  };


  Rulebook.prototype.isWon = function(board) {
    return (checkForWin(board.diagonals()) || checkForWin(board.columns())) || checkForWin(board.rows());
  };

  function checkForWin(enumerable) {
    var result = false;
    enumerable.forEach(function(arr) {
      if (isWinPattern(arr))
        result = true;
    });
    return result;
  };

  function isWinPattern(arr){
     for (var i = 1; i<3; i++) {
        if (arr[i] === "" || arr[i] !== arr[i-1])
           return false;
     }
     return true;
  };
  exports.Rulebook = Rulebook;

})(this);
