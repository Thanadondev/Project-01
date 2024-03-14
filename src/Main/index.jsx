import React from 'react';
import AR from "../assets/AR.png";

export default function Main() {
const nameH = {
    Color: "#FF5733",
}
    return (
        <div className="main  text-black p-8">
            <div className="container mx-auto flex items-center justify-around ">
                <div className="text-left pr-8">
                    <h1 className="text-6xl font-extrabold mb-4 text-[#FF5733]" >AR, Augmented Reality</h1>
                    <p className="text-lg"> is an interactive experience that combines the real world and computer-generated content. The content can span multiple sensory modalities, including visual, auditory, haptic, somatosensory and olfactory.</p>
                </div>

                <div>
                    <img
                        src={AR}
                        alt="logo"
                        className="w-[600px] h-auto object-cover relative sm:w-[600px] md:w[600px]"
                    />
                </div>
            </div>
        </div>
    );
}
