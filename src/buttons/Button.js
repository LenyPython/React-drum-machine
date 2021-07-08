import React from 'react';
import {useEffect} from 'react';
import './btn.css'


const Button = props => {
  const play = () => {
    let audio = document.getElementById(props.text);
    if (props.power.value) {
      audio.play();
      setTimeout(() => props.setSound(''), 1000);
      props.setSound(props.id)
    }
  };

  const handleKeyPressed = (e) => {
    if (e.code == 'Key' + props.text) play()
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPressed)
    return () => document.removeEventListener('keydown', handleKeyPressed);
  })


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
