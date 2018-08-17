function search() {
    var toDoName = document.getElementById("toDoName").value;

    var userName = localStorage.getItem("id");

    var wholeObject = localStorage.getItem(userName);
    var obejct = JSON.parse(wholeObject);

    len = obejct.toDo.length;

    for (i = 0; i < len; i++) {
        if (object.toDo[i].toDoName == toDoName) {
            var tblRow = document.createElement("tr");
              
            var checkBoxRow = document.createElement("input");
            var checkBox = document.createElement("input");
            checkBox.setAttribute("type", "checkbox");
            checkBox.setAttribute("id", "checkbox" + i);
            checkBox.setAttribute("onCheck", "Select(this.id)");
            checkBoxRow.appendChild(checkBox);
            
            toDoName = document.createElement("td");
            toDoName.textContent = object.toDo[i].toDoName;

            var category = document.createElement("td");
            category.textContent = object.toDo[i].category;
            
            var dueDate = document.createElement("td");
            dueDate.textContent = object.toDo[i].dueDate;
            
            var description = document.createElement("td");
            description.textContent = object.toDo[i].description;
            
            var status = document.createElement("td");
            status.textContent = object.toDo[i].status;
            status.setAttribute("id", i);
            
            tblRow.appendChild(checkBox);
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

    if (len == i) {
        alert("Task doesn't exists.");
    }

}

