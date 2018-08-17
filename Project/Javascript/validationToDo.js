function validate(userName, firstName, lastName, password) {
    var filter = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if (!userName.match(filter)) {
        alert("Invalid email.");
        userName.focus;
        return false;
    }

    if (firstName == "") {
        alert("First name required");
        return false;
    }

    if (lastName == "") {
        alert("Last name required");
        return false;
    }

    if (password == "") {
        alert("Password required");
        return false;
    }

    var len = password.length;

    if (len < 5) {
        alert("Password must be at least 5 digit");
        return false;
    }

    return true;
}

