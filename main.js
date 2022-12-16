/*header */
/* Quando clico no .button, .nav TOGGLE 'activo' */
const button = document.querySelector('button');/*me permite selecionar os dois elementos  */
const nav    = document.querySelector('nav');

button.addEventListener('click',()=>{
  button.classList.toggle('activo')
  nav.classList.toggle('activo')
})

