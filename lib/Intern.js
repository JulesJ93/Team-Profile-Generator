//linking the employee constructor so that intern requires and uses its data
const Employee = require("../employee.js");


//we extend the intern file from Employee as the primary source
class Intern extends Employee{
    constructor(name, email, id, internsschool){
        super(name, email, id);
        this.school = internsschool;
    }
    //We get intern as a role 
    getRole(){
        return "Intern" 
     }
     getSchool() {
        return this.school;
     }
}

module.exports = Intern;