function ListStore()
{
    var arr = [];

    var tname=document.getElementById("tname").value;
    var desc=document.getElementById("desc").value;
    var date=document.getElementById("date").value;
    var category=document.getElementById("category").value;
    
    var obj ={
        tname : tname,
        desc : desc,
        date : date,
        category : category
    };
 
    alert("Event Created Successfully");
    arr.push(obj);
    myObj = JSON.stringify(arr);   
    localStorage.setItem(document.getElementById("tname").value,myObj);
}


