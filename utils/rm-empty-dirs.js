'use strict'
const deleteEmpty = require('delete-empty')

deleteEmpty('./public/', err => {
	if(err) return console.error(err)
	console.log('Deleted empty directories')
})