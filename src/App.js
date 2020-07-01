import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import { UserProvider } from './components/UserContext';


function App() {
  return (
    <div className="App">
      {/* if UserProvider is not present then default value is considered otherwise value */}
    <UserProvider value="Vikas Pooner" >  
    {/* can be used by A and its children */}
    <ComponentA />
    </UserProvider>
    </div>
  );
}

export default App;
