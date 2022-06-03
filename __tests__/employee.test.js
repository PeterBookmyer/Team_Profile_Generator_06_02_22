const Employee = require("../lib/employee");

describe("Employee class", () => {
  //test for getName function
  it("should get name", () => {
    const employee = new Employee("Bob", "4", "bob@gmail.com");
    const { name } = employee;

    expect(employee.getName()).toBe(name);
  });

  //test for getId function
  it("should get by id", () => {
    const employee = new Employee("Bob", "4", "bob@gmail.com");
    const { id } = employee;

    expect(employee.getId()).toBe(id);
  });

  //test for getEmail function
  it("should get by email", () => {
    const employee = new Employee("Bob", "4", "bob@gmail.com");
    const { email } = employee;

    expect(employee.getEmail()).toBe(email);
  });

  //test for getRole function
  it("should get by role", () => {
    const employee = new Employee("Bob", "4", "bob@gmail.com");
    const { role } = employee;

    expect(employee.getRole()).toBe("employee");
  });
});
