/**
 * Created by mitul on 29/11/15.
 */

var $password = $("#password");
var $confirm_password = $("#confirm_password");
var $username = $("#username");


function password_length(){
    return $password.val().length;
}

function valid_length(){
    return $username.val().length > 5;
}

function check_username(){
    if (valid_length()){
        $username.next().hide();
    }
    else
    {
     $username.next().show();
    }
}
function confirm_password_length(){
    return $confirm_password.val().length;
}

function password_valid (){
    return $password.val().length > 8;
}

function length_match (){
    return password_length() === confirm_password_length()
}

function equal(){
    return $password.val() === $confirm_password.val();
}

function equal_length_match(){
    if (length_match() && equal() && password_valid()){
        $confirm_password.next().hide();
    }
    else{
        $confirm_password.next().show();
    }
}

function confirm (){
    return valid_length() && equal_length_match();
}

function enableSubmitEvent() {
    $("#submit").prop("disabled", !confirm());
}

function passwordEvent(){
    //Find out if password is valid
    if(password_valid()) {
        //Hide hint if valid
        $password.next().hide();
    } else {
        //else show hint
        $password.next().show();
    }
}
$username.focus(check_username).keyup(check_username);
$password.focus(passwordEvent).keyup(passwordEvent);
$confirm_password.focus(equal_length_match).keyup(equal_length_match).keyup(enableSubmitEvent);;


