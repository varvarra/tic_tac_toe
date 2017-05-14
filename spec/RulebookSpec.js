describe("Rulebook", function(){
  var ruleBook;
  ruleBook = new Rulebook();
  var board;
  board = new Board();
  var player = new Player("AM", role = "X")


  it("should check the validity of Row and Column", function(){
    expect(ruleBook.isClaimedIncorrectly(3, 1)).toBe(true);
  });

  it("should know when the game is over when one player wins", function(){
      board.fields = [["O","X","X"],
                   ["","X","O"],
                   ["O","X",""]]
    expect(ruleBook.isWon(board)).toBe(true);
  });

  it("should check if game is finishesd with a Draw, not win", function(){
    board.fields = [["O","X","X"],
                    ["X","X","O"],
                    ["O","O","X"]]
        expect(ruleBook.isWon(board)).toBe(false);
        expect(ruleBook.isDraw(board)).toBe(true);
  });

});
