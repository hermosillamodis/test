const assert = require('chai').assert;
const { hello, bye } = require('../src/index');

describe('Index Test', function () {

    describe('Simple testing', function () {

        it('should return \'Hello\' with name \'Antonio\'', function () {
            assert.equal(hello('Antonio'), 'Hello Antonio');
        });

        it('should return \'Bye\' with name \'Antonio\'', function () {
            assert.equal(bye('Antonio'), 'Hello Antonio');
        });

        it('should return \'Bye\' with name \'Antonio\'', function () {
            assert.equal(bye('Antonio'), 'Bye Antonio');
        });

    });

});