function SignIn()
{
    var uname=document.getElementById("uName").value;
    var pwd=document.getElementById("pwd").value;

    if(uname=="")
    {
        alert("Enter Email");
        return false;
    }

    if(pwd=="")
    {
        alert("Enter password.");
        return false;
    }

    var text = localStorage.getItem(uname);   
    var obj= JSON.parse(text);   
    
    if(obj==null)
    {
        alert("Email doesn't exists.")
        return false;
    }
 
    if(obj.pwd!=pwd)
    {
        alert("Email doesn't Exists.");
        return false;
    }
    
    localStorage.setItem("id",uname);
    
    window.location.href ="Form_ToDo.html";
}
 