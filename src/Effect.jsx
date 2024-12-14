import React from 'react'
import { useEffect, useState } from 'react'

const Effect = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count);
    }, [count]);


  return (
    <>
    <h1>I've rendered {count} time on this page.</h1>
    <button onClick={()=>setCount(count + 1)}>Click me.</button>
    <h1 class="text-3xl font-bold underline">
    Hello world!
    </h1>
    <h1>hi</h1>
    </>
  )
}

export default Effect;