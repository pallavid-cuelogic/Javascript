function search()
{
    console.log(document.getElementById("tname").value);

    var tname = document.getElementById("tname").value;

    var uname = localStorage.getItem("id");   

    console.log(uname);  

    var obj=localStorage.getItem(uname);
    var task= JSON.parse(obj); 

    len=task.ToDo.length;

    for(i=0;i<len;i++)
    {
        if(task.ToDo[i].tname == tname)
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
                tbl_row.appendChild(chk);
                tbl_row.appendChild(tname);
                tbl_row.appendChild(desc);
                tbl_row.appendChild(category);
                tbl_row.appendChild(date);
                tbl_row.appendChild(state);
                
                var tbl=document.getElementById("tstyle1");
            
                tbl.appendChild(tbl_row);

                break;
        }
    }

    if(len == i)
    {
        alert("This Task doesn't exists.");
    }

}

