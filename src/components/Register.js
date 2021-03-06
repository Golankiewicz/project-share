import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
	state = {
		email: '',
		password: '',
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
				<p>Załóż konto</p>
				<div className='decoration'></div>
				<form>
					<div className='label-center'>
						<label htmlFor='mail'>
							Email
							<input
								id='mail'
								type='email'
								name='useremail'
								onChange={this.handleChange}
							/>
						</label>
					</div>

					<div className='label-center'>
						<label htmlFor='password'>
							Hasło
							<input
								id='pass'
								type='password'
								name='userpassword'
								onChange={this.handleChange}
							/>
						</label>
					</div>
					<div className='label-center'>
						<label htmlFor='password'>
							Powtórz hasło
							<input
								id='pass'
								type='password'
								name='userpassword'
								onChange={this.handleChange}
							/>
						</label>
					</div>

					<div className='login-container'>
						<button>Zaloguj się</button>
						<button>Załóż konto</button>
					</div>
				</form>
				<Link to='/'>Wróć</Link>
			</div>
		);
	}
}

export default Register;
