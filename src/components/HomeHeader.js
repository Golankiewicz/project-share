import React, { Component } from 'react';
import Login from './Login'
import Menu from './Menu'

class HomeHeader extends Component {
    render() {
        return (
            <div class='home-header'>
                <div class='right'>
                    <div class='top-menu'>
                        <Login/>
                        <Menu/>
                    </div>
                   
               </div>
               <div class='hero-image'>
               <div class='intro'>
                        <p>Zacznij pomagać <br/>Oddaj niechciane rzeczy w zaufane ręce</p>
                    </div>
               </div>
            </div>
        );
    }
}

export default HomeHeader;
