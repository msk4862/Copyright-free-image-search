/**
 * Shuffles array inplace
 * @param  {Array} array 
 */
function shuffleArray(array) {	
	var range = array.length;

	while (range > 1) {	
	  	var randIndex = Math.floor(Math.random() * range);	
	  	var temp = array[range - 1];	
	  	array[range - 1] = array[randIndex];	
		array[randIndex] = temp;
		
		range -= 1;
	}	
}

module.exports = shuffleArray;