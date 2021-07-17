import React, {useEffect} from 'react';
import './display.css'

const pwrSvg = <svg className='pwrIcon'
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 512 512">
  <path d="M400 54.1c63 45 104 118.6 104 201.9c0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4C7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31c-41.5 30.8-68 79.6-68 134.9c-.1 92.3 74.5 168.1 168 168.1c91.6 0 168.6-74.2 168-169.1c-.3-51.8-24.7-101.8-68.1-134c-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z" />
</svg>

const Display = ({power, bank, sound}) => {
  const getSlider = () => {
    let slider = document.querySelector('.bankSlider')
    slider.classList.remove('light');
    slider.classList.remove('light2');
    return slider;
  }
  const powerOn = (bankValue) => {
    let slider = getSlider();
    if (bankValue) slider.classList.add('light');
    else slider.classList.add('light2');
    document.body.classList.add('on');
    document.body.classList.remove('off');
    document.getElementById('drum-pads').classList.add('turnedOn');
  }

  const powerOff = () => {
    getSlider();
    document.body.classList.remove('on');
    document.body.classList.add('off');
    document.getElementById('drum-pads').classList.remove('turnedOn');;
  }

  useEffect(() => {
    if (power.value) powerOn(bank.value);
    else powerOff();
  }, [power.value, bank.value])

  return (
    <form id='display'>
      <fieldset>
        <legend>controls</legend>
        <label forHtml='power'>
          <input
            id='power'
            type='checkbox'
            name='onoff'
            {...power}
          />
          <span className='powerBtn'></span>
          {pwrSvg}
        </label>
        <label forHtml='bank'>
          <input
            id='bank'
            type='checkbox'
            name='bank'
            {...bank}
          />
          <span className='bankSlider'></span>
        </label>
        <label className='displayer'>
          {sound}
        </label>
      </fieldset>
    </form>
  )

};

export default Display;

