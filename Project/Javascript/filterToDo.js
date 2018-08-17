//////animation logic//////

document.getElementById('filterBtn').style.display = "inline";
document.getElementById("category").style.display = "none";
document.getElementById("status").style.display = "none";
document.getElementById("categorySelect").style.display = "none";
document.getElementById("statusSelect").style.display = "none";
document.getElementById("con4").style.display = "none";

//////

function filterButton() {
    document.getElementById("con4").style.display = "inline";
    document.getElementById("category").style.display = "inline";
    document.getElementById("status").style.display = "inline";
}

function categoryButton() {
    document.getElementById("con4").style.display = "inline";
    document.getElementById("categorySelect").style.display = "inline";
    document.getElementById("statusSelect").style.display = "none";
}

function statusButton() {
    document.getElementById("con4").style.display = "inline";
    document.getElementById("statusSelect").style.display = "inline";
    document.getElementById("categorySelect").style.display = "none";
}

function filter_updateToDo(option) {
    var uname = localStorage.getItem("id");

    var obj = localStorage.getItem(uname);
    var task = JSON.parse(obj);

    len = task.ToDo.length;

    var tb = document.getElementById('tstyle');
    while (tb.rows.length > 1) {
        tb.deleteRow(1);
    }

    var count;

    if (option == 1) {
        var cat = document.getElementById("category1").value;

        for (i = 0; i < len; i++) {
            if (task.ToDo[i].category == cat) {
                var tbl_row = document.createElement("tr");
                //    
                var chk = document.createElement("input");
                chk.setAttribute("type", "checkbox");
                chk.setAttribute("id", "checkbox" + i);
                //
                tname = document.createElement("td");
                tname.textContent = task.ToDo[i].tname;
                var category = document.createElement("td");
                category.textContent = task.ToDo[i].category;
                //
                var date = document.createElement("td");
                date.textContent = task.ToDo[i].date;
                //
                var desc = document.createElement("td");
                desc.textContent = task.ToDo[i].desc;
                //
                var state = document.createElement("td");
                state.textContent = task.ToDo[i].status;
                state.setAttribute("id", "s" + i);
                //
                var ebtn = document.createElement("BUTTON");
                var etext = document.createTextNode("Edit");
                ebtn.appendChild(etext);
                ebtn.setAttribute("id", i);
                ebtn.setAttribute("onClick", "EditEvent(this.id)");

                tbl_row.appendChild(chk);
                tbl_row.appendChild(tname);
                tbl_row.appendChild(desc);
                tbl_row.appendChild(category);
                tbl_row.appendChild(date);
                tbl_row.appendChild(state);

                if (task.ToDo[i].status == "Pending") {
                    var btn = document.createElement("BUTTON");
                    var text = document.createTextNode("Complete");
                    btn.appendChild(text);
                    btn.setAttribute("id", i);
                    btn.setAttribute("onClick", "UpdateStatus(this.id)");
                    tbl_row.appendChild(btn);
                }

                tbl_row.appendChild(ebtn);

                var tbl = document.getElementById("tstyle");
                tbl.appendChild(tbl_row);
            }
        }
    }
    else if (option == 2) {
        var state1 = document.getElementById("status1").value;

        for (i = 0; i < len; i++) {
            if (task.ToDo[i].status == state1) {
                var tbl_row = document.createElement("tr");
                //    
                var chk = document.createElement("input");
                chk.setAttribute("type", "checkbox");
                chk.setAttribute("id", "checkbox" + i);
                chk.setAttribute("onCheck", "Select(this.id)");
                //
                tname = document.createElement("td");
                tname.textContent = task.ToDo[i].tname;
                var category = document.createElement("td");
                category.textContent = task.ToDo[i].category;
                //
                var date = document.createElement("td");
                date.textContent = task.ToDo[i].date;
                //
                var desc = document.createElement("td");
                desc.textContent = task.ToDo[i].desc;
                //
                var state = document.createElement("td");
                state.textContent = task.ToDo[i].status;
                state.setAttribute("id", "s" + i);
                //
                var ebtn = document.createElement("BUTTON");
                var etext = document.createTextNode("Edit");
                ebtn.appendChild(etext);
                ebtn.setAttribute("id", i);
                ebtn.setAttribute("onClick", "EditEvent(this.id)");

                tbl_row.appendChild(chk);
                tbl_row.appendChild(tname);
                tbl_row.appendChild(desc);
                tbl_row.appendChild(category);
                tbl_row.appendChild(date);
                tbl_row.appendChild(state);

                if (task.ToDo[i].status == "Pending") {
                    var btn = document.createElement("BUTTON");
                    var text = document.createTextNode("Complete");
                    btn.appendChild(text);
                    btn.setAttribute("id", i);
                    btn.setAttribute("onClick", "UpdateStatus(this.id)");
                    tbl_row.appendChild(btn);
                }

                tbl_row.appendChild(ebtn);

                var tbl = document.getElementById("tstyle");
                tbl.appendChild(tbl_row);
            }
        }
    }
}
