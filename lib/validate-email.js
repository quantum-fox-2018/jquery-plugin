
$.fn.EmailValidation = function() {
  // console.log(this);
  this.keyup(function() {
    let pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

    let isValid = pattern.test(this.value);

    let div = $('div')

    if(isValid){
      this.style.border = "2px solid green"
      div.text('')
    }else{
      this.style.border = "2px solid red"
      div.text('Email is not valid.')
    }
  })

}

$('.email').EmailValidation();
