import React from 'react'

export default class MainTemplate extends React.Component {
	render() {
		return (
			<main>
				<div>Page template:</div>
				<div dangerouslySetInnerHTML={{ __html: page.html }} />

			</main>
		)
	}
}