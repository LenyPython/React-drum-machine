import React from 'react';


const Button = props => {
  //neeed to add sound change on click
  const play = () => {
    props.setSound(props.id)
    console.log(props.id)
  }

  return (
    <div className='drum-pad' onClick={play} >
      <h2>{props.text}</h2>
      <audio
        id={props.text}
        className="clip"
        src={props.url}
      >
      </audio>
    </div>
  )
}


export default Button;
