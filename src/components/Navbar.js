import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbarContainer">
            <nav className="navbar">
                <ul className="navbarUL">

                    <Link to="/" exact>
                        <li className="homeLink">Home</li>
                    </Link>

                    {/* <Link to="/PhysicalHealth">
                        <li className="physicalHealth">Physical Health</li>
                    </Link> */}

                    <Link to="/MentalHealth">
                        <li className="mentalHealth">Mental Health</li>
                    </Link>

                    <Link to="/ChatBot">
                        <li className="chatBot">ChatBot Receptionist</li>
                    </Link>

                    <Link to="Signup">
                        <li className="signUp">Sign Up</li>
                    </Link>

                </ul>
            </nav>
        </div>
    )
}
