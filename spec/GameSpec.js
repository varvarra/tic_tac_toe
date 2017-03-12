describe("Game", function(){

  var game;
  var board;
  var playerOne;
  var playerTwo;

  beforeEach(function(){
    playerOne = new Player('Varvara', 'X');
    playerTwo = new Player('Arthur', '0');
  });

  it("it assigns playerOne to play first at the start", function(){
    game = new Game(playerOne, playerTwo, board = new Board());
    expect(game.turn).toEqual('X');
  });

});
