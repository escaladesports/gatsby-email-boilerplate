import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

const options = {
	lang: 'en',
	dir: 'ltr', // https://www.w3.org/TR/html4/struct/dirlang.html#blocklevel-bidi
	bgColor: '#FFFFFF',
}

const propTypes = {
	headComponents: PropTypes.node.isRequired,
	body: PropTypes.node.isRequired,
	postBodyComponents: PropTypes.node.isRequired,
}

class Html extends Component {
	render() {
		return (
			<html
				lang={options.lang}
				dir={options.dir}
				xmlns='http://www.w3.org/1999/xhtml'>
				<head>
					{this.props.headComponents}
					<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
					<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
					<meta name='viewport' content='width=device-width' />
				</head>
				<body bgcolor={options.bgColor} width='100%' style={{
						'-webkit-font-smoothing': 'antialiased',
						width: '100% !important',
						background: options.bgColor,
						'-webkit-text-size-adjust': 'none',
						margin: 0,
						padding: 0,
						minWidth: '100%',
						direction: options.dir,
					}}>
					<table bgcolor={options.bgColor} id='__bodyTable__' width='100%' style={{
							'-webkit-font-smoothing': 'antialiased',
							width: '100% !important',
							background: options.bgColor,
							'-webkit-text-size-adjust': 'none',
							margin: 0,
							padding: 0,
							minWidth: '100%',
						}}>
						<tr>
							<td align='center' id='___gatsby' dangerouslySetInnerHTML={{ __html: this.props.body }} />
						</tr>
					</table>

					{this.props.postBodyComponents}
				</body>
			</html>
		)
	}
}

Html.propTypes = propTypes

module.exports = Html
