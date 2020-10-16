import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';


const Trade = () => {
    const tagline = "Buy / Sell";
    
    return (
        <div>
            <Header tagline={tagline} />
            <Navbar />
        </div>
    )
}

export default Trade;