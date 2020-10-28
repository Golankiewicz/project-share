import React, { Component } from 'react';

import Form from './Form'

class FooterContact extends Component {
    render() {
        return (
            <>
            <div class='footer-contact'>
                <div class='footer-contact-left'></div>
                <Form/>
            </div>
            <div class='footer'>
                <div class='footer-article'></div>
                <div class='footer-article'>Copyright by Coders Lab</div>
                <div class='footer-article'><div class='facebook'></div>
                <div class='instagram'></div>
                </div>
            </div>
            </>
        );
    }
}

export default FooterContact;
