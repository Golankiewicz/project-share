import React, { Component } from 'react';

import Login from './Login'
import Menu from './Menu'
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns'
import Footer from'./Footer'

class Home extends Component {
    render() {
        return (
            <div>
               <Login/>
               <Menu/>
               <HomeHeader/>
               <HomeThreeColumns/>
               <Footer/>

            </div>
        );
    }
}

export default Home;
