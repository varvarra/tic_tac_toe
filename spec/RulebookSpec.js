describe("Rulebook", function(){
  var ruleBook;
  ruleBook = new Rulebook();
  var board;
  board = new Board();

  it("should check the validity of Row and Column", function(){
    expect(ruleBook.isClaimedIncorrectly(3, 1)).toBe(true);
  });

  it("should check for the winning pattern vertical", function(){
    for (var i = 0; i < 1; i++){
      for (var j = 0; j < 3; j++) {
        board.claimField(i, j, role);
      }
    }
    expect(ruleBook.isWinning(board, 'X')).toBe(true);
  });

  //
  // it("should know that the game is over when all fields are claimed", function(){
  //
  // });
  //
  // it("should know when the game is over when one player wins", function(){
  //
  // });

});
