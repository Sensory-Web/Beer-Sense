// based on karma demo from:
// github.com/ama-ch/karma-intro

describe('hello.js', function() {
  it('hello', function() {
    expect(hello('Jon')).to.be('Hello, Jon');
  });

  it('hi', function() {
    expect(hi('Jon')).to.be('Hi, Jon');
  });
});
