function store() {

//   localStorage.clear();

    var userName = document.getElementById("userName").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var gender = document.getElementById("gender").value;
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

    console.log(image);

    var obj = {
        userName : userName,
        firstName : firstName,
        lastName : lastName,
        password : password,
        address : address,
        gender : gender,
        image : image,
        toDo : []
    };

    wholeObject = localStorage.getItem(document.getElementById("userName").value);
    var object = JSON.parse(wholeObject);

    var check = validate(userName, firstName, lastName, password);

    if (object == null && check == true) {
        myObj = JSON.stringify(obj);
        localStorage.setItem(document.getElementById("userName").value, myObj);
        localStorage.setItem("id", userName);
        window.open("formToDo.html", "_self");
    }
    else if (object != null) {
        alert("Email Already Exits.");
    }

}
