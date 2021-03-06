import { isSubClassOf } from "../src/utils";

test('isSubClassOf', () => {

  class Foo {}
  class Bar extends Foo {}
  class Baz extends Bar {}

  expect(isSubClassOf(Foo, Foo)).toBe(true);
  expect(isSubClassOf(Bar, Foo)).toBe(true);
  expect(isSubClassOf(Baz, Foo)).toBe(true);
  expect(isSubClassOf(Baz, Bar)).toBe(true);
  expect(isSubClassOf(Foo, Bar)).toBe(false);
  expect(isSubClassOf(Foo, Baz)).toBe(false);
})