$('.email').keyup(function(){
    let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm
    
    if(regex.test(this.value) === false ){
        $(this).css("border", "2px solid red")
        $('.message').text("email format is wrong").css("color", "red")
    }else{
        $(this).css("border", "2px solid green")
        $('.message').text("email format is right").css("color", "green")
    }
})