module.exports = {
	reverseNumber: function(number){

		return number.split('').reverse().join('')

	},
	multiplyByTwo: function(number){

		var array = number.split('')

		for (var i = 0; i < array.length; i+=2){
			array[i] *= 2;

			if (array[i] >= 10) {
				array[i]=parseInt(array[i].toString().split('')[0])+parseInt(array[i].toString().split('')[1])
			};
		}

		return array.join('')
	},
	sumAll: function(number) {
		var sum = 0;
		number.split('').forEach(function(number) {
			sum += parseInt(number);
		})
		return sum.toString();
	},
	mult10: function(number) {
		return (10-number%10).toString();
	}
}