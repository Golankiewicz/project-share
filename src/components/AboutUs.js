import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends Component {
	render() {
		return (
			<div className='about-us'>
				<div className='about-us-text'>
					<p>O nas</p>
					<div className='decoration'></div>
					<p>
						Nori grape silver beet broccoli kombu beet greens fava bean potato
						quandong celery. Bunya nuts black-eyed pea prairie turnip leek
						lentil turnip greens parsnip.
					</p>
					<div className='wrapper'>
						<div className='signature'></div>
					</div>
				</div>
				<div className='about-us-people'></div>
				<Link to='/'>Go to home</Link>
			</div>
		);
	}
}

export default AboutUs;
