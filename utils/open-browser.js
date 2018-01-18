'use strict'
const opn = require('opn')
const urlStatusCode = require('url-status-code')

const port = 8000
const interval = 1000
const url = `http://localhost:${port}`

console.log(`Waiting for ${url} to be in use...`)
function check() {
	urlStatusCode(url, (error, code) => {
		if (code === 200) {
			console.log(`Opening ${url} in browser...`)
			opn(url)
		}
		else{
			setTimeout(check, interval)
		}
	})
}
check()