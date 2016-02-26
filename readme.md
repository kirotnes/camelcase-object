
> This project is an extension of [`camelcase-key`](https://github.com/sindresorhus/camelcase-keys) 

> Convert object keys recursivly to camelCase using [`camelcase`](https://github.com/sindresorhus/camelcase)

## Install

```
$ npm install --save camelcase-object
```

## Usage

```js
const camelcaseObject = require('camelcase-object');

camelcaseObject({'foo-bar': true});
//=> {fooBar: true}

camelcaseObject({'foo-bar': {'bar-foo' : true});
//=> {fooBar: {barFoo:true}

camelcaseObject({'foo-bar': {'bar-foo' : [{'Test': true}]}});
//=> {fooBar: {barFoo:[{test:true}]}
```

