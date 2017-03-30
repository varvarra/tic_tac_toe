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
    return board.areAllClaimed || isWinning();
  };

  Rulebook.prototype.isWinning = function() {

  };

  exports.Rulebook = Rulebook;

})(this);
