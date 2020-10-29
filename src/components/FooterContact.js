import React, { Component } from 'react';

import Form from './Form';

class FooterContact extends Component {
	render() {
		return (
			<>
				<div className='footer-contact'>
					<div className='footer-contact-left'></div>
					<Form />
				</div>
				<div className='footer'>
					<div className='footer-article'></div>
					<div className='footer-article'>Copyright by Coders Lab</div>
					<div className='footer-article'>
						<div className='facebook'></div>
						<div className='instagram'></div>
					</div>
				</div>
			</>
		);
	}
}

export default FooterContact;
