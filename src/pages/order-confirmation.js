import React from 'react'

import Block from '../components/block'
import Table from '../components/table'
import Tr from '../components/tr'
import Td from '../components/td'
import Footer from '../components/footer-ecommerce'

export default class Index extends React.Component {
	render() {
		return (
			<div>
				<Block padding='0 0 20 0'>
					<p>{`{{ order_msg }}`}</p>
					<p>{`Order: {{ order_id }} | Date Ordered: {{ date }}`}</p>

					<Table>
						{`{{#each products}}`}
							<Tr>
								<Td padding='5 5 5 0'>{`{{ name }}`}</Td>
								<Td padding='5' align='center'>x{`{{ qty }}`}</Td>
								<Td padding='5 0 5 5' align='right'>{`{{ price }}`}</Td>
							</Tr>
						{`{{/each}}`}
					</Table>

				</Block>
				<Table>
					<Tr>
						<Td padding='0 10 0 0'>
							<p>Billing Address</p>
							<p>{`{{ ship_name }}`}</p>
							<p>{`{{ ship_addr }}`}</p>
						</Td>
						<Td padding='0 0 0 10'>
							<p>Subtotal: {`{{ subtotal }}`}</p>
							<p>Taxes: {`{{ taxes }}`}</p>
							<p>Total: {`{{ total }}`}</p>
						</Td>
					</Tr>
				</Table>
				<Footer />
			</div>
		)
	}
}
