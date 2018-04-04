function validateEmail(email) {
  var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    // alert( pattern.test(emailAddress) );
    return pattern.test(email);
}

$('.email').keyup(function() {
  // console.log(this);
  let isValid = validateEmail(this.value);

  let div = $('div')

  if(isValid){
    this.style.border = "2px solid green"
    div.text('')
  }else{
    this.style.border = "2px solid red"
    div.text('Email is not valid.')
  }
})
