function Store()
{
    var arr = [];

//    localStorage.clear();

    var uname=document.getElementById("uName").value;
    var fname=document.getElementById("fName").value;
    var lname=document.getElementById("lName").value;
    var pwd=document.getElementById("Pwd").value;
    var addr=document.getElementById("Addr").value;
    var gen=document.getElementById("Gender").value;
    var file = document.getElementById("Browse").files[0];

    // taking image path

    var reader = new FileReader();
    reader.readAsDataURL(file);
   
    reader.onload = function ()
    {
        let ref= reader.result;
        localStorage.setItem("img",ref);
    };

    reader.onerror = function (error)
    {
        console.log('Error: ', error);
    }

    var img=localStorage.getItem("img");

    console.log(img);

    var obj ={
        uname : uname,
        fname : fname,
        lname : lname,
        pwd : pwd,
        addr : addr,
        gen : gen,
        img : img,
        ToDo : []
    };
     
    text = localStorage.getItem(document.getElementById("uName").value);
    var object= JSON.parse(text);

    var Check=Validate(uname,fname,lname,pwd);

    if(object==null && Check==true)
    {
        alert("Registered Successfully");
        arr.push(obj);
        myObj = JSON.stringify(arr);   
        localStorage.setItem(document.getElementById("uName").value,myObj);
        localStorage.setItem("id",uname);
        localStorage.removeItem("img");     
        window.open("Form_ToDo.html","_self");
    }
    else if(object!=null)
    {
        alert("User Id Already Exits...");
    }
  
}
