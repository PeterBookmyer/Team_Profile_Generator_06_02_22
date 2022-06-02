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
          });
      } else {
        console.log("You have Finished Building Team!");
        console.log(teamArray);
      }
    });
}

managerQuestions(addTeamMember);

//
//   ])
//   .then((response) => {
//     fs.writeFile(
//       "index.html",
//       //       `<!DOCTYPE html>
//       // <html lang="en">
//       //   <head>
//       //     <meta charset="UTF-8" />
//       //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//       //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       //     <title>Portfolio Gen</title>
//       //     <link
//       //       rel="stylesheet"
//       //       href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
//       //       integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
//       //       crossorigin="anonymous"
//       //     />
//       //   </head>
//       //   <body>
//       //     <header class="jumbotron d-flex align-items-center flex-column">
//       //       <div class="display-4"></div>
//       //       <h1>${response.name}</h1>
//       //       <h2>${response.location}</h2>
//       //       <p>${response.hobby}</p>
//       //     </header>
//       //     <main class="d-flex align-items-center flex-column">
//       //       <div>${response.github}</div>
//       //       <div>${response.linkedin}</div>
//       //     </main>
//       //     <script src="/01-Activities/28-Stu_Mini-project/index.js"></script>
//       //   </body>
//       // </html>`,
//       (err) => {
//         err ? console.log(err) : console.log("success!");
//       }
//     );
//   });
