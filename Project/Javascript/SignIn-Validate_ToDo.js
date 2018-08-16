function SignIn()
{
    var uname=document.getElementById("uName").value;
    var pwd=document.getElementById("pwd").value;

    if(uname=="")
    {
        alert("Enter User Id...");
        return false;
    }

    if(pwd=="")
    {
        alert("Enter Password...");
        return false;
    }

    var text = localStorage.getItem(uname);   
    var obj= JSON.parse(text);   
    
    if(obj==null)
    {
        alert("Email doesn't Exists...")
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
 
