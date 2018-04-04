$.fn.validate = function(){
  this.keyup(()=>{
      let email = $('#email').val()
      let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
        $('#email').css('border','solid 5px red')
        $('#error').show()
      }else{
        $('#email').css('border','solid 5px green')
        $('#error').hide()
      }
  })
}

$('#error').hide()
$('#email').validate()