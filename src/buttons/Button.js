import React from 'react';


const Button = props => {

  return (
    <div className='drum-pad'>
      <audio id={props.key} className="clip">
        <source src={props.src} type={props.type} />
      </audio>
      <h2>{props.key}</h2>
    </div>
  )
}


export default Button;
