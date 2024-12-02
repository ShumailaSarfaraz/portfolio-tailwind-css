import React from "react";

function Projects(){
    return (
        <div>
            <h2 className="mt-20 text-center text-4xl font-bold text-yellow-600" data-aos="zoom-in-up">My Projects</h2>
            <div className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-yellow-600 lg:w-1/3 lg:mb-0 mb-4" data-aos="fade-down-left">
        There are my some Projects 
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto text-yellow-200 leading-relaxed text-base" data-aos="flip-right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum excepturi veniam culpa, unde dignissimos corrupti quis tenetur ut quod eum delectus at ex sequi aut non consectetur labore doloribus soluta, ab facilis odio nobis minima. Repudiandae incidunt omnis repellendus!
      </p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img
          width={300}
          height={300}
            alt="gallery"
            className="w-full object-cover h-full object-center block ml-2 md-2 hover:border-red-600 hover:border-2"
            src="plants-website.jpg"
            data-aos="flip-left"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
          width={300}
          height={300}
            alt="gallery"
            className="w-full object-cover h-full object-center block ml-2 md-2 hover:border-red-600 hover:border-2"
            src="online-magazine.jpg"
            data-aos="flip-left"
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img
          width={300}
          height={300}
            alt="gallery"
            className="w-full h-full object-cover object-center block ml-2 md-2 hover:border-red-600 hover:border-2"
            src="Weather-app.jpg"
            data-aos="flip-left"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img
          width={300}
          height={300}
            alt="gallery"
            className="w-full h-full object-cover object-center block ml-2 md-2 hover:border-red-600 hover:border-2"
            src="Food-Website.jpeg"
            data-aos="flip-left"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
          width={300}
          height={300}
            alt="gallery"
            className="w-full object-cover h-full object-center block ml-2 md-2 hover:border-red-600 hover:border-2"
            src="countdown-timer.avif"
            data-aos="flip-left"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
          width={300}
          height={300}
            alt="gallery"
            className="w-full object-cover h-full object-center block ml-2 md-2 hover:border-red-600 hover:border-2"
            src="company-portfolio.jpg"
            data-aos="flip-left"
          />
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
export default Projects;