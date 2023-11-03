/* แสดงเมนู */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
      navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
      })
}

/* ซ่อนเมนู */
if(navClose){
      navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
      })
}