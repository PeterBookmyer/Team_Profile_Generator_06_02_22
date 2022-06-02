const inquirer = require("inquirer");
const fs = require("fs");

function questionsBlock1(callBack) {
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
    .then((block1Answers) => {
      return callBack(block1Answers);
    });
}

function addTeamMember(block1Answers) {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please add another Team Member or Finish Building Team",
        choices: ["Intern", "Engineer", "Finish Team"],
        name: "newTeamMember",
      },
    ])
    .then((newTeamMember) => {
      console.log(newTeamMember);
      if (newTeamMember == "Intern") {
        inquirer.prompt([
          {
            type: "input",
            message: "What is Intern's Name?",
            name: "InternName",
          },
          {
            type: "input",
            message: "What is Interns ID?",
            name: "InternId",
          },
          {
            type: "input",
            message: "What is Interns email?",
            name: "InternEmail",
          },
          {
            type: "input",
            message: "Where does the Intern go to school?",
            name: "InternSchool",
          },
        ]);
      }
      if (newTeamMember == "Engineer") {
        inquirer.prompt([
          {
            type: "input",
            message: "What is Engineers Name?",
            name: "EngName",
          },
          {
            type: "input",
            message: "What is Engineers ID?",
            name: "EngId",
          },
          {
            type: "input",
            message: "What is Engineers email?",
            name: "EngEmail",
          },
          {
            type: "input",
            message: "What is Engineers GitHub Username?",
            name: "EngGit",
          },
        ]);
      } else console.log("You have Finished Building Team!");
    });
}

questionsBlock1(addTeamMember);

// }

//     {
//       type: "list",
//       message: "Please pick a Team Member to add or finish to end",
//       name: "team",
//       choices: ["Engineer", "Intern", "Finish Building Team"],
//     },
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
