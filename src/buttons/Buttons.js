import React from 'react';
import Button from './Button.js';
import btnData from './data';



const Buttons = () => {
  let btns = btnData.map((item) => {
    return <Button key={item.key} src={item.src} />
  });
  return (
    < div id='drum-pads'>
      {btns}
    </div >
  )
}






export default Buttons;
