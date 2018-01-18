import React from 'react'
import { Box, Item, Span, A } from 'react-html-email'

export default class Index extends React.Component {
	render() {
		return (
			<Box>
				<Item width="50%">
					<Span>Left</Span>
				</Item>
				<Item width="50%">
					<Span>Right</Span>
				</Item>
			</Box>
		)
	}
}
