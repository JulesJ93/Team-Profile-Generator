const Employee = require('.lib\Employee.js')

describe("create a new Employee", () => {
    const myEmployee = new Employee("Jules", 5209, "Jules@mymail.com");

//checks for employee name
    test("check for name", () => {
        expect(myemployee.getname()).toEqual(Jules);
    });
//checks for employee id
    test("check employee Id", () => {
        expect(myemployee.getid()).toEqual(5209);
    });
//checks for employee email
    test("check employee Email", () => {
        expect(myEmployee.getEmail()).toEqual("Jules@mymail.com");
      });
//checks for employee role from getrole function      
    test("check Role", () => {
        expect(myEmployee.getRole()).toEqual("Employee");
  });
});

