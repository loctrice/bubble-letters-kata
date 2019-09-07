import { expect } from 'chai';
import { Foo } from '../src/foo';

describe('Foo', () => {
  describe('foo method', () => {
    it('should return the string', () => {
      const foo: Foo = new Foo('bar');
      expect(foo.foo()).equals('Hello bar');
    });
  });
});