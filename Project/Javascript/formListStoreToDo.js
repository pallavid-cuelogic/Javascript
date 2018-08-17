function listStore() {
    var toDoName = document.getElementById("toDoName").value;
    var description = document.getElementById("description").value;
    var dueDate = document.getElementById("dueDate").value;
    var status = "Pending";

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

    var object=
    {
        toDoName : toDoName,
        description : description,
        dueDate : dueDate,
        category : category,
        status : status
    };

    var userName = localStorage.getItem("id");

    var wholeObject = localStorage.getItem(userName);
    var object1 = JSON.parse(wholeObject);

    object1.toDo.push(object);

    object2 = JSON.stringify(object1);
    localStorage.setItem(text, object2);

    window.location.href = "formToDo.html";
}
