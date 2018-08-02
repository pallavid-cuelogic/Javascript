// Declare class Student
var Student = /** @class */
(

function () 
{
    //constructor 
    function Student(value) 
    {
        this.name = value;
    }
    
    //Behaviour
    Student.prototype.display = function () 
    {
        console.log("Name of Employee : " + this.name);
    };
    
    return Student;
}
());


// Create object of above class
var obj1 = new Student("Pallavi Deshmukh");
obj1.display();
