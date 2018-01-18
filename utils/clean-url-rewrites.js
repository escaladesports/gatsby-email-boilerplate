'use strict'
const fs = require('fs-extra')
const glob = require('globby')

glob([
		'./public/**/index.html',
		'!./public/admin/index.html',
		'!./public/static/index.html',
		'!./public/404/index.html',
	])
	.then(paths => {
		return Promise.all(paths.map(path => {
			let newPath = path.split('/')
			newPath.pop()
			newPath = newPath.join('/') + '.html'
			return fs.copy(path, newPath)
				//.then(() => fs.remove(path))
		}))
	})
	.catch(console.error)
