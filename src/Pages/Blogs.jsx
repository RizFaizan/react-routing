/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router';

const Blogs = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/About')
  };
  return (
    <>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">

        <div className="py-8">
            <h1 className="text-3xl font-bold mb-2">Dive into the Apple</h1>
            <p className="text-gray-500 text-sm">Published on <time datetime="2022-04-05">April 5, 2022</time></p>
        </div>

        <img src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c" alt="Featured image" className="w-full h-auto mb-8" />

        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius fringilla augue, vel vestibulum
                nisl mattis vel. Praesent porttitor pharetra purus eu tincidunt.</p>
            <p>Nullam vitae sapien non est suscipit blandit quis sit amet ipsum. Aliquam euismod accumsan nunc, in
                convallis felis luctus in. Sed rhoncus metus a elit rutrum aliquam.</p>
            <p>Integer ullamcorper leo nulla, nec commodo metus vehicula eget. Duis vel vestibulum tellus, eget mattis
                quam. Nullam euismod libero sed nibh tristique, vel eleifend risus sagittis. In hac habitasse platea
                dictumst. Sed dapibus magna at arcu euismod, a pulvinar turpis tristique. Suspendisse imperdiet velit
                nec lectus rutrum varius.</p>
        </div>
        <button onClick={handleClickButton} class="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
          Go to About
        </button>
    </div>
</div>
    </>
  )
}

export default Blogs;