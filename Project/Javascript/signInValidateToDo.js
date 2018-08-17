function signIn() {
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    console.log("in");
    if (userName == "") {
        alert("Enter Email");
        return false;
    }

    if (password == "") {
        alert("Enter password.");
        return false;
    }
    console.log("in signIn()");
    var wholeObject = localStorage.getItem(userName);
    var object = JSON.parse(wholeObject);

    console.log(wholeObject);
    console.log(object);

    if (object == null) {
        alert("Wrong email or password.")
        return false;
    }

    if (object.password != password) {
        alert("Wrong email or password.");
        return false;
    }

    localStorage.setItem("id", userName);
    console.log("in signIn()");
    window.location.href = "formToDo.html";
}