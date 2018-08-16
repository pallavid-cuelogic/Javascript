      
    var text = localStorage.getItem("id");   
 
    var t=localStorage.getItem(text);
    var obj= JSON.parse(t); 

    document.getElementById("uName").innerHTML=obj.uname;
    document.getElementById("fName").innerHTML=obj.fname;
    document.getElementById("lName").innerHTML=obj.lname;
    document.getElementById("Pwd").innerHTML="******";
    document.getElementById("Addr").innerHTML=obj.addr;
    document.getElementById("user-img").src=localStorage.getItem("img");

