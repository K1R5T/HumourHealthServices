import React, { Component } from 'react'
import SignIn from './SignIn';

class Home extends Component{
    render(){
        return (
            <div className="container">
                <div className="welcomeWrapper">
                    <h1 className="welcomeTitle">Welcome to Human Health Services</h1>

                    <SignIn/>

                </div>
            </div>
        )
    }
}
export default Home;

