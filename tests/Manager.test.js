const Manager = require ('..lib\Manager.js')

describe("create a manager", () => {
    const myManager = new Manager("Jules", 5209, "Julesj93@gmail.com", 1);
  //test to check name
    test("check name", () => {
      expect(myManager.getName()).toEqual("Jules");
    });
 //test to check id 
    test("check Id", () => {
      expect(myManager.getId()).toEqual(5209);
    });
  //test to check email
    test("check Email", () => {
      expect(myManager.getEmail()).toEqual("Julesj93@gmail.com");
    });
  //test to check office number
    test("check OfficeNumber", () => {
      expect(myManager.getOfficeNumber()).toEqual(1);
    });
  //test to check role
    test("check Role", () => {
      expect(myManager.getRole()).toEqual("Manager");
    });
  });