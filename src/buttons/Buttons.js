import React from 'react';
import Button from './Button.js';
import btnData from './data';



const Buttons = props => {
  let bank = props.bank === 0 ? 0 : 1;
  let btns = btnData[bank].map((item) => {
    return <Button
      key={item.id}
      id={item.id}
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
