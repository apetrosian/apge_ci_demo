var expect = require('chai').expect;
var sinon = require('sinon');

var jsPath = '../../../apiproxy/resources/jsc/guid.js';

var mockFactory = require('./common/mockFactory.js');
var moduleLoader = require('./common/moduleLoader.js');

// var guid = require('../../apiproxy/resources/jsc/guid.js');

describe('feature: generate guid', function() {

	it('should generate valud guid', function(done) {

    moduleLoader.load(jsPath, function(err) {

      expect(err).to.be.undefined;

    });

		done();
	});
})
