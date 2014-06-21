describe('hello.js', function() {
  it('hello', function() {
    expect(hello('hoge')).to.be('Hello, hoge');
  });

  it('hi', function() {
    expect(hi('hoge')).to.be('Hi, hoge');
  });
});
