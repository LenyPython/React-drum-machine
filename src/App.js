import React from 'react';
import {useState} from 'react';
import Buttons from './buttons/Buttons.js';
import Display from './controls/Display.js';
import './style.css';


const App = () => {
  var [power, setPower] = useState(false);

  return (
    <div id="drum-machine">
      <Buttons />
      <Display state={power} onOff={setPower} />

    </div>
  );
};


export default App;
