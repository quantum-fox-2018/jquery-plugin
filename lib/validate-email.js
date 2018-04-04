function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}
  
function validate() {
    let error = $('#error')
    let email = $('#email')
    var isEmailValid = validateEmail(email.val())

    if(!isEmailValid) {
        error.text("Email address is not valid.")
        email.css("border", "2px solid red")
        error.css("color", "red")
    } else {
        error.text("")
        email.css("border", "2px solid green")
    }
}

$('#email').keyup(validate);