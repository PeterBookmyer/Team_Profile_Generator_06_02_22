const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  //test for getGitHub function
  it("should get gitHub", () => {
    const engineer = new Engineer("Bob@github");
    const { gitHub } = engineer;

    expect(engineer.getGitHub()).toBe(gitHub);
  });

  //test for getRole function
  it("should get by role", () => {
    const engineer = new Engineer();
    const { role } = engineer;

    expect(engineer.getRole()).toBe("Engineer");
  });
});
