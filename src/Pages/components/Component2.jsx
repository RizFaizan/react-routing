import React, { useContext } from 'react';
import { UserContext } from './Component1';  // Import UserContext from Component1

const Component2 = () => {
    const user = useContext(UserContext);  // Get the user value from context

    return (
        <>
            <h1>Hello, my name is {user}</h1>
        </>
    );
};

export default Component2;
