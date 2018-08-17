document.getElementById('filterBtn').style.display = "inline";
document.getElementById("category").style.display = "none";
document.getElementById("status").style.display = "none";
document.getElementById("categorySelect").style.display = "none";
document.getElementById("statusSelect").style.display = "none";
document.getElementById("con4").style.display = "none";

function filterButton() {
    document.getElementById("con4").style.display = "inline";
    document.getElementById("category").style.display = "inline";
    document.getElementById("status").style.display = "inline";
}

function categoryButton() {
    document.getElementById("con4").style.display = "inline";
    document.getElementById("categorySelect").style.display = "inline";
    document.getElementById("statusSelect").style.display = "none";
}

function statusButton() {
    document.getElementById("con4").style.display = "inline";
    document.getElementById("statusSelect").style.display = "inline";
    document.getElementById("categorySelect").style.display = "none";
}

function filterUpdateToDo(option) {
    var userName = localStorage.getItem("id");

    var wholeObject = localStorage.getItem(userName);
    var object= JSON.parse(wholeObject);

    len = object.toDo.length;

    var tb = document.getElementById('tstyle');
    while (tb.rows.length > 1) {
        tb.deleteRow(1);
    }

    var count;

    if (option == 1) {
        var cat = document.getElementById("category1").value;

        for (iterator = 0; iterator < len; iterator++) {
            if (object.toDo[iterator].category == cat) {
                
                var tblRow = document.createElement("tr");
                
                var checkBoxRow = document.createElement("td");    
                var checkBox = document.createElement("input");
                checkBox.setAttribute("type", "checkbox");
                checkBox.setAttribute("id", "checkbox" + iterator);
                checkBoxRow.appendChild(checkBox);
                
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
                status.setAttribute("id", "s" + iterator);
                
                var editBtn = document.createElement("BUTTON");
                var eText = document.createTextNode("Edit");
                editBtn.appendChild(eText);
                editBtn.setAttribute("id", iterator);
                editBtn.setAttribute("onClick", "editEvent(this.id)");

                tblRow.appendChild(checkBoxRow);
                tblRow.appendChild(toDoName);
                tblRow.appendChild(description);
                tblRow.appendChild(category);
                tblRow.appendChild(dueDate);
                tblRow.appendChild(status);

                if (object.toDo[iterator].status == "Pending") {
                    var btn = document.createElement("BUTTON");
                    var bText = document.createTextNode("Complete");
                    btn.appendChild(bText);
                    btn.setAttribute("id", iterator);
                    btn.setAttribute("onClick", "updateStatus(this.id)");
                    tblRow.appendChild(btn);
                }

                tblRow.appendChild(editBtn);

                var table = document.getElementById("tstyle");
                table.appendChild(tblRow);
            }
        }
    }
    else if (option == 2) {
        var state1 = document.getElementById("status1").value;

        for (iterator = 0; iterator < len; iterator++) {
            if (object.toDo[iterator].status == state1) {
                var tblRow = document.createElement("tr");
                
                var checkBoxRow = document.createElement("td");    
                var checkBox = document.createElement("input");
                checkBox.setAttribute("type", "checkbox");
                checkBox.setAttribute("id", "checkbox" + iterator);
                checkBoxRow.appendChild(checkBox);
                
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
                status.setAttribute("id", "s" + iterator);
                
                var editBtn = document.createElement("BUTTON");
                var eText = document.createTextNode("Edit");
                editBtn.appendChild(eText);
                editBtn.setAttribute("id", iterator);
                editBtn.setAttribute("onClick", "editEvent(this.id)");

                tblRow.appendChild(checkBoxRow);
                tblRow.appendChild(toDoName);
                tblRow.appendChild(description);
                tblRow.appendChild(category);
                tblRow.appendChild(dueDate);
                tblRow.appendChild(status);

                if (object.toDo[iterator].status == "Pending") {
                    var btn = document.createElement("BUTTON");
                    var bText = document.createTextNode("Complete");
                    btn.appendChild(bText);
                    btn.setAttribute("id", iterator);
                    btn.setAttribute("onClick", "updateStatus(this.id)");
                    tblRow.appendChild(btn);
                }

                tblRow.appendChild(editBtn);

                var table = document.getElementById("tstyle");
                table.appendChild(tblRow);
            }
        }
    }
}
