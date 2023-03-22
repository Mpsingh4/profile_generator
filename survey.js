const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question('What is an activity you like?', (answer) => {
    console.log(`It seems you enjoy ${answer}`);
    rl.question('What do you listen to when doing that?', (answer) => {
      console.log(`${answer} is an excellent choice!`);
      rl.question(`What is your favourite cuisine?`, (answer) => {
        console.log(`${answer} food sounds delicious.`);
        rl.question('Is there a sport you particularly enjoy playing or watching?', (answer) => {
          console.log(`${answer} is quite popular!`);
          rl.question('If you could have a superpower, what would it be?', (answer) => {
            console.log(`Wow! ${answer}? that would be pretty cool wouldn't it!`)
            rl.close();
          });
        });
      });
    });
  });
});
