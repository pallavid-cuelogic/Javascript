    var text = localStorage.getItem("id");   

    console.log(text);  
    
    var t=localStorage.getItem(text);
    var obj1= JSON.parse(t); 

    console.log(obj1.fname);  

    document.getElementById("uName").value=obj1.uname;
    document.getElementById("fName").value=obj1.fname;
    document.getElementById("lName").value=obj1.lname;
    document.getElementById("Pwd").value=obj1.pwd;
    document.getElementById("Addr").value=obj1.addr;
   
    console.log(obj1);

function Display()
{
    var text = localStorage.getItem("id");   

    console.log(text);  
    
    var t=localStorage.getItem(text);
    var obj= JSON.parse(t); 

    console.log(obj.fname);  

    var uname=document.getElementById("uName").value;
    var fname=document.getElementById("fName").value;
    var lname=document.getElementById("lName").value;
    var pwd=document.getElementById("Pwd").value;
    var addr=document.getElementById("Addr").value;
    var ToDo1=obj.ToDo;
    var gen=obj.gen;
    console.log(obj.ToDo);

    console.log(ToDo1);

    var obj1 ={
        uname : uname,
        fname : fname,
        lname : lname,
        pwd : pwd,
        addr : addr,
        gen : gen,
        ToDo : ToDo1
    };
 
    console.log(fname);
  
    var Check=Validate(uname,fname,lname,pwd);

    if(Check==true)
    {
        myObj = JSON.stringify(obj1);   
        localStorage.setItem(document.getElementById("uName").value,myObj);
        alert("wait");
        if(pwd != obj.pwd)
        {
            alert("Password is changed");
            localStorage.setItem("id",null);
            window.location.href ="Sign-In_ToDo.html";
        }
        else
        {
            window.location.href ="ProfilePage_ToDo.html";
        }
    }

}          

