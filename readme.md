

> Convert object keys recursivly to camelCase using [`camelcase`](https://github.com/sindresorhus/camelcase)


## Install

```
$ npm install --save camelcase-object
```


## Usage

```js
const camelcaseObject = require('camelcase-object');

camelcaseKeys({'foo-bar': true});
//=> {fooBar: true}



const argv = require('minimist')(process.argv.slice(2));
//=> {_: [], 'foo-bar': true}

camelcaseKeys(argv);
//=> {_: [], fooBar: true}
```

