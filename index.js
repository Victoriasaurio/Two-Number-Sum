function twoNumberSum(array, targetSum) {
	let sum = 0
	for(let data in array){
		let suma = Number(data) + 1
		for(let i=suma; i<array.length; i++){
			sum = array[data] + array[i]
			if(sum === targetSum) {
				return console.log([array[data], array[i]])
			}
		}
	}
	return console.log([])
  // Write your code here.
}

twoNumberSum([3,5,-4,8,11,1,-1,6], 2)

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
