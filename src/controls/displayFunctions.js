const getSlider = () => {
  let slider = document.querySelector('.bankSlider')
  slider.classList.remove('light');
  slider.classList.remove('light2');
  return slider;
}

const toggleH2Colors = (remove = false) => {
  let h2s = document.querySelectorAll('h2');
  for (let i = 0; i < h2s.length; i++) {
    if (remove) h2s[i].classList.remove('turnedOn');
    else h2s[i].classList.add('turnedOn');
  }


}
export const powerOn = (bankValue) => {
  let slider = getSlider();
  if (bankValue) slider.classList.add('light');
  else slider.classList.add('light2');
  document.body.classList.add('on');
  document.body.classList.remove('off');
  document.getElementById('drum-pads').classList.add('turnedOn');
  toggleH2Colors();
}

export const powerOff = () => {
  getSlider();
  document.body.classList.remove('on');
  document.body.classList.add('off');
  document.getElementById('drum-pads').classList.remove('turnedOn');;
  let remove = true;
  toggleH2Colors(remove);
}
