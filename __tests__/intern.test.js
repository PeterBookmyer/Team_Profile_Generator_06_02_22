const Intern = require("../lib/Intern");

describe("Intern class", () => {
  //test for getSchool function
  it("should get School", () => {
    const intern = new Intern("University of Denver");
    const { school } = intern;

    expect(intern.getSchool()).toBe(school);
  });

  //test for getRole function
  it("should get by role", () => {
    const intern = new Intern();
    const { role } = intern;

    expect(intern.getRole()).toBe("Intern");
  });
});
