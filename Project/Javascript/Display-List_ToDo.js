var uname = localStorage.getItem("id");   

console.log(uname);  

var obj=localStorage.getItem(uname);
var task= JSON.parse(obj); 

console.log(task);

len=task[0].ToDo.length;
console.log(len);
console.log(task[0].ToDo[0].tname);
for(i=0;i<len;i++)
{
    var tbl_row=document.createElement("tr");
    
    var chk=document.createElement("input");
    chk.setAttribute("type","checkbox");

    var tname=document.createElement("td");
    tname.textContent=task[0].ToDo[i].tname;

    var category=document.createElement("td");
    category.textContent=task[0].ToDo[i].category;

    var date=document.createElement("td");
    date.textContent=task[0].ToDo[i].date;

    var desc=document.createElement("td");
    desc.textContent=task[0].ToDo[i].desc;

    tbl_row.appendChild(chk);
    tbl_row.appendChild(tname);
    tbl_row.appendChild(desc);
    tbl_row.appendChild(category);
    tbl_row.appendChild(date);

    var tbl = document.getElementById("tstyle");
    console.log(tbl);

    tbl.appendChild(tbl_row);

}
