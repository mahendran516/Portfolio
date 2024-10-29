import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">Resume</h2>
      <a
        href="https://drive.google.com/file/d/1w7Sy4g49nPuixqc3ZAucz2y8VDdNcgKV/view?usp=sharing"
        className="bg-white text-green-600 py-2 px-4 rounded-full font-bold hover:bg-gray-200 transition"
        download
      >
        Download My Resume
      </a>
      <div className="mt-5">
      <Link to={"/Contact"} className=" bg-red-500 py-2 px-4 rounded font-bold ">
        Contact
      </Link>
      </div>
      
    </div>
  );
};

export default Resume;
