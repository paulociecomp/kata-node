var expect = require('chai').expect;
var LuhnChecksum = require('../luhnchecksum');

describe('LuhnChecksum', function () {
  
  describe('Array', function() {
    describe('#indexOf()', function() {
      it('return -1 when the value is not present', function() {
        expect([1,2,3].indexOf(2)).to.equal(1)
      });
    });
  });


  describe('#reverNumber', function(){

  	it('inverte a numero', function(){
  		var number = LuhnChecksum.reverseNumber("23293714");

  		expect(number).to.equal("41739232");
  	})

  })

  describe('#anotherNumber', function(){
  	it('inverter um numero qualquer', function(){
  		var number = LuhnChecksum.reverseNumber("12345366");
  		expect(number).to.equal("66354321");
  	})
  })

  describe('#multiplyByTwo', function(){
  	it('multiply by two jumping one spot', function(){
  		var number = LuhnChecksum.multiplyByTwo("41739232")
  		expect(number).to.equal("81539262")
  	});

  	it("#multiplyByTwoANotherNumber", function(){
  		var number = LuhnChecksum.multiplyByTwo('66354321')
  		expect(number).to.equal('36658341')
  	});

	});

  describe('#sumall', function(){
  	it('sum all numbers da porra toda', function(){
  		var number = LuhnChecksum.sumAll('36658341');
  		expect(number).to.equal('36');
  	})
  	it('sum all qualquer number', function(){
  		var number = LuhnChecksum.sumAll('11111222');
  		expect(number).to.equal('11');
  	})

  })
  describe('#mult10', function(){
  	it('verify what 10 multiple is next to sumall', function(){
  		var number = LuhnChecksum.mult10('11');
  		expect(number).to.equal('9');
  	});
  });
})