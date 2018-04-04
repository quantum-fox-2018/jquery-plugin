  $("#kirim").click(()=>{
    let email = document.getElementById('email').value
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var hasil = re.test(String(email).toLowerCase());
    $.ajax({
      url:'http://127.0.0.1:8080/forms',
      method:'POST',
      sucess:(hasil)=>{
        console.log(hasil);
      },
      dataType: 'JSON'
    });
  })
