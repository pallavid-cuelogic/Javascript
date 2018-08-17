function signIn() {
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;

    if (userName == "") {
        alert("Enter Email");
        return false;
    }

    if (password == "") {
        alert("Enter password.");
        return false;
    }

    var wholeObject = localStorage.getItem(userName);
    var obj = JSON.parse(wholeObject);

    if (obj == null) {
        alert("Wrong email or password.")
        return false;
    }

    if (obj.pwd != pwd) {
        alert("Wrong email or password.");
        return false;
    }

    localStorage.setItem("id", userName);

    window.location.href = "formToDo.html";
}
