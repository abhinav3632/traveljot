import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Weather from './components/Weather';

export const Page4 = () => {
    return (
        <div>
            <Navbar />
            <Weather/>
            <Footer />
        </div>
    );
}