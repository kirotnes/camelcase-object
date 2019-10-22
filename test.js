import test from 'ava';
import fn from './';

test('Simple Attribute', t => {
	t.true(fn({'foo-bar': true}).fooBar);
});

test('Lowercased Attribute', t => {
	t.deepEqual(fn({"Test" : [0,1]}).test, [0, 1]);
});

test('Nested attribute', t => {
	t.true(fn({'foo-bar': {'bar-foo' : true}}).fooBar.barFoo);
});

test('Deep nesting', t => {
	t.true(fn({'foo-bar': {'bar-foo' : [{'Test': true}]}}).fooBar.barFoo[0].test);
});




