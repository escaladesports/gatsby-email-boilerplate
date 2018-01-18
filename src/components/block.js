import React from 'react'
import Table, { Tr, Td } from './table'

export default class extends React.Component {
	render(){
		return (
			<Table {...this.props}>
				<Tr>
					<Td>{this.props.children}</Td>
				</Tr>
			</Table>
		)
	}
}