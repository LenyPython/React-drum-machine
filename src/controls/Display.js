import React from 'react';

const Display = props => {

  const powerOnOff = () => {
    //read about onChange hooks for generalizing setState
    props.setPower(~props.state);
  }

  const displaySound = () => {
    //need to update text area on change in other component
  }
  //add an checkbox class for label
  return (
    <div id='display'>
      <form>
        <label className='checkbox'>Power
        <input
            id='power'
            type='checkbox'
            name='onoff'
            onChange={powerOnOff}
            value={props.state}
          />
          <br />
        </label>
        <label className='checkbox'>Bank
        <input
            id='bank'
            type='checkbox'
            name='bank'
            onChange={powerOnOff}
            value={props.state}
          />
          <br />
        </label>
        <label> Clip
        <textarea
            id='clip-name'
            onChange={displaySound}
            value={props.sound}
          />
        </label>
      </form>
    </div>
  )

};

export default Display;
