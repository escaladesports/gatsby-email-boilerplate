import React, { Component, PropTypes } from 'react'

import formatProps from '../../utils/format-props'

class Td extends Component {
	static defaultProps = {
		verticalAlign: '',
		horizontalAlign: '',
		align: '',
	}

	render() {
		const props = formatProps(this.props)
		return (
			<td {...props} align={this.props.align} style={{
				textAlign: this.props.align
			}}>{this.props.children}</td>
		)
	}
}

export default Td