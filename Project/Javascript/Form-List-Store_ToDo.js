function ListStore()
{
    var tname=document.getElementById("tname").value;
    var desc=document.getElementById("desc").value;
    var date=document.getElementById("date").value;
    var status = "Pending";

    if(document.getElementById('Public').checked)
    {
        var category=document.getElementById("Public").value;
    }
    else if(document.getElementById('Private').checked)
    {
        var category=document.getElementById("Private").value;
    }
    else if(document.getElementById('Work').checked)
    {
        var category=document.getElementById("Work").value;
    }
    else 
    {
        var category=document.getElementById("Study").value;
    }

    var obj =
    {
        tname : tname,
        desc : desc,
        date : date,
        category : category,
        status : status
    };
 
    var text = localStorage.getItem("id");   

    console.log(text);  
    
    var t=localStorage.getItem(text);
    var task= JSON.parse(t); 

    console.log(obj);

    console.log(t);
   
    task[0].ToDo.push(obj);

    alert("Event Created Successfully");
    
    myObj = JSON.stringify(task);   
    localStorage.setItem(text,myObj);
}

