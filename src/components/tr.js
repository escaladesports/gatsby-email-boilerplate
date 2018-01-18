import React, { Component, PropTypes } from 'react'

class Tr extends Component {
	render(){
		return (
			<tr {...this.props}>{this.props.children}</tr>
		)
	}
}

export default Tr