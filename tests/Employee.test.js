const Employee = require("../lib/Employee");

describe("create a new Employee", () => {
    const myEmployee = new Employee("Jules", 5209, "Julesj93@gmail.com");

//checks for employee name
    test("check for name", () => {
        expect(myEmployee.getName()).toEqual("Jules");
    });
//checks for employee id
    test("check employee Id", () => {
        expect(myEmployee.getId()).toEqual(5209);
    });
//checks for employee email
    test("check employee Email", () => {
        expect(myEmployee.getEmail()).toEqual("Julesj93@gmail.com");
      });
//checks for employee role from getrole function      
    test("check Role", () => {
        expect(myEmployee.getRole()).toEqual("Employee");
  });
});

