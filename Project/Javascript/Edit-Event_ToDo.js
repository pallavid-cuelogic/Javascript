var text = localStorage.getItem("id");   
console.log(text);  
    
var t=localStorage.getItem(text);
var obj= JSON.parse(t); 

console.log(obj);  

var id = localStorage.getItem("Event-id");   

console.log(id);

document.getElementById("tname").value=obj.ToDo[id].tname;
document.getElementById("desc").value=obj.ToDo[id].desc;
document.getElementById("date").value=obj.ToDo[id].date;
document.getElementById("cat").value=obj.ToDo[id].category;

if(document.getElementById('Public').checked)
{
    var category=document.getElementById("Public").value;
    document.getElementById("cat").value="Public";
    status="Public";
}
else if(document.getElementById('Private').checked)
{
    var category=document.getElementById("Private").value;
    document.getElementById("cat").value="Private";
    status="Private";
}
else if(document.getElementById('Work').checked)
{
    var category=document.getElementById("Work").value;
    document.getElementById("cat").value="Work";
    status="Work";
}
else 
{
    var category=document.getElementById("Study").value;
    document.getElementById("cat").value="Study";
    status="Study";
}

function updateToDo()
{
    tname = document.getElementById("tname").value;
    desc = document.getElementById("desc").value;  
    date = document.getElementById("date").value; 
    cat = document.getElementById("cat").value;
    var status=obj.ToDo[id].status;
     
    var obj1 ={
        tname : tname,
        desc : desc,
        date : date,
        category : cat,
        status : status
    };

    obj.ToDo[id]=obj1;

    alert("Event Updated Successfully");

    myObj = JSON.stringify(obj);   
    localStorage.setItem(text,myObj);
}
