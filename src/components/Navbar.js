import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbarContainer">
            <nav className="navbar">
                <ul className="navbarUL">

                    <Link to="/">
                        <li className="homeLink-nav">Home</li>
                    </Link>

                    <Link to="/PhysicalHealth">
                        <li className="physicalHealth-nav">Physical Health</li>
                    </Link>

                    <Link to="/MentalHealth">
                        <li className="mentalHealth-nav">Mental Health</li>
                    </Link>

                    <Link to="/ChatBot">
                        <li className="chatBot-nav">ChatBot Receptionist</li>
                    </Link>

                    <Link to="/foodBank">
                        <li className="foodBank-nav">Nearest Food Bank</li>
                    </Link>
      
                    <Link to="/UsefulLinks">
                        <li className="usefulLinks-nav">Useful Links</li>
                    </Link>

                    <Link to="/SignIn">
                        <li className="signIn-nav">Sign In</li>
                    </Link>

                </ul>
            </nav>
        </div>
    )
}
