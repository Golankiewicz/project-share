import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
	state = {
		username: '',
		email: '',
		message: '',
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({
			[name]: value,
		});
	};
	render() {
		return (
			<div className='form1'>
				<p>Skontaktuj się z nami</p>
				<div className='decoration'></div>
				<form>
					<div className='label-center'>
						<label htmlFor='user'>
							Wpisz swoje imię
							<input
								type='text'
								id='user'
								name='username'
								value={this.state.username}
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor='mail'>
							Wpisz swój email
							<input
								type='email'
								onChange={this.handleChange}
								id='mail'
								name='email'
								email='useremail'
							/>
						</label>
					</div>

					<label htmlFor='user'>
						Wpisz swoją wiadomość
						<textarea name='message' onChange={this.handleChange} rows='8' />
					</label>
					<button>Wyślij</button>
				</form>
				<Link to='/'>Wróć</Link>
			</div>
		);
	}
}

export default Form;
