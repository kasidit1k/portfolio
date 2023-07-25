
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*------------------------------------ คำสั่ง email --------------------------------*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),  
      contactEmail = document.getElementById('contact-email'),  
      contactProject = document.getElementById('contact-project'),  
      contactMessage = document.getElementById('contact-message')
    
const sendEmail = (e) => {
    e.preventDefault()

    /*-----------------------------------ตัวฟิล field----------------------------------------*/
    if(contactName.value == '' || contactEmail.value === '' || contactProject.value === ''){
        //-------------------- เพิ่มลบสี --------------------------//
        contactMessage.classList.remove('color-biue')
        contactMessage.classList.add('color-red')

        /*--------------------------------โชว์ข้อความ----------------------------*/    
        contactMessage.textContent = 'Please enter the text'
    }else{
        //
        emailjs.sendForm('service_n6nu15c','template_teszev7','contact-form','0SQXodYZ_COyn4ljD')
            then(() =>{
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message sent'

                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 5000)
            })
    }
}

contactForm.addEventListener('submit', sendEmail)
