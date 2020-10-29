import React, { Component } from 'react';

import Login from './Login';
import Menu from './Menu';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import SimpleSteps from './SimpleSteps';
import AboutUs from './AboutUs';
import FooterContact from './FooterContact';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div className='home'>
				<HomeHeader>
					<Menu />
				</HomeHeader>
				<HomeThreeColumns />
				<SimpleSteps />
				<AboutUs />
				<FooterContact />
				{/* <Link to="/login">Go to login</Link>*/}
			</div>
		);
	}
}

export default Home;
