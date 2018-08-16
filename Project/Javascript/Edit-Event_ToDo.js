var text = localStorage.getItem("id");   
    
var t=localStorage.getItem(text);
var obj= JSON.parse(t); 

var id = localStorage.getItem("Event-id");   

document.getElementById("tname").value=obj.ToDo[id].tname;
document.getElementById("desc").value=obj.ToDo[id].desc;
document.getElementById("date").value=obj.ToDo[id].date;



function updateToDo()
{
    tname = document.getElementById("tname").value;
    desc = document.getElementById("desc").value;  
    date = document.getElementById("date").value; 
    status = obj.ToDo[id].status;    
   
    if(document.getElementById('Public').checked)
    {
        var category=document.getElementById("Public").value;
        cat="Public";
    }
    else if(document.getElementById('Private').checked)
    {
        var category=document.getElementById("Private").value;
        cat="Private";
    }
    else if(document.getElementById('Work').checked)
    {
        var category=document.getElementById("Work").value;
        cat="Work";
    }
    else 
    {
        var category=document.getElementById("Study").value;
        cat="Study";
    }

    var obj1 ={
        tname : tname,
        desc : desc,
        date : date,
        category : cat,
        status : status
    };

    obj.ToDo[id]=obj1;

    myObj = JSON.stringify(obj);   
    localStorage.setItem(text,myObj);
    alert("wait");
    window.location.href ="Form_ToDo.html";
}

