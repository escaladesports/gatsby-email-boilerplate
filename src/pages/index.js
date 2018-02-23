import React from 'react'
import Block from '../components/block'

export default class Index extends React.Component {
	render() {
		return (
			<Block padding='0 20'>
				<p><a href='/order-confirmation'>Order Confirmation</a></p>
				<p><a href='/shipping-confirmation'>Shipping Confirmation</a></p>
			</Block>
		)
	}
}
