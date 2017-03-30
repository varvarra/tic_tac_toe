// knows the state of fields of the board: if they are claimed, how to claim a field
//
(function(exports){
  function Board(){
    this.fields = [['', '', ''], ['', '', ''], ['', '', '']];
    this.LENGTH = 3;
  }

  Board.prototype.claimField = function (row, column, role) {
    this.fields[row][column] = role;
    return this.fields;
  };

  Board.prototype.isFieldTaken = function(row, column) {
    return this.fields[row][column] !== '' ;
  };

  Board.prototype.areAllClaimed = function () {
    for (var i = 0; i < this.LENGTH; i++){
      for (var j = 0; j < this.LENGTH; j++) {
        if (this.fields[i][j] !== '') {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  exports.Board = Board;
})(this);
