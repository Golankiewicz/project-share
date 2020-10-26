import React, { Component } from 'react';

import Login from './Login'
import Menu from './Menu'
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns'
import SimpleSteps from'./SimpleSteps'
import Footer from'./Footer';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div class='home'>
               
               <HomeHeader>
               <Login/>
               <Menu/>
               </HomeHeader>
               <HomeThreeColumns/>
               <SimpleSteps/>
               <Footer/>
                <Link to="/login">Go to login</Link>
            </div>
        );
    }
}

export default Home;
