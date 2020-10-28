import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div class='form1'>
                <p>Skontaktuj się z nami</p>
                <div class='decoration'></div>
                <form>
                    <div class='label-center'>
                        <label htmlFor='user'>
                        Wpisz swoje imię
                        <input type='text'/>

                        </label>
                        <label htmlFor='user'>
                        Wpisz swój email
                        <input type='email'/>

                        </label>
                    </div>
                    
                        <label htmlFor='user'>
                        Wpisz swoją wiadomość
                        <textarea/>
                        </label>
                        <button>Wyślij</button>

                        
                        
                    
                    
                </form>

                
            </div>
        );
    }
}

export default Form;
