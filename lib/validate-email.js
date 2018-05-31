$("#wrong").hide()
$("#valid").hide()
$("h2").css("color", "blue")

function validate(textInput) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(textInput).toLowerCase());
}

$("#input-email").keyup(function(){
    let check = validate($("#input-email").val())

    if(check) {
        $("#input-email").css("border-color", "green");
        $("#valid").css("color", "green")
        $("#valid").show()
        $("#wrong").hide()
    } else {
        $("#input-email").css({"border-color": "red", "color": "red"});
        // $("#input-email").css("color", "red");
        $("#wrong").css("color", "red")
        $("#wrong").show()
    }
});