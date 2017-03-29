describe("Rulebook", function(){
  var ruleBook;
  ruleBook = new Rulebook;

  it("should check the validity of Row and Column", function(){
    expect(ruleBook.isClaimedIncorrectly(3, 1)).toBe(true);
  });
  
});
