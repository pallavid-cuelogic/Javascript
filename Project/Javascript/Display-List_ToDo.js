var uname = localStorage.getItem("id");   

var obj=localStorage.getItem(uname);
var task= JSON.parse(obj); 

len=task.ToDo.length;

for(i=0;i<len;i++)
{
    var tbl_row=document.createElement("tr");
//    
    var chk=document.createElement("input");
    chk.setAttribute("type","checkbox");
    chk.setAttribute("id","checkbox"+i);
    chk.setAttribute("onCheck","Select(this.id)");
//
    tname=document.createElement("td");
    tname.textContent=task.ToDo[i].tname;
    var category=document.createElement("td");
    category.textContent=task.ToDo[i].category;
//
    var date=document.createElement("td");
    date.textContent=task.ToDo[i].date;
//
    var desc=document.createElement("td");
    desc.textContent=task.ToDo[i].desc;
//
    var state = document.createElement("td");
    state.textContent=task.ToDo[i].status;
    state.setAttribute("id",i);
//
    var btn = document.createElement("BUTTON");
    var text = document.createTextNode("Complete");
    btn.appendChild(text);
    btn.setAttribute("id",i);
    btn.setAttribute("onClick","UpdateStatus(this.id)");
//
    var ebtn = document.createElement("BUTTON");
    var etext = document.createTextNode("Edit");
    ebtn.appendChild(etext);
    ebtn.setAttribute("id",i);
    ebtn.setAttribute("onClick","EditEvent(this.id)");

    tbl_row.appendChild(chk);
    tbl_row.appendChild(tname);
    tbl_row.appendChild(desc);
    tbl_row.appendChild(category);
    tbl_row.appendChild(date);
    tbl_row.appendChild(state);
    tbl_row.appendChild(btn);
    tbl_row.appendChild(ebtn);

    var tbl = document.getElementById("tstyle");

    tbl.appendChild(tbl_row);
}

function UpdateStatus(id1)
{
    document.getElementById(id1).innerHTML="Completed";

    var text = localStorage.getItem("id");   
    console.log(text);  
        
    var t=localStorage.getItem(text);
    var obj= JSON.parse(t); 

    console.log(id1);
    
    var tname = obj.ToDo[id1].tname;
    var desc = obj.ToDo[id1].desc;
    var date = obj.ToDo[id1].date;
    var cat = obj.ToDo[id1].category;
    var status = "Completed";
    
    var obj1 ={
        tname : tname,
        desc : desc,
        date : date,
        category : cat,
        status : status
    };

    obj.ToDo[id1]=obj1;

    myObj = JSON.stringify(obj);   
    localStorage.setItem(text,myObj);
}

function EditEvent(id)
{  
    localStorage.setItem("Event-id",id);
    window.location.href ="Edit-Event_ToDo.html";
}

function deleteTodo()
{
    var delArray =[];
    for(var i=0;i<len;i++)
    {
       if(document.getElementById("checkbox"+i).checked)
       {    
            delArray.push(i);
       } 
    }

    delArrayLength = delArray.length;
    
    for(k=delArrayLength-1;k>=0;k--)
    {
        task.ToDo.splice(delArray[k],1);
        document.getElementById('tstyle').deleteRow(delArray[k]);
        var obj =
        {
            uname : task.uname,
            fname : task.fname,
            lname : task.lname,
            pwd : task.pwd,
            addr : task.addr,
            gen : task.gen,
            img : task.img,
            ToDo : task.ToDo
        };
        
        localStorage.setItem(uname,JSON.stringify(obj));
        location.reload();
    }    
}   

function filter()
{
    window.location.href ="Filter_ToDo.html";
}