var userName = localStorage.getItem("id");

var wholeObject = localStorage.getItem(userName);
var object = JSON.parse(wholeObject);

len = object.toDo.length;

for (i = 0; i < len; i++) {
    var tblRow = document.createElement("tr");
    
    var checkBoxRow = document.createElement("td");
    var checkBox = document.createElement("input");
    chk.setAttribute("type", "checkbox");
    chk.setAttribute("id", "checkbox" + i);
    chk.setAttribute("onCheck", "Select(this.id)");
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
    status.setAttribute("id", "s"+i);
    
    var editBtn = document.createElement("BUTTON");
    var eText = document.createTextNode("Edit");
    editBtn.appendChild(eText);
    editBtn.setAttribute("id", i);
    editBtn.setAttribute("onClick", "editEvent(this.id)");

    tblRow.appendChild(checkBoxRow);
    tblRow.appendChild(toDoName);
    tblRow.appendChild(description);
    tblRow.appendChild(category);
    tblRow.appendChild(dueDate);
    tblRow.appendChild(status);

    if (task.ToDo[i].status == "Pending") {
        var btn = document.createElement("BUTTON");
        var bText = document.createTextNode("Complete");
        btn.appendChild(bText);
        btn.setAttribute("id", i);
        btn.setAttribute("onClick", "updateStatus(this.id)");
        tblRow.appendChild(btn);
    }

    tblRow.appendChild(editBtn);

    var table = document.getElementById("tstyle");
    table.appendChild(tblRow);
}

function updateStatus(rowId) {
    var btn = document.createElement("BUTTON");
    var result = confirm("Are you sure want to update status ?");
    if (result == true) {
        document.getElementById("s" + rowId).innerHTML = "Completed";

        document.getElementById(id1).style.display="none";

        var userName = localStorage.getItem("id");
        
        var wholeObject = localStorage.getItem(userName);
        var object = JSON.parse(wholeObject);

        var toDoName = object.toDo[rowId].toDoName;
        var description = object.toDo[rowId].description;
        var dueDate = object.toDo[rowId].dueDate;
        var category = object.toDo[rowId].category;
        var status = "Completed";

        var object1 = {
            toDoName: toDoName,
            description: description,
            dueDate: dueDate,
            category: category,
            status: status
        };

        object.toDo[rowId] = object1;

        object2 = JSON.stringify(object);
        localStorage.setItem(userName, object2);
    }
}

function editEvent(rowId) {
    localStorage.setItem("Event-id", rowId);
    window.location.href = "editEventToDo.html";
}

function deleteTodo() {

    var result = confirm("Are you sure want to delete this todo?");
    if (result == true) {
        var delArray = [];
        for (i = 0; i < len; i++) {
            if (document.getElementById("checkbox" + i).checked) {
                delArray.push(i);
            }
        }

        delArrayLength = delArray.length;

        for (k = delArrayLength - 1; k >= 0; k--) {
            object.toDo.splice(delArray[k], 1);
            document.getElementById('tstyle').deleteRow(delArray[k]);
            var object1={
                userName : object.userName,
                firstName : object.firstName,
                lastName : object.lastName,
                password : object.password,
                address : object.address,
                gender : object.gender,
                img : object.img,
                toDo : object.toDo
            };

            localStorage.setItem(uname, JSON.stringify(object1));
            location.reload();
            document.getElementById("chk0").checked = false;
        }
    }
}

function deleteAll() {
    for (i = 0; i < len; i++) {
        document.getElementById("checkbox" + i).checked = true;
    }
}

