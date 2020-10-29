import React, { Component } from 'react';

class SimpleSteps extends Component {
	render() {
		return (
			<div className='simple-steps'>
				<p>Wystarczą 4 proste kroki</p>
				<div className='decoration'></div>
				<div className='background'>
					<div className='article'>
						<div className='icon1'></div>
						<p>Wybierz rzeczy</p>
						<p>ubrania zabawki sprzęt inne</p>
					</div>

					<div className='article'>
						<div className='icon2'></div>
						<p>Spakuj je</p>
						<p>skorzystaj z worków na śmieci</p>
					</div>
					<div className='article'>
						<div className='icon3'></div>
						<p>Zdecyduj komu chcesz pomóc</p>
						<p>wybierz zaufane miejsce</p>
					</div>
					<div className='article'>
						<div className='icon4'></div>
						<p>Zamów kuriera</p>
						<p>kurier przyjedzie w dogodnym terminie</p>
					</div>
				</div>
				<div className='rectangle'>ODDAJ RZECZY</div>
			</div>
		);
	}
}

export default SimpleSteps;
