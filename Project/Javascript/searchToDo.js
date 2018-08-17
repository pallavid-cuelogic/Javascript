function search() {
    var toDoName = document.getElementById("toDoName").value;

    var userName = localStorage.getItem("id");

    var wholeObject = localStorage.getItem(userName);
    var object = JSON.parse(wholeObject);

    len = object.toDo.length;

    for (iterator = 0; iterator < len; iterator++) {
        if (object.toDo[iterator].toDoName == toDoName) {
            var tblRow = document.createElement("tr");
                              
            toDoName = document.createElement("td");
            toDoName.textContent = object.toDo[iterator].toDoName;

            var category = document.createElement("td");
            category.textContent = object.toDo[iterator].category;
            
            var dueDate = document.createElement("td");
            dueDate.textContent = object.toDo[iterator].dueDate;
            
            var description = document.createElement("td");
            description.textContent = object.toDo[iterator].description;
            
            var status = document.createElement("td");
            status.textContent = object.toDo[iterator].status;
            status.setAttribute("id", iterator);
            
            tblRow.appendChild(toDoName);
            tblRow.appendChild(description);
            tblRow.appendChild(category);
            tblRow.appendChild(dueDate);
            tblRow.appendChild(status);

            var table = document.getElementById("tstyle1");

            table.appendChild(tblRow);

            break;
        }
    }

    if (len == iterator) {
        alert("Task doesn't exists.");
    }

}

