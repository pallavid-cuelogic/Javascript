var userName = localStorage.getItem("id");

var wholeObject = localStorage.getItem(userName);
var object = JSON.parse(wholeObject);

len = object.toDo.length;

for (iterator = 0; iterator < len; iterator++) {
    var tblRow = document.createElement("tr");
    
    var checkBoxRow = document.createElement("td");
    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "checkbox" + iterator);
    checkBox.setAttribute("onCheck", "Select(this.id)");
    checkBoxRow.appendChild(checkBox);
    
    toDoName = document.createElement("td");
    toDoName.textContent = object.toDo[iterator].toDoName;
    
    var category = document.createElement("td");
    category.textContent = object.toDo[iterator].category;
    
    var dueDate = document.createElement("td");
    dueDate.textContent = object.toDo[iterator].dueDate;
    
    var description = document.createElement("td");
    description.textContent = object.toDo[iterator].description;
    
    var statu = document.createElement("td");
    statu.textContent = object.toDo[iterator].status;
    statu.setAttribute("id","s"+iterator);
    
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
    tblRow.appendChild(statu);

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

function updateStatus(rowId) {
    var btn = document.createElement("BUTTON");
    var result = confirm("Are you sure want to update status ?");
    if (result == true) {
        document.getElementById("s" + rowId).innerHTML = "Completed";

        document.getElementById(rowId).style.display="none";

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
        for (iterator = 0; iterator < len; iterator++) {
            if (document.getElementById("checkbox"+iterator).checked) {
                delArray.push(iterator);
            }
        }

        delArrayLength = delArray.length;

        for (iterator = delArrayLength - 1; iterator >= 0; iterator--) {
            object.toDo.splice(delArray[iterator], 1);
            document.getElementById('tstyle').deleteRow(delArray[iterator]);
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

            localStorage.setItem(userName, JSON.stringify(object1));
            location.reload();
            document.getElementById("checkBox").checked = false;
        }
    }
    document.getElementById("chk0").checked = false;
}

function toggle() {
    var check=document.getElementById("checkBox").checked;

    if(check==true)
    {
        for (iterator = 0; iterator < len; iterator++) {
            document.getElementById("checkbox"+ iterator).checked = true;
        }
    }
    else
    {
        for (iterator = 0; iterator < len; iterator++) {
            document.getElementById("checkbox"+ iterator).checked = false;
        }
    }
}

