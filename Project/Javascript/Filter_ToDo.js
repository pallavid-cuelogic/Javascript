//////animation logic//////

document.getElementById('filterBtn').style.display="inline";
document.getElementById("category").style.display="none";
document.getElementById("status").style.display="none";
document.getElementById("categorySelect").style.display="none";
document.getElementById("statusSelect").style.display="none";

//////

function filterButton()
{
   document.getElementById("category").style.display="inline";
   document.getElementById("status").style.display="inline";
}

function categoryButton()
{
    document.getElementById("categorySelect").style.display="inline";   
    document.getElementById("statusSelect").style.display="none";
}

function statusButton()
{
    document.getElementById("statusSelect").style.display="inline";
    document.getElementById("categorySelect").style.display="none";
}

function filter_updateToDo(option)
{
    var uname = localStorage.getItem("id");   

    var obj=localStorage.getItem(uname);
    var task= JSON.parse(obj); 

    len=task.ToDo.length;
   
    var tb = document.getElementById('tstyle1');
    while(tb.rows.length > 1) 
    {
        tb.deleteRow(1);
    }

    if(option == 1)
    {
        var cat=document.getElementById("category1").value;
       
        for(i=0;i<len;i++)
        {
            //console.log(cat);
            if(task.ToDo[i].category == cat)
            {
                var tbl_row=document.createElement("tr");
            //    
                tname=document.createElement("td");
                tname.textContent=task.ToDo[i].tname;
            //
                var category=document.createElement("td");
                category.textContent=task.ToDo[i].category;
            //
                //console.log(category);

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
                //console.log(state);
                
                var btn = document.createElement("BUTTON");
                var text = document.createTextNode("Complete");
                btn.setAttribute("id",i);
                btn.setAttribute("onClick","UpdateStatus1(this.id)");
            //
                btn.appendChild(text);
    
                tbl_row.appendChild(tname);
                tbl_row.appendChild(desc);
                tbl_row.appendChild(category);
                tbl_row.appendChild(date);
                tbl_row.appendChild(state);
                tbl_row.appendChild(btn);
                
                var tbl = document.getElementById("tstyle1");
    
                tbl.appendChild(tbl_row);
            }
        }
    }

    else if(option == 2 )
    { 
        var state1=document.getElementById("status1").value;
      
        for(i=0;i<len;i++)
        {
            if(task.ToDo[i].status == state1)
            {   
                var tbl_row=document.createElement("tr");
            //    
                tname=document.createElement("td");
                tname.textContent=task.ToDo[i].tname;
            //
                var category=document.createElement("td");
                category.textContent=task.ToDo[i].category;
            //
               // console.log(category);

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
               // console.log(state);
                
                var btn = document.createElement("BUTTON");
                var text = document.createTextNode("Complete");
                btn.setAttribute("id",i);
                btn.setAttribute("onClick","UpdateStatus1(this.id)");
            //
                btn.appendChild(text);

                tbl_row.appendChild(tname);
                tbl_row.appendChild(desc);
                tbl_row.appendChild(category);
                tbl_row.appendChild(date);
                tbl_row.appendChild(state);
                tbl_row.appendChild(btn);
                
                var tbl = document.getElementById("tstyle1");

                tbl.appendChild(tbl_row);
            }
        }
    }
}

function UpdateStatus1(id1)
{
    document.getElementById(id1).innerHTML="Completed";

    var text = localStorage.getItem("id");   
    //console.log(text);  
        
    var t=localStorage.getItem(text);
    var obj= JSON.parse(t); 

   // console.log(obj);  

   // console.log(id1);
    
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
    
    for(k=delArrayLength;k>0;k--)
    {
        task.ToDo.splice(delArray[k],1);
        document.getElementById('tstyle').deleteRow(k);
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
        
//        arr.push(obj);
        
        localStorage.setItem(uname,JSON.stringify(obj));
        location.reload();
    }    
}