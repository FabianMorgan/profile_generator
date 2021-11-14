const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  
  rl.question('What is your name?', (answer) => {
    console.log(`I am Fabian. It's a pleasure to meet you. ${answer}`);    
 

  rl.question('What\'s an activity you like doing?', (answer) => {
    console.log(`Web development coding. ${answer}`);
  
    rl.close();
  });

});

});
