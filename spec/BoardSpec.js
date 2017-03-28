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

});
