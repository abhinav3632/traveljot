import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { SignUp } from './components/SignUp';

export const Page6 = () => {
    return (
        <div>
            <Navbar />
                <SignUp />
            <Footer />
        </div>
    );
}