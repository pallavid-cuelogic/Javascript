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

    var result=validateToDo(toDoName,dueDate);
    
    if(result==true)
    {
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
        localStorage.setItem(userName, object2);

        window.location.href = "formToDo.html";
    }
}

function validateToDo(toDoName,dueDate)
{
    if(toDoName == "")
    {
        alert("Enter task name.");
        return false;
    }

    var currentDate=new Date();

    var getDate=currentDate.getDate();
    var getMonth=currentDate.getMonth();
    var getYear=currentDate.getYear();

    var arrayDateSplit=dueDate.split("-");

    if(arrayDateSplit[0]<getYear || arrayDateSplit[1]< getMonth || arrayDateSplit[2]<getDate)
    {
        alert("Wrong date");
        return false;
    }
    
    return true;
}
