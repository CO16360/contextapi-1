import React from 'react';

const UserContext =React.createContext("Vikas Pooner by default");  // by default value

const UserProvider=UserContext.Provider
const UserConsumer= UserContext.Consumer

export {UserProvider,UserConsumer} 
export default UserContext