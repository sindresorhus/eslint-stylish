# eslint-stylish [![Build Status](https://secure.travis-ci.org/sindresorhus/eslint-stylish.png?branch=master)](http://travis-ci.org/sindresorhus/eslint-stylish)

> Stylish formatter (reporter) for [ESLint](https://github.com/nzakas/eslint/)

![screenshot](screenshot.png)

Compared to the default formatter:

![default formatter](screenshot-default-formatter.png)


## Install

Install with [npm](https://npmjs.org/package/eslint-stylish): `npm install --save-dev eslint-stylish`


## Getting started

Use it with:

#### ESLint CLI

```
eslint --format node_modules/eslint-stylish/stylish.js file.js
```

#### [grunt-eslint](https://github.com/sindresorhus/grunt-eslint/)

```js
grunt.initConfig({
	eslint: {
		options: {
			format: require('eslint-stylish')
		},
		target: ['file.js']
	}
});

grunt.loadNpmTasks('grunt-eslint');
grunt.registerTask('default', ['eslint']);
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
