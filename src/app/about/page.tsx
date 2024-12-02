import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function About() {
    return (
        <div>
          <h2 className="mt-10 text-center text-4xl font-bold text-yellow-600" data-aos="zoom-in-up">About Me</h2>
            <div className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center mt-5 rounded-3xl"
      alt="hero"
      src="profile.jpg"
      data-aos="zoom-in-down"
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-600 hover:text-white" data-aos="fade-down-left">
        Microdosing synth tattooed vexillologist
      </h1>
      <p className="mb-8 leading-relaxed text-yellow-200" data-aos="flip-right">
        Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
        tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt
        ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
        meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af
        fingerstache pitchfork.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-[40px] text-blue-500 border-0 py-2 px-6 rounded text-lg" data-aos="flip-left">
        <FaLinkedin />
        </button>
        <button className="inline-flex text-[40px] text-white border-0 py-2 px-6 rounded text-lg" data-aos="flip-left">
        <FaGithub />
        </button>
        <button className="inline-flex text-[40px] text-red-500 border-0 py-2 px-6 rounded text-lg" data-aos="flip-left">
        <FaYoutube />
        </button>
        <button className="inline-flex text-[40px] text-blue-700 border-0 py-2 px-6 rounded text-lg" data-aos="flip-left">
        <FaFacebook />
        </button>
        <button className="inline-flex text-[40px] text-orange-500 border-0 py-2 px-6 rounded text-lg" data-aos="flip-left">
        <FaInstagram  />
        </button>
      </div>
    </div>
  </div>
</div>
    <Skills />
        </div>
    )
}
export default About;

export function Skills(){
  return (
    <div>
      <h2 className="mt-18 mb-24 text-center text-4xl font-bold text-yellow-600" data-aos="zoom-in-up">My Skills</h2>
      <ul>
        <li className="mb-3 text-2xl text-white font-semibold ml-16" data-aos="fade-down">HTML</li>
        <div className="w-[50%] ml-16 mb-3 h-5 bg-blue-700 rounded-2xl"></div>
        
        <li className="mb-3 text-2xl text-white font-semibold ml-16" data-aos="fade-down">CSS</li>
        <div className="w-[45%] ml-16 mb-3 h-5 bg-green-600 rounded-2xl"></div>

        <li className="mb-3 text-2xl text-white font-semibold ml-16" data-aos="fade-down">JavaScript</li>
        <div className="w-[30%] ml-16 mb-3 h-5 bg-red-600 rounded-2xl"></div>

        <li className="mb-3 text-2xl text-white font-semibold ml-16" data-aos="fade-down">TypeScript</li>
        <div className="w-[45%] ml-16 mb-3 h-5 bg-yellow-500 rounded-2xl"></div>

        <li className="mb-3 text-2xl text-white font-semibold ml-16" data-aos="fade-down">React</li>
        <div className="w-[30%] ml-16 mb-3 h-5 bg-pink-600 rounded-2xl"></div>
        
        <li className="mb-3 text-2xl text-white font-semibold ml-16" data-aos="fade-down">Next.js</li>
        <div className="w-[45%] ml-16 mb-3 h-5 bg-white rounded-2xl"></div>

      </ul>
    </div>
  )
}
