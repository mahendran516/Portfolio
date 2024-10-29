import React from 'react';
import { Link } from 'react-router-dom';




const projects = [
  {
    title: "Weather App",
    description: "A real-time weather app with a modern, responsive UI.",
    technologies: "React, TailwindCSS, Axios",
    link: "https://weather-theta-rouge-72.vercel.app/",
    image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-29%20111817.png?raw=true"
  },
  {
    title: "TMDB Website",
    description: "A movie database app integrating TMDB API.",
    technologies: "HTML, TailwindCSS, React, Firebase",
    link: "https://cinibite-d3c35.web.app/signin",
     image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-29%20114238.png?raw=true"
  },
  {
    title: "Nostra E-commerce Platform",
    description: "A fully functional e-commerce website.",
    technologies: "HTML, CSS, JavaScript",
    link: "https://mahendran516.github.io/Nostra-clone/",
     image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-29%20114154.png?raw=true"
  },
];

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center py-12">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-48 object-cover mb-4 rounded-lg"/>
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">{project.technologies}</p>
            <a href={project.link} className="bg-blue-500 p-2 rounded-md text-white">
              View on Website
            </a>
          </div>
        ))}
      </div>
      <div className="mt-5">
      <Link to={"/Resume"} className="text-white bg-purple-600 py-2 px-4 rounded font-bold hover:bg-gray-500 transition">
        Resume
      </Link>
      </div>
    </div>
    
  );
};

export default Projects;
