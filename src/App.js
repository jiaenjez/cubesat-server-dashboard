import React from 'react';
import Time from './component/clock';
import Logo from './component/logo';
import Map from './component/map';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Time />
        <Logo />
        <Map />
      </header>
    </div>
  );
};

export default App;
