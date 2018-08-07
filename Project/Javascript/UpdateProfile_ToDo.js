      
    var text = localStorage.getItem("id");   

    console.log(text);  
    
    var t=localStorage.getItem(text);
    var obj= JSON.parse(t); 

    console.log(obj[0].fname);  

    document.getElementById("uName").value=obj[0].uname;
    document.getElementById("fName").value=obj[0].fname;
    document.getElementById("lName").value=obj[0].lname;
    document.getElementById("Pwd").value=obj[0].pwd;
    document.getElementById("Addr").value=obj[0].addr;

function Display()
{
    var arr = [];

    var uname=document.getElementById("uName").value;
    var fname=document.getElementById("fName").value;
    var lname=document.getElementById("lName").value;
    var pwd=document.getElementById("Pwd").value;
    var addr=document.getElementById("Addr").value;
    
    var obj ={
        uname : uname,
        fname : fname,
        lname : lname,
        pwd : pwd,
        addr : addr,
    };
 
    console.log(fname);
    
    //localStorage.clear();

    var Check=Validate(uname,fname,lname,pwd);

    if(Check==true)
    {
        alert("Updated Successfully");
        arr.push(obj);
        myObj = JSON.stringify(arr);   
        localStorage.setItem(document.getElementById("uName").value,myObj);
        window.location.href ="ProfilePage_ToDo.html";
    }


}          



