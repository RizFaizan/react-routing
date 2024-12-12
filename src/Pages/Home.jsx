import React from 'react'
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/Blogs')
  };
  return (
    <>
    <h1>This is Home page.</h1>
    <h3>👇 Now if you click on this button, then you will navigate to Blogs page.</h3>
    <button onClick={handleClickButton}>Got to Blogs</button>
    </>
  )
}

export default Home;