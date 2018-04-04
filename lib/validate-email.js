// $(document).ready(function(){
//   $("input").keyup(function(){
//     let email = $(this).val();
//
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//
//     let div = $('div')
//
//     if(re.test(String(email).toLowerCase()) == true) {
//       this.style.border = '2px solid green'
//       div.text('')
//     } else {
//       this.style.border = '2px solid red'
//       div.text('Email is not valid !')
//     }
//   });
// });

//vanilla js:

function validateEmail() {
  let input = document.getElementById('isian')

  let email = input.value
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      let div = document.getElementById('hasil')

      if(re.test(String(email).toLowerCase()) == true) {
        input.style.border = '2px solid green'
        div.innerHTML = "Valid mail !";
      } else {
        input.style.border = '2px solid red'
        div.innerHTML = "Email is not valid !";
      }

}
