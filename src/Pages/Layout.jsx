import React from 'react';
import { useNavigate } from 'react-router';
// import Home from './Home';

const Layout = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/Home');
  };

  return (
    <>
    <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg absolute top-48 left-96">
      <button onClick={handleClickButton} className="flex-1 font-bold text-xl bg-white px-6 py-3 rounded-xl hover:bg-black hover:text-white transition-all">Get Started</button>
    </div>
    </>
  )
}

export default Layout;