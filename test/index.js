require('chai').should();
//If you require an specific module, it will be included in the coverage test
var testModule = require('../index.js');

//simple test suite

describe('Istanbul Code Coverage', function(){

    it('should return a hello message for an specific name', function() {

        var name = 'otto';
        var result = testModule.getCoverageMessage(name);
        result.should.contain(name);
    });
});
