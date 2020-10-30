import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu';

class HomeHeader extends Component {
	render() {
		return (
			<div className='home-header'>
				<div className='hero-image'></div>
				<div className='right'>
					<div className='top-menu'>
						<div className='login'>
							<Link className='link-to' to='/login'>
								Zaloguj
							</Link>{' '}
							<button>Załóż konto</button>
						</div>
						<Menu />
					</div>
					<div className='intro'>
						<p>
							Zacznij pomagać! <br />
							Oddaj niechciane rzeczy w zaufane ręce
						</p>
						<div className='decoration'></div>
						<div>
							<div className='rectangle'>ODDAJ RZECZY</div>
							<div className='rectangle'>ZORGANIZUJ ZBIÓRKĘ</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomeHeader;
