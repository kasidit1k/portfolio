
            /* ลบเมนูมือถือ */

const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
      const navMenu = document.getElementById('nav-menu')

     /* คลิกหนึ่งรายการ และลบเมนูการแสดงออก */
     navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
