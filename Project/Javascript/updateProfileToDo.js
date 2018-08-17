var id = localStorage.getItem("id");

var wholeObject = localStorage.getItem(id);
var object = JSON.parse(wholeObject);

document.getElementById("userName").value = object.userName;
document.getElementById("firstName").value = object.firstName;
document.getElementById("lastName").value = object.lastName;
document.getElementById("password").value = object.password;
document.getElementById("address").value = object.address;

function display() {
    var id = localStorage.getItem("id");

    var wholeObject = localStorage.getItem(id);
    var object = JSON.parse(wholeObject);
    
    var userName = document.getElementById("userName").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var toDo = object.toDo;
    var gender = object.gender;
    
    var object1= {
        userName : userName,
        firstName : firstName,
        lastName : lastName,
        password : password,
        address : address,
        gender : gender,
        toDo : toDo
    };

    var check = validate(userName, firstName, lastName, password);

    if (check == true) {
        object2 = JSON.stringify(object1);
        localStorage.setItem(document.getElementById("userName").value, object2);
        
        if (password != object.password) {
            localStorage.setItem("id", null);
            window.location.href = "signInToDo.html";
        }
        else {
            window.location.href = "profilepageToDo.html";
        }
    }
}

