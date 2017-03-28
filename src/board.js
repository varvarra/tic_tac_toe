// knows the state of fields of the board: if they are claimed, how to claim a field
//
(function(exports){
  function Board(){
    this.fields = [['', '', ''], ['', '', ''], ['', '', '']];
  }

  Board.prototype.claimField = function (row, column, role) {
    this.fields[row][column] = role;
    return this.fields;
  };

  Board.prototype.isFieldTaken = function(row, column) {
    var message = 'Field is taken, try another one';
    return this.fields[row][column] !== '';
  };


  exports.Board = Board;
})(this);
