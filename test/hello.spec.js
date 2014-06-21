// based on karma demo from:
// github.com/ama-ch/karma-intro

describe('hello.js', function() {
  it('hello', function() {
    expect(hello('Jon')).toBe('Hello, Jon');
  });

  it('hi', function() {
    expect(hi('Jon')).toBe('Hi, Jon');
  });
});
