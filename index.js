var readlineSync = require("readline-sync");

var score = 0;

// input >>> processing >> output

var userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName + " Shell we start the Fun General Knowledge Quiz Questions 2022 ?");
 console.log("_________________")

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) { //branching
    console.log("Yeah! You are right..");
    score = score +1;
  
  } else{
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("_________________")
}


// array of objects

var questions = [{
  question: "What country has the highest life expectancy? ",
  answer: "Hong Kong"
  }, {
  question: "Where would you be if you were standing on the Spanish Steps?? ",
  answer: "Rome"
},{
  question: "What year was the United Nations established?  ",
  answer: "1945"
},{
  question: "How many elements are in the periodic table? ",
  answer: "118"
  
} 
 ];
  

//loop
for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("Yeah! your score is: ", score);
console.log("Thanks for playing")