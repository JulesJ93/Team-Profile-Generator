const Engineer = require("../lib/Engineer");

describe)"create a new engineer", () =>
    const myEngineer = new Engineer("Jules", 5209,"Jules@mymail.com","Julesj93");

    test("check name",() => {
        expect(myEngineer.name).toEqual("Jules");
    });

    test("check Id", () => {
        expect(myEngineer.getId()).toEqual(5209);
      });
        
      test("check engineers Email", () => {
    expect(myEngineer.getEmail()).toEqual("Jules@mymail.com");
  });
       
  expect(myEngineer.name).toEqual("Jules");
    });test("check name",() => {
        expect(myEngineer.name).toEqual("Jules");
    });