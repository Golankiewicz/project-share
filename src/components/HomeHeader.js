import React, { Component } from 'react';
import Login from './Login'
import Menu from './Menu'

class HomeHeader extends Component {
    render() {
        return (
            <div class='home-header'>
                <div class='hero-image'>
                </div>
                <div class='right'>
                    <div class='top-menu'>
                        <Login/>
                        <Menu/>
                    </div>
                    <div class='intro'>
                        <p>Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce</p>
                        <div class='decoration'></div>
                        <div>
                        <div class='rectangle'>ODDAJ RZECZY</div>
                        <div class='rectangle'>ZORGANIZUJ ZBIÓRKĘ</div>
                        </div>
                    </div>

                   
               </div>
                   
                   
               </div>
        
              
         
        );
    }
}

export default HomeHeader;
