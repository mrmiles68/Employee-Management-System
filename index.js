const inquirer = require('inquirer');
inquirer
  .prompt([
    "View All", "View All by Dept.","View All by Mgr.","Add Employee", 
    "Remove Employee"
  ])
  .then(answers => {
    0,1,2,3,4;
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

const employeeMod = function(){

Console.log ("Welcome to employee Modder");

for (i=0, i < options.length, i++) {
console.log(i +".  " + options[i]);
console.log()

}