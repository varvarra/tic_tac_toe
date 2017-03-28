describe("Game", function(){

  var game;
  var board;
  var playerOne;
  var playerTwo;

  beforeEach(function(){
    playerOne = new Player('Varvara', 'X');
    playerTwo = new Player('Arthur', '0');
    game = new Game(playerOne, playerTwo, board = new Board());
  });

  it("it assigns playerOne to play first at the start", function(){
    expect(game.turn).toEqual('X');
  });

  it("lets player to play", function(){
    expect(game.play).toBeDefined();
  });

  it("after one player has played, the turn is changed", function(){
    game.play();
    expect(game.turn).toEqual('0')
  });


});
