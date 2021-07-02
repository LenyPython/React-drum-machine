import React from 'react';

const ControlPanel = props => {
  return (
    <div id='controls'>
      <form>
        <input type='checkbox' name='onoff' value={props.state} />
      </form>
    </div>
  )

};

export default ControlPanel;
