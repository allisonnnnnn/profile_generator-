const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?", answer1 => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);

  rl.question("What do you listen to while doing that?", answer2 => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);

    rl.question(
      "Which meal is your favourite (eg: dinner, brunch, etc.)",
      answer3 => {
        console.log(`Thank you for your valuable feedback: ${answer3}`);

        let result = `Hey, my name is ${answer1} and I like listen to ${answer2}`;
        console.log(result);

        rl.close();
      }
    );
  });
});
