
describe ("Player", function(){

  var player;
  beforeEach(function(){
    player = new Player('Varya', 'X');
  });
  it('can be initalized with a name', function() {
    expect(player.name).toEqual('Varya');
  });

  it('can be initalized with a role', function() {
    expect(player.role).toEqual('X');
  });
});
