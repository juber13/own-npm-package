const add = (...nums) => {
	let sum = 0
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]
	}

	return sum
}


const multiply = (...nums) => {
	let product = 1
	for (let i = 0; i < nums.length; i++) {
		product *= nums[i]
	}

	return product
}

const subtract = (a, b) => a - b

const divide = (a, b) => a / b

const remainder = (a, b) => a % b

const removeRepetitions = (arr) => [...new Set(arr)]


const deleteKey = (obj, key) => {
	const newObj = { ...obj }
	delete newObj[key]

	return newObj
}

 
const deleteKeys = (obj, keys) => {
	const newObj = { ...obj }
	for (let i = 0; i < keys.length; i++) {
		delete newObj[keys[i]]
	}

	return newObj
}

const findPower = (a, b) => a ** b

const findSquareRoot = (a) => Math.sqrt(a);
const func = {
	add,
	multiply,
	subtract,
	divide,
	remainder,
	removeRepetitions,
	deleteKey,
	deleteKeys,
	findPower,
	findSquareRoot,
}

module.exports = func;