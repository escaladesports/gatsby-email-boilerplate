const Promise = require('bluebird')
const path = require('path')

// Create dynamic page test
exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage, createRedirect } = boundActionCreators

	// Home page
	createPage({
		path: '/',
		component: path.resolve('src/pages/index.js'),
		context: {
			productId: 7
		}
	})

}