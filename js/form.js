function checkString(str, msg) {
    if (isWhiteSpace(str) || isEmpty(str)) {
        return msg + " ";
    } else return "";
}

function validate() {
    if (isEmpty(isValid())) {
        return true;
    } else {
        console.log(isValid());
        return false;
    }

}

function isValid() {
    return checkString(document.getElementById("firstname").value, "Imie żle") +
        checkString(document.getElementById("lastname").value, "Nazwisko źle") +
        checkString(document.getElementById("phone_number").value, "Numer żle") +
        checkEmailRegEx(document.getElementById("email").value);
}

function checkEmailRegEx(str) {
    var email = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;;
    if (email.test(str)) return ""; else return ("Podaj właściwy e-mail");
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
