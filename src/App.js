import React, { useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import imgOnBulb from './images/glow.png';
import imgOffBulb from './images/off.png';

import './App.css';

const App = () => {

  const [darkTheme, setDarkTheme] = useState(false);
  const [bulb, setBulb] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const switchBulb = () => {
    setBulb(!bulb);
  }

  return (
    <div className={darkTheme ? "main-container bg-dark" : "main-container bg-light"}>
      <div className='toggle-theme shadow'>
        <button onClick={toggleTheme}>
          {darkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
      </div>
      <div className='container-bulb'>

        <h2 className={darkTheme ? 'text-white' : 'text-dark'}>Click Bulb to swtich</h2>
        <div className='mt-3'>
          {bulb ? <img src={imgOnBulb} onClick={switchBulb} /> : <img src={imgOffBulb} onClick={switchBulb} />}

        </div>


      </div>

    </div >
  );
}

export default App;
