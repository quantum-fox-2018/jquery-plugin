$.fn.checkEmail = function() {
  let email = $('[name="email"]')
  let info = $('[name="info"]')
  
  email.keyup(function () {
    let input = $('input').val()
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let check = re.test(input)

    if (check) {
      email.css("border-color", "green")
      info.text("")
    } else {
      email.css("border-color", "red")
      info.text('email address is not valid').css('color', 'red')
    }
  })
}