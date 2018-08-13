function search()
{
    console.log(document.getElementById("tname").value);

    var tname = document.getElementById("tname").value;

    var uname = localStorage.getItem("id");   

    console.log(uname);  

    var obj=localStorage.getItem(uname);
    var task= JSON.parse(obj); 

    len=task[0].ToDo.length;

    for(i=0;i<len;i++)
    {
        if(task[0].ToDo[i].tname == tname)
        {
            var tbl_row=document.createElement("tr");
            //    
                var chk=document.createElement("input");
                chk.setAttribute("type","checkbox");
                chk.setAttribute("id","checkbox"+i);
                chk.setAttribute("onCheck","Select(this.id)");
            //
                tname=document.createElement("td");
                tname.textContent=task[0].ToDo[i].tname;
                var category=document.createElement("td");
                category.textContent=task[0].ToDo[i].category;
            //
                var date=document.createElement("td");
                date.textContent=task[0].ToDo[i].date;
            //
                var desc=document.createElement("td");
                desc.textContent=task[0].ToDo[i].desc;
            //
                var state = document.createElement("td");
                state.textContent=task[0].ToDo[i].status;
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
        alert("This Task doesn't exists");
    }

}

