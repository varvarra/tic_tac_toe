describe("Board", function(){
  var board;
  var role;
  board = new Board();
  role = 'X';

  it("should have empty fields at initialization", function(){
    expect(board.fields).toEqual([['', '', ''], ['', '', ''], ['', '', '']]);
  });

  it("should be able to fill in the field with X or 0", function(){
    board.claimField(1, 2, role);
    expect(board.fields).toEqual([['', '', ''], ['', '', 'X'], ['', '', '']]);
  });

  it("should check if the field is already taken", function(){
    board.claimField(1, 2, role);
    board.claimField(1, 2, role);
    expect(board.isFieldTaken).toBeTruthy();
  });

  it("should check if all fields are claimed", function(){
    for (var i = 0; i < 3; i++){
      for (var j = 0; j < 3; j++) {
        board.claimField(i, j, role);
      }
    }
    console.log(board.fields);
    expect(board.areAllClaimed()).toBe(true);
  });

});
