'use strict';
var assert = require('assert');
var chalk = require('chalk');
var eslint = require('eslint').cli;

it('should be used by ESLint', function () {
	var ret = false;
	var _log = console.log;

	console.log = function (str) {
		_log(str);

		if (/line 2   col 13  error  'require' is not defined/ig.test(chalk.stripColor(str || ''))) {
			ret = true;
		}
	}

	eslint.execute(['--format', './stylish.js', 'test.js']);
	console.log = _log;
	assert(ret);
});
