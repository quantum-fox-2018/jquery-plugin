let span = $("span")
let formEmail = $("input")

$("input").keyup(function () {
    let reGex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let status = reGex.test(String(this.value).toLowerCase())
    
    if(status != true){
        formEmail.css({'border':'5px solid red', 'color':'red'})
        console.log(span)
        span.text('Format salah').css({'color':'red'})
    } else {
        formEmail.css({'border':'5px solid green', 'color':'green'})
        console.log(span)
        span.text('Format salah').css({'color':'green'})
    }
})