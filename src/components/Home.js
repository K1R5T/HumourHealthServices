import React, { Component } from 'react'
import {Link} from "react-router-dom";

class Home extends Component{
    render(){
        return (
            <div className="container">
                <div className="welcomeWrapper">
                    <h1 className="welcomeTitle">Welcome to Humour Health Services</h1>

                    <div className="chatbot-btn-div">
                        <Link to="/Home" exact>
                                <button className="chatbot-btn">Chat Bot</button>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}
export default Home;

