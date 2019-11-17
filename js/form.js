function checkString(str, msg) {
    if (isWhiteSpace(str) || isEmpty(str)) {
        return msg + ", ";
    } else return "";
}

function validate() {
    if (isEmpty(isValid())) {
        return true;
    } else {
        console.log(isValid());
        document.getElementById("form_error").innerHTML = isValid();
        startTimer();
        return false;
    }

}

function startTimer() {
    window.setTimeout("clearError()", 5000);
}

function clearError() {
    document.getElementById("form_error").innerHTML = "";
}


function isValid() {
    return checkString(document.getElementById("firstname").value, "Imie żle") +
        checkString(document.getElementById("lastname").value, "Nazwisko źle ") +
        checkPhoneNumberRegEx(document.getElementById("phone_number").value) +
        checkEmailRegEx(document.getElementById("email").value);
}

function checkEmailRegEx(str) {
    var email = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if (email.test(str)) return ""; else return (" Podaj właściwy e-mail");
}

function checkPhoneNumberRegEx(str) {
    var number = /^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/;
    if (number.test(str)) return ""; else return (" Podaj właściwy numer");
}

function isWhiteSpace(str) {
    var ws = "\t\n\r ";
    for (let i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (ws.indexOf(c) > -1) {
            return true;
        }
    }
    return false;
}

function isEmpty(str) {
    return (!str || str.length === 0);
}
