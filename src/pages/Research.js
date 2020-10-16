import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Research = () => {
    const tagline = "Find Your Diamond"

    return (
        <div>
            <Header tagline={tagline} />
            <Navbar />
        </div>
    )
}

export default Research;