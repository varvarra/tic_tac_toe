// knows the rules of the game(winning pattern, ending pattern of the the game), can validate a game

(function(exports){
  function Rulebook(){
    // this.PLAYERS = 2;
    // this.MIN_FIELDS = 0;
    // this.MAX_FIELDS = 2;
  }

  Rulebook.prototype.isClaimedIncorrectly = function (row, column) {
    return (row < 0 || row > 2)||(column < 0 || column > 2);
  };

  exports.Rulebook = Rulebook;
})(this);
