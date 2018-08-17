
var id = localStorage.getItem("id");

var wholeObject = localStorage.getItem(id);
var obj = JSON.parse(wholeObject);

document.getElementById("userName").innerHTML = obj.userName;
document.getElementById("firstName").innerHTML = obj.firstName;
document.getElementById("lastName").innerHTML = obj.lastName;
document.getElementById("password").innerHTML = "******";
document.getElementById("address").innerHTML = obj.address;
document.getElementById("user-img").src = obj.image;
