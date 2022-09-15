let emailCollectorForm = document.getElementById('email-collector')
let changedHTML = document.getElementById('mainContent')
emailCollectorForm.addEventListener('submit', function (event) {
  event.preventDefault()
  let formData = new FormData(event.target)
  let userFirstname = formData.get('firstName')
  let userEmail = formData.get('emailAdress')
  changedHTML.innerHTML = ` <h2>Thank you ${userFirstname.toUpperCase()}</h2> 
  <p>We will send you a mail to your ${userEmail} adress.</p> `
})
