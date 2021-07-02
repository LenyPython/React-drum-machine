import React from 'react'
import Button from './Button.js'



const Buttons = () => {
  return (
    < div id='buttons'>
      <Button key={btnData[0].key} addr={btnData[0].addr} />
      <p>{btnData[0].key} {btnData[0].addr}</p>
    </div >
  )
}

const btnData = [
  {
    key: 'Q',
    addr: '#'
  },
  {
    key: 'W',
    addr: '#'
  },
  {
    key: 'E',
    addr: '#'
  },
  {
    key: 'A',
    addr: '#'
  },
  {
    key: 'S',
    addr: '#'
  },
  {
    key: 'D',
    addr: '#'
  },
  {
    key: 'Z',
    addr: '#'
  },
  {
    key: 'X',
    addr: '#'
  },
  {
    key: 'C',
    addr: '#'
  },
];





export default Buttons;
