import React from 'react'

import Table from '../components/table'
import Td from '../components/td'
import Tr from '../components/tr'

export default class Header extends React.Component {
	render(){
		return (
			<div className='footer'>
				<Table padding='40 0 0 0'>
					<Tr>
						<Td>
							<div>
								Problem with your order?
							</div>
							<div>
								<a href='tel:18004671421'>1-800-467-1421</a>
							</div>
							<div>
								<a href='mailto:customerservice@escaladesports.com'>customerservice@escaladesports.com</a>
							</div>
						</Td>
						<Td align='right' verticalAlign='bottom'>
							© {(new Date()).getFullYear()} Vuly USA
						</Td>
					</Tr>
				</Table>
				<style jsx>{`
					a{
						text-decoration: none;
					}
					.footer{
						font-size: 14px;
					}
				`}</style>
			</div>
		)
	}
}