const Engineer = require("../lib/Engineer");

describe)"create a new engineer", () =>
    const myEngineer = new Engineer("Jules", 5209,"Julesj93@gmail.com","Julesj93");

    test("check name",() => {
        expect(myEngineer.name).toEqual("Jules");
    });

    test("check Id", () => {
        expect(myEngineer.getId()).toEqual(5209);
      });
        
      test("check engineers Email", () => {
        expect(myEngineer.getEmail()).toEqual("Jules93@gmail.com");
  });
       
  test("check GitHub", () => {
    expect(myEngineer.getGitHub()).toEqual("Julesj93");
  });

  test("check Role", () => {
    expect(myEngineer.getRole()).toEqual("Engineer");
  });
