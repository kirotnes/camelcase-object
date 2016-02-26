import test from 'ava';
import fn from './';

test(t => {
	t.true(fn({'foo-bar': true}).fooBar);
});

test(t => {
	t.true(fn({"Test" : [0,1]}).test.length>0);
});

test(t => {
	t.true(fn({"Test" : {"Rass" : "hikke"}}).test.rass === "hikke");
});




