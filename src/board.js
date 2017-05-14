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
    var mapped = []
    for (var i = 0; i < this.LENGTH; i++){
      for (var j = 0; j < this.LENGTH; j++) {
        if (this.fields[i][j] !== "")
          {mapped.push(this.fields[i][j]) } 
      }
    }
    console.log(mapped.length)
    return mapped.length == 9
  };


  Board.prototype.rows = function () {
    return this.fields
  };

  Board.prototype.columns = function () {
    var columns = [[],[],[]];
    for (var y = 0; y<3; y++) {
      for (var x = 0; x<3; x++) { columns[x].push(this.fields[y][x]) }
    }
    return columns;
  };

  Board.prototype.diagonals = function () {
    var diagonals = [[],[]];
    for (var i = 0; i<3; i++) {
      diagonals[0].push(this.fields[i][i]);
      diagonals[1].push(this.fields[i][2-i]);
    }
    return diagonals;
  };

  exports.Board = Board;
})(this);
