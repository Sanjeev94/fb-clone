import React from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  const user = "Sanjeev";
  return (
    <div className="app">
      {!user ? (
        <h1>Login</h1>
      ) : (
        <>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
  
        </div>
        </>
      )}
      {/* <h1>Lets build the facebook clone!</h1> */}

      
      {/* app body */}
      {/* Header */}
      {/* Sidebar */}
      {/* feed */}
      {/* widgets */}
    </div>
  );
}

export default App;
