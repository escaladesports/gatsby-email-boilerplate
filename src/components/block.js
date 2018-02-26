import React from 'react'
import Table, { Tr, Td } from './table'

export default class extends React.Component {
	static defaultProps = {
		align: 'left',
	}
	render(){
		return (
			<Table {...this.props}>
				<Tr>
					<Td align={this.props.align} style={{
						textAlign: this.props.align,
					}}>{this.props.children}</Td>
				</Tr>
			</Table>
		)
	}
}