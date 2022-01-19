function validation(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error_message = document.getElementById("error_message");
    var text;
error_message.style.padding = "10px";


if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;
}
if(password.length <8){
    text = "Please Enter Valid Password";
    error_message.innerHTML = text;
    return false;
}

}
function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error_message = document.getElementById("error_message");
    var text;
    error_message.style.padding = "10px";

    if(name.length <5){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if(password.length <8){
        text = "Password Should be Greater than or equals 8 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Registered Successfully")
    return true;
}