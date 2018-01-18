'use strict'
const regSpace = / /g
module.exports = (url, ...args) => {
	url = url.split('/')
	let name = url.pop()

	// Find file format
	args = args.filter(arg => {
		if (typeof arg === 'string' && arg.charAt(0) === '.') {
			name = name.split('.')
			name.pop()
			name = name.join('.') + arg
			return false
		}
		return true
	})

	// Convert arguments to URL
	args = args.map(arg => {
		if (typeof arg === 'object') {
			return arg.join(',')
		}
		return arg.replace(regSpace, '')
	})

	url.push(args.join('/'))
	return `${url.join('/')}/${name}`
}