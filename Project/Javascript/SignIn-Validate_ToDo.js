function SignIn()
{
    var Funame=document.getElementById("uName").value;
    var Fpwd=document.getElementById("pwd").value;

    if(Funame=="")
    {
        alert("Enter User Id...");
        return false;
    }

    if(Fpwd=="")
    {
        alert("Enter Password...");
        return false;
    }

    var text = localStorage.getItem(Funame);   
    var obj= JSON.parse(text);   
    
    if(obj==null)
    {
        alert("User Id doesn't Exists...")
        return false;
    }

    if(obj[0].pwd!=Fpwd)
    {
        alert("Invalid Password...");
        return false;
    }

    alert("Loged in Successfully");

    localStorage.setItem("id",Funame);
    
    window.location.href ="Form_ToDo.html";

}
 
