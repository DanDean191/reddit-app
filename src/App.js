import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import Navbar from './features/navbar/Navbar'
import NewsFeed from './features/newsfeed/NewsFeed';

function App() {
  return (
    <div className="App">
      
      
      <Navbar />
      <header className="App-header">
      

        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <NewsFeed />
      </header>


    </div>
  );
}

export default App;
