describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.add('hello world');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
    expect(set.contains('hello world')).to.equal(true);
  });

  it('should do nothing if I try to remove a value that is not present', function() {
    set.add('Mel Gibson');
    set.add('hello world');
    set.remove('goodbye australia');
    expect(set.contains('Mel Gibson')).to.equal(true);
    expect(set.contains('hello world')).to.equal(true);
    // storage size should be 2.
    expect(Object.keys(set._storage).length === 2);
  });

  it('should do nothing if I try to add a value that is already present', function() {
    set.add('Mel Gibson');
    set.add('Mel Gibson');
    set.remove('goodbye australia');
    expect(set.contains('Mel Gibson')).to.equal(true);
    expect(set.contains('hello world')).to.equal(false);
    // storage size should be 1.
    expect(Object.keys(set._storage).length === 1);
  });

});
