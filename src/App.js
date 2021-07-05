import React from 'react';
import {useState} from 'react';
import Buttons from './buttons/Buttons.js';
import Display from './controls/Display.js';
import './style.css';


const App = () => {
  var [power, setPower] = useState(false);
  var [bank, setBank] = useState(0);
  var [sound, setSound] = useState('');

  return (
    <div id="drum-machine">
      <Buttons
        bank={bank}
        setSound={setSound}
      />
      <Display
        state={power}
        sound={sound}
        setBank={setBank}
        setPower={setPower}
      />

    </div>
  );
};


export default App;
