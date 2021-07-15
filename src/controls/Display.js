import React, {useEffect} from 'react';
import './display.css'

const Display = props => {

  useEffect(() => {
    let slider = document.getElementById('bankSlider');
    slider.classList.remove('light');
    slider.classList.remove('light2');
    if (props.power.value) {
      if (props.bank.value) slider.classList.add('light');
      else slider.classList.add('light2');
    }
  }, [props.power.value, props.bank.value])

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
          <span id='pwr'></span>
        </label>
        <label forHtml='bank'>
          <p>Bank</p>
          <input
            id='bank'
            type='checkbox'
            name='bank'
            {...props.bank}
          />
          <span id='bankSlider' className='slider'></span>
        </label>
      </form>
      {props.sound}
    </div>
  )

};

export default Display;

