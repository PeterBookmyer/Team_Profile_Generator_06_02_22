const Manager = require("../lib/manager");

describe("Manager class", () => {
  //test for getRole function
  it("should get by role", () => {
    const manager = new Manager();
    const { role } = manager;

    expect(manager.getRole()).toBe("Manager");
  });
});
