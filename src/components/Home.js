import React, { Component } from 'react'
// import SignIn from './SignIn';
import HHS from '../img/HHSLogo.png'
// import src from '*.bmp'

class Home extends Component{
    render(){
        return (
            <div className="homeContainer">
                <div className="welcomeWrapper">
                    <h1 className="welcomeTitle">Welcome to Human Health Services</h1>
                </div>
                <div className="logoContainer">
                    <img className="logo" src={HHS} alt="HHS Logo"/>
                </div>
            </div> 
        )
    }
}
export default Home;

