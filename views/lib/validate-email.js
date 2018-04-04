$.fn.validateEmail = function() {
  this.keyup(function() {
    let status = false
    let regEx = /\S+@\S+\.\S+/    

    status = regEx.test(this.value)
    if (status) {
      console.log(status);
      $('#email').css('border', 'solid 2px green')
    } else {
      console.log(status);
      $('#email').css('border', 'solid 2px red')        
    }
  })
}

$('input[name="email"]').validateEmail()