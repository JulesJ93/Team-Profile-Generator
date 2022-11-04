const Engineer = require("../lib/Engineer");

describe("create a new engineer", () => {
    const myEngineer = new Engineer("Jules", 5209,"Julesj93@gmail.com","Julesj93");
//checks for engineer name
    test("check name",() => {
        expect(myEngineer.name).toEqual("Jules");
    });
//checks for the engineer id
    test("check Id", () => {
        expect(myEngineer.getId()).toEqual(5209);
    });
//checks for the engineers email        
      test("check engineers Email", () => {
        expect(myEngineer.getEmail()).toEqual("Jules93@gmail.com");
    });
//checks for the engineers github       
    test("check GitHub", () => {
    expect(myEngineer.getGitHub()).toEqual("Julesj93");
    });
//checks for the engineers role
    test("check Role", () => {
    expect(myEngineer.getRole()).toEqual("Engineer");
    });
});
