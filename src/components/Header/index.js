import React, { useState } from 'react';
import Navigation from '../Navigation';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';
import About from '../About';

function Header() {
    const [currentPage, setCurrentPage] = useState('About');
    
    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        } 
        return <About />;
    } 

    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <>
        <header>
            <h1>
                <a href="/">
                    Sapana D. Donde
                </a>
            </h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}></Navigation>
        </header>
        {renderPage()}
        </>
    );
}

export default Header;