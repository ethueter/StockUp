import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';


const Portfolio = () => {
    const tagline = "Your Portfolio"
    return (
        <div>
            <Header tagline={tagline} />
            <Navbar />
        </div>
    )
}

export default Portfolio;