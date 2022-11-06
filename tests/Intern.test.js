const Intern = require("../lib/Intern");

describe("create an intern", () => {
    const myIntern = new Intern("Jules", 5209, "Julesj93@gmail.com", 1);
  //test to check intern name
    test("check name", () => {
      expect(myIntern.getName()).toEqual("Jules");
    });
 //test to check intern id 
    test("check Id", () => {
      expect(myIntern.getId()).toEqual(5209);
    });
  //test to check intern email
    test("check Email", () => {
      expect(myIntern.getEmail()).toEqual("Julesj93@gmail.com");
    });
  
  //test to check intern role
    test("check Role", () => {
      expect(myIntern.getRole()).toEqual("Intern");
    });
  });