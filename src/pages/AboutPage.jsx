import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-left">
                    <Link to="/">
                        <img src="LOGOTOBEFOUND.png" alt="app logo"/>
                    </Link>
                </div>
                <div className="navbar-right">
                    <button onClick={handleRegister}>Register here!</button>
                </div>
                </div>
                <div className="container">
                <div className="banner">
                    {/* we need to find the logo */}
                    <h1>Welcome to Our App</h1>
                </div>
                <div className="content">
                    {/* summary of our app*/}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutPage;
