'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isTif = require('./index');

function check(filename) {
	return isTif(readChunk.sync(filename, 0, 4));
}

it('should detect TIFF from Buffer', function () {
	assert(check('fixture.tif'));
	assert(!check('fixture.png'));
});
