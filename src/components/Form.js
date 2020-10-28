import React, { Component } from 'react';

class Form extends Component {
    state={
        username:'',
    }

    handleChange = (e)=>{
        const value = e.target.value;
        this.setState({
            username: value
        })

    }
    render() {
        return (
            <div class='form1'>
                <p>Skontaktuj się z nami</p>
                <div class='decoration'></div>
                <form>
                    <div class='label-center'>
                        <label htmlFor='user'>
                        Wpisz swoje imię
                        <input type='text' id='user' name='username' value={this.state.username} onChange={this.handleChange}/>

                        </label>
                        <label htmlFor='mail'>
                        Wpisz swój email
                        <input type='email' id='mail' email='useremail'/>

                        </label>
                    </div>
                    
                        <label htmlFor='user'>
                        Wpisz swoją wiadomość
                        <textarea rows='8'/>
                        </label>
                        <button>Wyślij</button>

                        
                        
                    
                    
                </form>

                
            </div>
        );
    }
}

export default Form;
