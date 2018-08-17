var userName = localStorage.getItem("id");

var wholeObject = localStorage.getItem(userName);
var object = JSON.parse(wholeObject);

var id = localStorage.getItem("Event-id");

document.getElementById("toDoName").value = object.toDo[id].toDoName;
document.getElementById("description").value = object.toDo[id].description;
document.getElementById("dueDate").value = object.toDo[id].dueDate;

function updateToDo() {
    toDoName = document.getElementById("toDoName").value;
    description = document.getElementById("description").value;
    dueDate = document.getElementById("dueDate").value;
    status = object.ToDo[id].status;

    if (document.getElementById('Public').checked) {
        var category = document.getElementById("Public").value;
//        cat = "Public";
    }
    else if (document.getElementById('Private').checked) {
        var category = document.getElementById("Private").value;
//        cat = "Private";
    }
    else if (document.getElementById('Work').checked) {
        var category = document.getElementById("Work").value;
//        cat = "Work";
    }
    else {
        var category = document.getElementById("Study").value;
//        cat = "Study";
    }

    var object1 = {
        toDoName : toDoName,
        description : description,
        dueDate : dueDate,
        category: category,
        status: status
    };

    object.ToDo[id] = object1;

    object2 = JSON.stringify(object);
    localStorage.setItem(text, object2);
    window.location.href = "formToDo.html";
}
