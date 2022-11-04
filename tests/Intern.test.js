const Intern = require("../lib/Intern");

describe("create an Intern", () => {
    const myIntern = new Intern("Jules", 5209, "Julesj93@gmail.com", "Columbia Engineering");
    test("check name", () => {
        expect(myIntern.name).toEqual("Jules");
      });
    //checks for interns ID
      test("check Id", () => {
        expect(myIntern.getId()).toEqual(5209);
      });
    //checks for interns email
      test("check Email", () => {
        expect(myIntern.getEmail()).toEqual("Julesj93@mail.com");
      });
    //checks for interns school
      test("check School", () => {
        expect(myIntern.getSchool()).toEqual("Columbia Engineering");
      });
    //checks for interns role
      test("check Role", () => {
        expect(myIntern.getRole()).toEqual("Intern");
      });
    });