import React from "react";
import Image from "next/image";


function Hero() {
    return (
        <div className="lg:grid-cols-2 md:grid-cols-1 flex">
        <div className="ml-[10%] mt-16" data-aos="zoom-in-up">
            <img src="profile.jpg" alt="my-pic" width={300} height={300} className="rounded-[100%] ml-[40%]"/>
            </div>
            <div>
            <h2 className="text-6xl text-left gap-y-2 ml-[60%] font-bold text-orange-400 mt-16" data-aos="zoom-in-up">Hello <br /> I am <br /> Shumaila</h2>
            <div className="ml-[60%] flex gap-14 mt-12">
                <button className="text-xl p-3 border-2 border-orange-400 rounded-2xl text-white hover:border-pink-300" data-aos="zoom-in-down">About Me</button>
                <button className="text-xl p-3 border-2 border-orange-400 rounded-2xl text-white hover:border-pink-300" data-aos="zoom-in-down">Contact Me</button>
            </div>
            </div>
        </div>        
    )
}
export default Hero;