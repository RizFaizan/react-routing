import React, { createContext, useState } from 'react';
import Component2 from './Component2'; // Assuming Component2 is in the same directory

export const UserContext = createContext();

const Component1 = () => {
    const [user, setUser] = useState('Hello Faizan');

    return (
        <UserContext.Provider value={user}>
            <h1>Hi, {user}</h1>
            <Component2 />  {/* Component2 is inside the Provider */}
        </UserContext.Provider>
    );
};

export default Component1;
