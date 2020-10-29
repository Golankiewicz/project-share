import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import '../scss/main.scss';

class Menu extends Component {
	render() {
		return (
			<div className='menu'>
				<ul>
					<li className='link-to'>Start</li>
					<li className='link-to'>O co chodzi?</li>
					<li>
						<Link className='link-to' to='/aboutus'>
							O nas
						</Link>{' '}
					</li>
					<li className='link-to'>Fundacja i organizacje</li>
					<li>
						<Link className='link-to' to='/form'>
							Kontakt
						</Link>{' '}
					</li>
				</ul>
			</div>
		);
	}
}

export default Menu;
