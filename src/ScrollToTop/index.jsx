import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    return (
        <div className="fixed bottom-20 right-20 z-50">
            <Link to="navbar" spy={true} smooth={true} duration={500}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                    <FaArrowUp />
                    <h1>TOP</h1>
                </button>
                
            </Link>
        </div>
    );
}

export default ScrollToTopButton;
