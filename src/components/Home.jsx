import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold mb-4">Hi, I'm MAHENDRAN</h1>
      <p className="text-2xl mb-8">A MERN Stack Developer</p>
      <Link to={"/Projects"} className="bg-white text-purple-600 py-2 px-4 rounded-full font-bold hover:bg-gray-200 transition">
        Explore My Work
      </Link>
    </div>
  );
};

export default Home;
