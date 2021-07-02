import React from 'react';


const Button = (props) => {


  return (
    <div className='btn'>
      <audio href={props.addr} />
      <p>{props.key}</p>
    </div>
  )
}


export default Button;
