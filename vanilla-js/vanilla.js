const title = document.querySelector('#title');
/* const BASE_COLOR = 'rgb(233, 160, 66)';
const OTHER_COLOR = 'rgb(224, 202, 172)';

function handleClick(){
  const currentColor = title.style.color;
  if(currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  }else{
    title.style.color = BASE_COLOR;
  }
}

function init(){
  title.style.color = BASE_COLOR;
  title.addEventListener('drag', handleClick)
}

init(); */

const CLICKED_CLASS = 'clicked';

function handleClick(){
  const currentClassName = title.className;
    title.classList.toggle(CLICKED_CLASS);
}
function init() {
  title.addEventListener('click', handleClick)
}
init();