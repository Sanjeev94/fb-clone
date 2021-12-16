import React from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      {/* <h1>Lets build the facebook clone!</h1> */}

      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />

      </div>
      {/* app body */}
      {/* Header */}
      {/* Sidebar */}
      {/* feed */}
      {/* widgets */}
    </div>
  );
}

export default App;
