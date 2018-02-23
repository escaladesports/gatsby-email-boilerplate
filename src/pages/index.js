import React from 'react'

import Block from '../components/block'

export default class Index extends React.Component {
	render() {
		let templates = JSON.parse(process.env.GATSBY_EMAIL_TEMPLATES)
		return (
			<Block>
				{Object.keys(templates).map(title => {
					return <p>
						<a href={templates[title]}>{title}</a>
					</p>
				})}
			</Block>
		)
	}
}
