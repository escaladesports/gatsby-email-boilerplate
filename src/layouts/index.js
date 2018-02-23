import React from 'react'

import Block from '../components/block'

export default class Template extends React.Component {
	render() {
		return (

			<Block padding='20'>
				<Block align='center' padding='0 0 20 0'>
					<img src='/logo.png' />
				</Block>
				{this.props.children()}
				<style jsx global>{`
					html{
						height: 100%;
						box-sizing: border-box;
					}
					*, *:before, *:after{
						box-sizing: inherit;
					}
					body{
						position: relative;
						min-height: 100%;
						margin: 0;
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
						text-rendering: optimizeLegibility;
					}
					html, body{
						-webkit-tap-highlight-color: rgba(0,0,0,0);
					}
					img{
						max-width: 100%;
					}
					::selection{
						background-color: #333;
						color: #fff;
					}
				`}</style>
				<style jsx>{`
					img{
						width: 200px;
					}
				`}</style>
			</Block>
		)
	}
}


