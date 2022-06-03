//required modules
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamArray = [];

//manager questions
function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Who is the Manager of the Team?",
        name: "name",
      },
      {
        type: "input",
        message: "What is their Employee ID?",
        name: "ID",
      },
      {
        type: "input",
        message: "What is their Email Address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is their office number?",
        name: "officeNumber",
      },
    ])
    .then((managerAnswers) => {
      const { name, ID, email, officeNumber } = managerAnswers;
      const manager = new Manager(name, ID, email, officeNumber);

      teamArray.push(manager);
      // console.log(manager);
      // console.log(teamArray);
      addTeamMember();
      managerCard();
    });
}

//adding a Team Member
function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please add another Team Member or Finish Building Team",
        choices: ["Intern", "Engineer", "Finish Team"],
        name: "newTeamMember",
      },
    ])
    .then(({ newTeamMember }) => {
      // console.log(newTeamMember);
      if (newTeamMember === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is Intern's Name?",
              name: "internName",
            },
            {
              type: "input",
              message: "What is Interns ID?",
              name: "internId",
            },
            {
              type: "input",
              message: "What is Interns email?",
              name: "internEmail",
            },
            {
              type: "input",
              message: "Where does the Intern go to school?",
              name: "internSchool",
            },
          ])
          .then((internAnswers) => {
            const { internName, internId, internEmail, internSchool } =
              internAnswers;
            const intern = new Intern(
              internName,
              internId,
              internEmail,
              internSchool
            );

            teamArray.push(intern);
            // console.log(intern);
            // console.log(teamArray);
            addTeamMember();
            internCard();
          });
      } else if (newTeamMember == "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is Engineers Name?",
              name: "engName",
            },
            {
              type: "input",
              message: "What is Engineers ID?",
              name: "engId",
            },
            {
              type: "input",
              message: "What is Engineers email?",
              name: "engEmail",
            },
            {
              type: "input",
              message: "What is Engineers GitHub Username?",
              name: "engGit",
            },
          ])
          .then((engAnswers) => {
            const { engName, engId, engEmail, engGit } = engAnswers;
            const engineer = new Engineer(engName, engId, engEmail, engGit);

            teamArray.push(engineer);
            // console.log(engineer);
            // console.log(teamArray);
            addTeamMember();
            engineerCard();
          });
      } else {
        console.log("You have Finished Building Team!");
        console.log(teamArray);
      }
    });
}

//calls functions
managerQuestions(addTeamMember);

//function to create manager card and main elements
function managerCard() {
  fs.writeFileSync(
    "index.html",
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
    />
    <title>Team Profile Generator</title>
  </head>
  <body>
    <header class="jumbotron bg-danger">
      <h1 class="text-center">Team Profile</h1>
    </header>
    <div id="cardEl" class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-around">
    <!-- manager card -->
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title bg-info">Name</h3>
            <h5 class="card-title bg-info bi bi-people">Manager</h5>
            <ul class="card-text">
              <li>Id</li>
              <li>email</li>
              <li>officeNumber</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </body>
  <script src="./index.js"></script>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
</html>`
  );
}

//function to create intern card
function internCard() {
  const internCard = `<div class="col">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title bg-info">Name</h3>
            <h5 class="card-title bg-info bi bi-people">Intern</h5>
            <ul class="card-text">
              <li>Id</li>
              <li>Email</li>
              <li>School</li>
            </ul>
          </div>
        </div>
      </div>`;
  document.getElementById("cardEl").innerHTML = internCard;
}

//function to create engineer card
function engineerCard() {
  const engineerCard = `<div class="col">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title bg-info">Name</h3>
            <h5 class="card-title bg-info bi bi-people">Engineer</h5>
            <ul class="card-text">
              <li>Id</li>
              <li>Email</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </div>
`;
  document.getElementById("cardEl").innerHTML = internCard;
}
