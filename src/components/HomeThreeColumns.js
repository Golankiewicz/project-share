import React, { Component } from 'react';

import Display from './Display'

class HomeThreeColumns extends Component {
    render() {
        return (
            <div class='home-three-columns'>
                <div class='column'>
                    <Display/>
                    <h4>ODDANYCH WORKÓW</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                </div>
                <div class='column'>
                <Display/>
                    <h4>    WSPARTYCH ORGANIZACJI</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                </div>
                <div class='column'>
                <Display/>
                    <h4>ZORGANIZOWANYCH ZBIÓREK</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                </div>
                
            </div>
        );
    }
}

export default HomeThreeColumns;
