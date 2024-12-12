import React from 'react'
import { useNavigate } from 'react-router';

const Blogs = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/About')
  };
  return (
    <>
    <h1>You are now on Blogs page.</h1>
    <h3>👇 And if you want to navigate to About page, then click the button</h3>
    <button onClick={handleClickButton}>Go to About</button>
    </>
  )
}

export default Blogs;