const Promise = require('bluebird')
const { resolve, parse } = require('path')
const glob = require('globby')
const { titleCase } = require('change-case')

// Create dynamic page test
exports.createPages = async ({ boundActionCreators, graphql }) => {

	let pagePaths = await glob(`./src/pages/**/*.js`)
	let pageObj = {}
	pagePaths.forEach(path => {
		path = path.replace(`./src/pages`, ``).replace(/.js$/i, '')
		let name = parse(path).name
		if(name === 'index') return
		name = titleCase(name)
		pageObj[name] = path
	})
	process.env.GATSBY_EMAIL_TEMPLATES = JSON.stringify(pageObj)

	const { createPage, createRedirect } = boundActionCreators

	// Home page
	createPage({
		path: '/',
		component: resolve('src/pages/index.js'),
		context: {
			productId: 7
		}
	})

}