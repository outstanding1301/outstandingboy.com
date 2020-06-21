import React, { useEffect, useState } from 'react';
import './App.scss';
import Navigation from './components/Navigation';

function App() {

  const [activated, setActivated] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  })

  const onScroll = (e) => {
    const y = window.scrollY;
    // console.log(y);
    if(y < 684) {
      setActivated(0);
    }
    else if (y < 1368) {
      setActivated(1);
    }
    else if (y < 2052) {
      setActivated(2);
    }
    else if (y < 2472) {
      setActivated(3);
    }
    else {
      setActivated(4);
    }
  }

  return (
    <div id='top' className='App'>
      <Navigation activated={activated}/>
      <div class='container'>
        <div id='profile' className='margin'></div>
        <div className='temp' style={{background: '#ffffff'}}>
          <h1 style={{color: '#000000'}}>Profile</h1>
        </div>
        <div id='projects' className='margin'></div>
        <div className='temp' style={{background: '#000000'}}>
          <h1 style={{color: '#ffffff'}}>Projects</h1>
        </div>
        <div id='skills' className='margin'></div>
        <div className='temp' style={{background: '#ffffff'}}>
          <h1 style={{color: '#000000'}}>Skills</h1>
        </div>
        <div id='about' className='margin'></div>
        <div className='temp' style={{background: '#000000'}}>
          <h1 style={{color: '#ffffff'}}>About</h1>
        </div>
        <div id='contact' className='margin'></div>
        <div className='temp' style={{background: '#ffffff'}}>
          <h1 style={{color: '#000000'}}>Contact</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
