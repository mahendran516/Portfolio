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
    title: "Actodo",
    description: " Daily Activity Task",
    technologies: "HTML,Tailwindcss,Reactjs",
    link: "https://actodo-react-omega.vercel.app/",
     image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-30%20124739.png?raw=true"
  },
  {
    title: "Nostra E-commerce Platform",
    description: "A fully functional e-commerce website.",
    technologies: "HTML, CSS, JavaScript",
    link: "https://mahendran516.github.io/Nostra-clone/",
     image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-29%20114154.png?raw=true"
  },
  {
    title: "Deupload Project management",
    description: "A Responsive website",
    technologies: "HTML,Bootstrap",
    link: "https://mahendran516.github.io/deupload-project-management/",
     image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-30%20122344.png?raw=true"
  },
  {
    title: "Greenden",
    description: "A fully functional Products Sale website.",
    technologies: "HTML, CSS, JavaScript, Tailwindcss",
    link: "https://mahendran516.github.io/greendan-tailwindcss/",
     image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-30%20121729.png?raw=true"
  },
  {
    title: "Udemy-Clone",
    description: "A fully functional website.",
    technologies: "HTML, CSS, JavaScript, Tailwindcss, React.js",
    link: "https://udemy-react-puce.vercel.app/",
     image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-30%20124519.png?raw=true"
  },
  {
    title: "Reestar",
    description: " A restaurant Website",
    technologies: "HTML, CSS",
    link: "https://mahendran516.github.io/Reestar-01/",
     image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-30%20124325.png?raw=true"
  },
 

];

const Projects = () => {
  return (
 
    <div id="projects" className=" min-h-screen  bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white py-12 px-4 ">
      <h2 className="text-4xl font-bold mb-8 text-center animate-fadeIn mt-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12"> 
          {projects.map((project, index) => ( <div key={index} className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl shadow-2xl flex flex-col transform transition duration-500 hover:scale-105 hover:bg-opacity-30 animate-slideIn">
             <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-48 object-cover mb-4 rounded-lg shadow-lg"/> 
             <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
               <p className="text-sm text-gray-400 mb-4">{project.technologies}</p>
                <div className="mt-auto">
                   <Link to={project.link} className="bg-violet-500 text-white p-2 shadow-lg rounded-lg "> View Details </Link>
                 </div>
                  </div> 
                ))}
     </div> 
     </div>
  );
};

export default Projects;
