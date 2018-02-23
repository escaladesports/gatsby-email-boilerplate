const meta = require('./src/meta')

const plugins = [
	'gatsby-plugin-styled-jsx-postcss',
	'gatsby-plugin-react-helmet',

	/*
	'gatsby-plugin-sharp',
	'gatsby-transformer-sharp',
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			name: 'img',
			path: `${__dirname}/src/img`,
		},
	},
	*/
]

module.exports = {
	siteMetadata: meta,
	plugins: plugins,
}
