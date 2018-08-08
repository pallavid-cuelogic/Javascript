function ListStore()
{
    var tname=document.getElementById("tname").value;
    var desc=document.getElementById("desc").value;
    var date=document.getElementById("date").value;

    if(document.getElementById('public').checked)
    {
        var category=document.getElementById("public").value;
    }
    else
    {
        var category=document.getElementById("private").value;
    }

    var obj ={
        tname : tname,
        desc : desc,
        date : date,
        category : category
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

