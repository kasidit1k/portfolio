const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
      e.preventDefault()

      //ตรวจสอบว่าฟิลด์มีค่าหรือไม่
      if(contactName.value === '' || contactEmail.value === '' || contactProject.value){
            contactMessage.classList.remove('color-blue')
            contactMessage.classList.remove('color-red')

            //show message
            contactMessage.textContent = 'Write all the input fields &#128512'
      }
}
contactForm.addEventListener('submit', sendEmail)