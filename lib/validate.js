

$('.email').keyup(function(){    
    let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
    let emailInput = this.value
    if(email_regex.test(emailInput)){
        this.style.border = '2px solid green'
        $('#info').hide()
    }else{
        this.style.border = '2px solid red'
        $('#info').show()
    }
})