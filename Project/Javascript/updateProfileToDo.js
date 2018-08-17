document.getElementById("setImage").style.display = "none";
document.getElementById("browse").style.display = "none";

var id = localStorage.getItem("id");

var wholeObject = localStorage.getItem(id);
var object = JSON.parse(wholeObject);

document.getElementById("userName").value = object.userName;
document.getElementById("firstName").value = object.firstName;
document.getElementById("lastName").value = object.lastName;
document.getElementById("password").value = object.password;
document.getElementById("address").value = object.address;
document.getElementById("updatePhoto").src = object.image;

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
    var image=object.image;

    var object1= {
        userName : userName,
        firstName : firstName,
        lastName : lastName,
        password : password,
        address : address,
        gender : gender,
        image : image,
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

function updateImage()
{
    var id = localStorage.getItem("id");

    var wholeObject = localStorage.getItem(id);
    var object = JSON.parse(wholeObject);

    document.getElementById("userName").value = object.userName;
    document.getElementById("firstName").value = object.firstName;
    document.getElementById("lastName").value = object.lastName;
    document.getElementById("password").value = object.password;
    document.getElementById("address").value = object.address;
    
    var file = document.getElementById("browse").files[0];

    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
        let ret = reader.result;
        localStorage.setItem("img", ret);
    };

    reader.onerror = function (error) {
        console.log('Error: ', error);
    }

    var image = localStorage.getItem("img");

    document.getElementById("updatePhoto").src = image;

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
        image : image,
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
    }
    console.log();
}

function unlockImageBrowse()
{   
    document.getElementById("setImage").style.display = "inline";
    document.getElementById("browse").style.display = "inline";
}