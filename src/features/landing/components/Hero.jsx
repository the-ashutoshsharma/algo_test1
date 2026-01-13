import React from 'react';
import { Compass, Lightbulb, MessageSquare, Code } from 'lucide-react';

const Hero = () => {
    return (

        <div className="text-left md:text-center"> {/* Align center for the minimalist look */}
            <h1 className="text-6xl font-medium bg-linear-to-r from-[#a2aab6] via-[#2ba773] to-[#7d8bb8] bg-clip-text text-transparent">
                Hi Ashutosh
            </h1>
            <p className="text-6xl font-semibold text-[#444746]">
                What we are building today?
            </p>
        </div>
    );
};
export default Hero;