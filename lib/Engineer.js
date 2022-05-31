const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    this.gitHub = gitHub;
    super(name, id, email);
  }
  getGitHub() {}
  getRole(){
      return "Engineer"
  }
}

module.exports = Engineer;