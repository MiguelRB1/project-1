//grab all the functionality inside the "file system" module built-in to node
//require allows us to use other files location in our machine or inside of modules we have installed
const fs = require('fs');

// fs.readFile('./stuff.js, 'utf8', (err, data) => {
//     if (err) {
//         console.log('Error', err);
//         return;
//     }

//     console.log(data);
// });


// const stuffIWantToWrite =`
// console.log("manny is cool");
// console.log(1+1);
// `;

fs.writeFile('./stuff.js', stuffIWantToWrite, (err) => {
    if (err) {
        console.log('Error', err);
        return;
    }

    console.log('Successful!');
});


const inquirer = require('inquirer');


inquirer.prompt([
  {
    // name = what key will the answer to this question be saved in
    name: 'username',
  //  message = what message will be displayed to the user when this question is being asked
    message: 'What is your username?',
    type: 'input',
  },
  {
    name: 'password',
    message: 'What do you want your password to be?',
    type: 'password',
  },
  {
    name: 'pokemon',
    message: 'Which pokemon do you want to choose?',
    type: 'list',
    choices: ['Bulbasaur', 'Squirtle', 'Charmander'],
  },
  {
    name: 'methodOfCommunication',
    message: 'What is your preferred way of communication?',
    type: 'rawlist',
    choices: [
      'Cell phone',
      'Email',
      'Smoke signals',
      'Carrier pidgeon',
      'Semaphor',
      'Telekenises',
      'Telegraph',
      'Morse code',
      'Passive aggressive comments',
      'Memes',
      'Emojis'
    ],
  },
  {
    name: 'languages',
    message: 'What languages do you know?',
    type: 'checkbox',
    choices: [
      'JS',
      'TS',
      'HTML',
      'English',
      'Spanish',
    ]
  }
]).then(answers => {
  console.log(answers);
});

console.log('Hello');
