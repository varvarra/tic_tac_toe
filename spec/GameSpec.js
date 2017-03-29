describe("Game", function(){

  var game;
  var board;
  var playerOne;
  var playerTwo;
  var ruleBook;
  // layerOne, board = new Board());}).toThrow("There should be at least two players");  // });

    beforeEach(function(){
      playerOne = new Player('Varvara', 'X');
      playerTwo = new Player('Arthur', '0');
      game = new Game(playerOne, playerTwo, board = new Board(), rulebook = new Rulebook());
    });

    it("it assigns playerOne to play first at the start", function(){
      expect(game.turn).toEqual('X');
    });

    it("lets player to play", function(){
      expect(game.play(1, 2)).toBeTruthy();
    });

    it("after one player has played, the turn is changed", function(){
      game.play(1, 2);
      expect(game.turn).toEqual('0');
    });

    it("should throw error massage if the field is outside of the board", function(){
      expect(function() {game.play(3, 2);}).toThrowError("Field is outside the board");
    });


    it("should throw error massage if the field is taken", function(){
      game.play(1, 2);
      expect(function() {game.play(1, 2);}).toThrowError("Field is taken, try another one");
    });

  });
