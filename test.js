'use strict';
var assert = require('assert');
var chalk = require('chalk');
var eslint = require('eslint').cli;


describe('eslint-stylish', function () {
	it('should be used by ESLint', function () {
		var ret = false;
		var _log = console.log;

		console.log = function (str) {
			if (/line 2   col 0  error  'require' is not defined/ig.test(chalk.stripColor(str || ''))) {
				ret = true;
			}
		}

		eslint.execute(['--format', './stylish.js', 'test.js']);

		console.log = _log;

		assert(ret);
	});
});
