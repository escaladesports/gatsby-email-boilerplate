export default function(input){

	// Array-ify
	switch(typeof input){
		case 'string':
			input = input.split(' ')
			break
		case 'number':
			input = [ input ]
			break
	}

	// Shorthand
	switch(input.length){
		case 2:
			input = [
				input[0],
				input[1],
				input[0],
				input[1],
			]
			break
		case 3:
			input = [
				input[0],
				input[1],
				input[1],
				input[2],
			]
			break
	}

	// Check for unit
	input = input.map(num => {
		if (typeof num === 'number' || Number(num) == num){
			return num + 'px'
		}
		return num
	})

	return input.join(' ')

}