const form = document.querySelector('.js-form');
const input = form.querySelector('input')
const h4 = document.querySelector('.js-greetings')

const USER_NAME = 'name'
const SHOWING_CN = 'showing'

function loadName() {
  const currentUser = localStorage.getItem(USER_NAME);
  if(currentUser){
    form.classList.remove(SHOWING_CN);
    h4.classList.add(SHOWING_CN);
    h4.innerHTML = currentUser;
  }else{
    form.classList.add(SHOWING_CN);
  }
}

function setName() {
  form.addEventListener('submit', (event)=>{
    event.preventDefault();
    localStorage.setItem(USER_NAME, input.value);
    this.loadName();
  })
}

function init(){
  loadName();
  setName();
}
init();