import React, { Component } from 'react'
// import {Link} from "react-router-dom";
import SignIn from './SignIn';

class Home extends Component{
    render(){
        return (
            <div className="container">
                <div className="welcomeWrapper">
                    <h1 className="welcomeTitle">Welcome to Humour Health Services</h1>

                    <SignIn/>

                </div>
            </div>
        )
    }
}
export default Home;

