import React, { Component, PropTypes } from 'react'

import Tr from './tr'
import Td from './td'
import formatProps from '../../utils/format-props'

class Table extends Component {
	static defaultProps = {
		cellSpacing: 0,
		cellPadding: 0,
		width: '100%',
	}
	render(){
		const props = formatProps(this.props)
		return (
			<table {...props}>
				<tbody>{this.props.children}</tbody>
			</table>
		)
	}
}

Table.Tr = Tr
Table.Td = Td

export default Table