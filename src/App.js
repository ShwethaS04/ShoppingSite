import React from 'react';
import logo from './logo.svg';
/*import './App.css';*/
import style from './App.css';
import Navbar from './components/Navbar';

function App() {
  return (    
      <div className={style.app}>
      <Navbar />
      </div>
    
  );
}

export default App;
