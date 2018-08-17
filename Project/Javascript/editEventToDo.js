var userName = localStorage.getItem("id");

var wholeObject = localStorage.getItem(userName);
var object = JSON.parse(wholeObject);

var id = localStorage.getItem("Event-id");

var categoryPre=object.toDo[id].category;

console.log(categoryPre);

if(categoryPre == "Public")
{
    document.getElementById("Public").checked=true;    
}
else if(categoryPre == "Private")
{
    document.getElementById("Private").checked=true;    
}
else if(categoryPre == "Work")
{
    document.getElementById("Work").checked=true;    
}
else if(categoryPre == "Study")
{
    document.getElementById("Study").checked=true;    
}

document.getElementById("toDoName").value = object.toDo[id].toDoName;
document.getElementById("description").value = object.toDo[id].description;
document.getElementById("dueDate").value = object.toDo[id].dueDate;

function updateToDo() {
    toDoName = document.getElementById("toDoName").value;
    description = document.getElementById("description").value;
    dueDate = document.getElementById("dueDate").value;
    status = object.toDo[id].status;

    if (document.getElementById('Public').checked) {
        var category = document.getElementById("Public").value;
    }
    else if (document.getElementById('Private').checked) {
        var category = document.getElementById("Private").value;
    }
    else if (document.getElementById('Work').checked) {
        var category = document.getElementById("Work").value;
    }
    else {
        var category = document.getElementById("Study").value;
    }

    var object1 = {
        toDoName : toDoName,
        description : description,
        dueDate : dueDate,
        category: category,
        status: status
    };

    object.toDo[id] = object1;

    object2 = JSON.stringify(object);
    localStorage.setItem(userName, object2);
    window.location.href = "formToDo.html";
}
