const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector('h1');

function init(){
  clockTitle.innerHTML = new Date().toLocaleTimeString();
  setInterval(()=>{clockTitle.innerHTML = new Date().toLocaleTimeString()},1000);
}

init();