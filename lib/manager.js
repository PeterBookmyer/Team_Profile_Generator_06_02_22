const Employee = require("./employee");

class Manager extends employee {
  constructor(name, id, email, officeNumber) {
    this.officeNumber = officeNumber;
    super(name, id, email);
  }
  getRole() {
    return "Manager";
  }
}

module.exports = manager;