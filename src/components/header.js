import React from 'react'

import Block from '../components/block'

export default class Header extends React.Component {
	render(){
		return (
			<Block align='center' padding='0 0 20 0'>
				<img src='/logo.png' />
				<style jsx>{`
					img{
						width: 200px;
					}
				`}</style>
			</Block>
		)
	}
}