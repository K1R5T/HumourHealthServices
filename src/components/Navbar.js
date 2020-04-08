import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbarContainer">
            <nav className="navbar">
                <Link to="/">
                    <h2 className="navwelcome">Welcome</h2>
                </Link>
                <ul className="navbarUL">

                    <Link to="/Home">
                        <li className="homeLink">Home</li>
                    </Link>

                    <Link to="/PhysicalHealth">
                        <li className="physicalHealth">Physical Health</li>
                    </Link>

                    <Link to="/MentalHealth">
                        <li className="mentalHealth">Mental Health</li>
                    </Link>

                    <Link to="/ChatBot">
                        <li className="chatBot">ChatBot Receptionist</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
