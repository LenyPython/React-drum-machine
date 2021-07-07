import React from 'react';
import './display.css'

const Display = props => {
  //add an checkbox class for label
  return (
    <div id='display'>
      <form>
        <label className='checkbox'>Power
        <input
            id='power'
            type='checkbox'
            name='onoff'
            {...props.power}
          />
          <br />
        </label>
        <label className='checkbox'>Bank
        <input
            id='bank'
            type='checkbox'
            name='bank'
            {...props.bank}
          />
          <br />
        </label>
        <label> Clip
        <textarea
            id='clip-name'
            value={props.sound}
          />
        </label>
      </form>
    </div>
  )

};

export default Display;

