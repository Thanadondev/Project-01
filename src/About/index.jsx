import React from 'react';
import logo from "../assets/logo.png";
import about from "../assets/about-img.jpg";

export default function About() {
    return (
        <div className="about py-16" >
            <div className="container mx-auto flex flex-col lg:flex-row items-center " >
                <div className="lg:w-[300px] pr-6 ">
                    <img
                        src={logo}
                        alt="About Us"
                        className="w-full h-auto object-cover rounded-lg  "
                    />
                </div>

                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <h2 className="text-4xl font-extrabold mb-4 text-[#FF5733]">
                        ABOUT US
                    </h2>
                    <p className="text-lg text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum nec ullamcorper orci. Proin auctor elit nec quam consequat, non varius sapien tristique.
                        Vivamus bibendum, metus sit amet accumsan feugiat, justo diam luctus ligula, eu pulvinar nulla est vel nisi.
                    </p>
                </div>
            </div>
        </div>
    );
}