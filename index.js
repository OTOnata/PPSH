// TODO: Include packages needed for this application
{
    "testData"; [
      {
        "firstName": "Lokesh",
        "lastName": "Gupta",
        "website": "howtodoinjava.com"
      },
      {
        "firstName": "Brian",
        "lastName": "Schultz",
        "website": "example.com"
      }
    ]
  }
// TODO: Create an array of questions for user input
const questions = [
    '1: How many days are in a year?',
    '2: What year did Barack Obama become president?',
    '3: What is the biggest capital in the United States?',
    '4: What is the largest country in the world?',
    '5: What fast food chain is the most well known?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((response) => FileSystem.writeFile('Readme.md', createRead,(response), (err) =>
    err ? console.error(err) : console.log('Readme file was a successfully generated!')));
}

// Function call to initialize app
init();
