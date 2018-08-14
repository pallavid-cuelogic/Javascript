      
    var text = localStorage.getItem("id");   

    console.log(text);  
    
    var t=localStorage.getItem(text);
    var obj= JSON.parse(t); 

    console.log(obj);  

    document.getElementById("uName").value=obj.uname;
    document.getElementById("fName").value=obj.fname;
    document.getElementById("lName").value=obj.lname;
    document.getElementById("Pwd").value=obj.pwd;
    document.getElementById("Addr").value=obj.addr;
    document.getElementById("user-img").src=localStorage.getItem("img");

