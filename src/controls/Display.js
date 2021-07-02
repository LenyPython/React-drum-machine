import React from 'react';

const Display = props => {
  const handleChange = () => {
    props.onOff(~props.state);
  }
  return (
    <div id='display'>
      <form>
        <label>Power
        <input
            id='power'
            type='checkbox'
            name='onoff'
            onChange={handleChange}
            value={props.state}
          />
          <br />
        </label>
        <label> Clip
        <textarea
            id='clip-name'
            value={props.clip}
          />
        </label>
      </form>
    </div>
  )

};

export default Display;
