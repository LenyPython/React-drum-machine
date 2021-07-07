import React from 'react';
import {useState} from 'react';
import Buttons from './buttons/Buttons.js';
import Display from './controls/Display.js';
import './style.css';


const App = () => {
  var powerControl = useBoolValue(false);
  var bankControl = useBoolValue(false);
  var [sound, setSound] = useState('');

  return (
    <div id="drum-machine">
      <Buttons
        power={powerControl}
        bank={bankControl}
        setSound={setSound}
      />
      <Display
        power={powerControl}
        bank={bankControl}
        sound={sound}
      />

    </div>
  );
};


export default App;

const useBoolValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(~e.target.value);
  }
  return {
    value,
    onChange: handleChange
  };

}
