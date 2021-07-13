import React from 'react';
import './display.css'

const Display = props => {
  //add an checkbox class for label
  return (
    <div id='display'>
      <form>
        <label forHtml='power'>
          <p>Power</p>
          <input
            id='power'
            type='checkbox'
            name='onoff'
            {...props.power}
          />
          <span className='slider'></span>
        </label>
        <label forHtml='bank'>
          <p>Bank</p>
          <input
            id='bank'
            type='checkbox'
            name='bank'
            {...props.bank}
          />
          <span className='slider'></span>
        </label>
      </form>
      {props.sound}
    </div>
  )

};

export default Display;

