const fs = require('fs');
const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./page-template');
// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const pageHTML = generatePage(name, github);



//   fs.writeFile('README.md', generatePage(name, github), err => {
//     if (err) throw err;
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });

console.log(inquirer);

const promptProject = portfolioData => {
  // If there's no 'projects' array property, create one

  
  console.log(`
=================
Add a New Project
=================
`);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)'
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ]);
   
};
promptProject()
  .then(projectAnswers => console.log(projectAnswers));
