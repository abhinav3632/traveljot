import React from 'react';
import Map from './components/Map';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Instruct from './components/Instruct';

export const Page3 = () => {
    return (
        <div>
            <Navbar />
            <Instruct />
            <Map />
            <Footer />
        </div>
    );
}