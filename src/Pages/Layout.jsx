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
    <h1>You are now at Layout page.</h1>
    <h3>👇 Click this button to navigate to Home page.</h3>
    <button onClick={handleClickButton}>Click me</button>
    </>
  )
}

export default Layout;