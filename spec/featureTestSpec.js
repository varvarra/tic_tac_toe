describe("Playing a game", function() {
  var game;
  var board;
  var playerOne;
  var playerTwo;
  var ruleBook;

    beforeEach(function(){
      playerOne = new Player('Varvara', 'X');
      playerTwo = new Player('Arthur', '0');
      game = new Game(playerOne, playerTwo, board = new Board(), rulebook = new Rulebook());

    });
  it("should be possible to play a normal game with a Draw result", function() {

    game.play(1,1);
    game.play(1,0);
    game.play(2,1);
    game.play(2,0);
    game.play(0,0);
    game.play(2,2);
    game.play(0,2);
    game.play(0,1);
    game.play(1,2);
    expect(rulebook.isDraw(board)).toBe(true);
    expect(rulebook.isWon(board)).toBe(false);
  });

  it("should be possible to play a game with a winner", function() {
    game.play(1,1);
    game.play(1,0);
    game.play(2,1);
    game.play(0,1);
    game.play(2,2);
    game.play(1,2);
    game.play(0,0);
    expect(rulebook.isDraw(board)).toBe(false);
    expect(rulebook.isWon(board)).toBe(true);
  });

});
