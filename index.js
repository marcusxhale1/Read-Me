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

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));