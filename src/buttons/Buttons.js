import React from 'react';
import Button from './Button.js';
import btnData from './data';



const Buttons = props => {
  let bank = props.bank.value ? 1 : 0;
  let btns = btnData[bank].map((item) => {
    return <Button
      key={item.id}
      id={item.id}
      power={props.power}
      url={item.url}
      text={item.keyTrigger}
      keyCode={item.keyCode}
      setSound={props.setSound}
    />
  });
  return (
    <div id='drum-pads'>
      {btns}
    </div >
  )
}






export default Buttons;
