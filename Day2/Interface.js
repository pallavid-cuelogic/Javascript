/*
Interface :
    Interfaces define properties, methods, and events, which are the members of the interface.
    Interfaces contain only the declaration of the members.
    It is the responsibility of the deriving class to define the members.
    It often helps in providing a standard structure that the deriving classes would follow.
*/
// Implement the above interface
var obj1 = {
    name: "Pallavi Deshmukh",
    college: "Pune University",
    fun: function () { return "Welcome to Pune University"; }
};
// Display contents of object
console.log("Students Object obj1:");
console.log(obj1.name);
console.log(obj1.college);
console.log(obj1.fun());
// Implement the above interface
var obj2 = {
    name: "Shubham Pawar",
    college: "Modern College",
    fun: function () { return "Pune University : Admission Confirmed"; }
};
// Display contents of object
console.log("Students Object obj2");
console.log(obj2.name);
console.log(obj2.college);
console.log(obj2.fun());
