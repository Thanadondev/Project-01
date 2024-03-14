import React, { useState } from 'react';
import { Link } from 'react-scroll';
import 'animate.css';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navStyle = {
        backgroundColor: "#F4EAE0",
    };

    return (
        <div className="navbar text-[#4d4d4d]" style={navStyle}>
            <div className="container mx-auto p-4 flex justify-between items-center">
                <a className="btn btn-ghost text-xl">BANNAPRUE</a>

                <div className="hidden md:flex space-x-12">
                    <NavLink to="welcome">Welcome</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="wisdoms">Wisdows</NavLink>
                    <NavLink to="heroes">Heroes</NavLink>
                </div>

                <button
                    className="md:hidden btn btn-ghost text-xl"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden mt-2 animate__animated animate__fadeIn">
                    <ul className="flex flex-col space-y-2">
                        <NavLink to="welcome">Welcome</NavLink>
                        <NavLink to="about">About</NavLink>
                        <NavLink to="wisdoms">Wisdows</NavLink>
                        <NavLink to="heroes">Heroes</NavLink>
                    </ul>
                </div>
            )}
        </div>
    );
}

function NavLink({ children, to }) {
    return (
        <Link
            className="hover:underline text-dark cursor-pointer"
            to={to}
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setIsMobileMenuOpen(false)}
        >
            {children}
        </Link>
    );
}
