import React from 'react'

import Block from '../components/block'

export default class Index extends React.Component {
	render() {
		let templates = JSON.parse(process.env.GATSBY_EMAIL_TEMPLATES)
		return (
			<Block>
				{Object.keys(templates).map(title => {
					let path = templates[title]
					return <ul>
						<li>
							<a href={path}>{title}</a>
						</li>
						<li>
							[ <a href={`${path}/index.html.txt`}>source</a> ]
						</li>
						<li>
							[ <a href={`${path}/index.txt`}>text</a> ]
						</li>
					</ul>
				})}
				<style jsx>{`
					ul{
						list-style-type: none;
						padding: 0;
					}
					li{
						display: inline-block;
						margin-right: 10px;
					}
					a{
						text-decoration: none;
						&:hover{
							text-decoration: underline;
						}
					}
				`}</style>
			</Block>
		)
	}
}
