//Add a constructor for the employee class
class Employee {
    constructor(name, id, email){
        this.name=name;
        this.id=id;
        this.email=email;
    }
    //this is where the input returns a value from the function
    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }
    getEmail () {
        return this.email;
    }
    getRole () {
        return "Employee"
    }

}

module.exports = Employee;