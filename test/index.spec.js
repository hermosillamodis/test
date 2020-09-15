const assert = require('chai').assert;
const { hello } = require('../src/index');

describe('Index Test', function () {

  describe('Simple testing', function () {

    it('should return \'hello\' with name \'Antonio\'', function () {
      assert.equal(hello('Antonio'), 'Hello Antonio');
    });

  });

});