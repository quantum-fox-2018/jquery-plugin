
 $.fn.validateEmail = function() {

    $('[name="email"]').keyup(function() {

        let email = this.value
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let check = re.test(String(email).toLowerCase());
        if(check){
            $('span').text("").css("color","red")
            $('[name="email"]').css({"border-color": "green", "border-solid": "bold", "border-width": "3px"})
       }else{
            $('span').text("Email address is not valid").css("color","red")
            $('[name="email"]').css({"border-color": "red", "border-solid": "bold", "border-width": "3px"})
       }
    });
};
