emailjs.init("0SQXodYZ_COyn4ljD");


const getValue = () => {
      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      const message = document.getElementById('message').value

      let value = {name: name, email: email, message: message}
      return value

      //console.log(`name = ${name}`);
      //console.log(`email = ${email}`);
      //console.log(`message = ${message}`);
}

const sendMail = () => {

      let value = getValue()
      const serviceID = 'service_q8jpwjn'
      const templateID = 'template_8wuovmg'


      emailjs.send(serviceID, templateID,{
            from_name: value.email,
            to_name:value.name,
            message: value.message,
      }).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
            console.log('FAILED...', error);
      });

}







