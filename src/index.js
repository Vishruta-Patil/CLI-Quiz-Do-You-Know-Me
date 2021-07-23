
 var readlineSync = require('readline-sync');
 const chalk = require('chalk')

 var name = readlineSync.question(chalk.underline.bgYellow("What is your good name?") + "  ");
 console.log("WELCOME " + chalk.yellowBright(name));
 console.log("Lets Play Quiz:  " + chalk.yellowBright("How Much Do You Know Me ???\n"));

var Score = 0;


var questions = [{
   question: "What is my favorite color? \n option(1) Pink \n option(2) Yellow \n option(3) Black \n Your Answer:  ",
   answer: "Yellow" 
 }, {
   question: "Which is my favorite subject? \n option(1) Physics \n option(2) Chemsitry \n option(3) Maths \n Your Answer:  ",
   answer: "Maths" 
 }, {
   question: "Who is my best friend? \n option(1) Anuhya \n option(2) Saloni \n option(3) Ishwari \n Your Answer:  ",
   answer: "Saloni" 
 }, {
   question: "What is my hobby? \n option(1) Painting \n option(2) Reading \n option(3) Travelling \n Your Answer:  ",
   answer: "Painting" 
 }, {
   question: "Which is my favorite dish? \n option(1) Mexican Pasta \n option(2) Crispy Veg Burger \n option(3) Cheese Burst Pizza \n Your Answer:  ",
   answer: "Cheese Burst Pizza" 
 } ];


 var scoreList = [{
  name: "Varad" ,
  name_score: 1
},{
  name: "Saloni" ,
  name_score: 2
}]


function quiz(question,answer) {
  var currentScore=0;
   var userAnswer = readlineSync.question(question);
   if (userAnswer == answer) {
     console.log(chalk.black.bold.underline.bgGreen("\n  You are Right!!!  "));
     currentScore = 1;
     Score++;
   }
   else {
   console.log(chalk.white.bold.underline.bgRedBright("\n  You are Wrong!!!  "))
   console.log("Correct Answer: ",answer)
   currentScore = 0;
   }
   console.log(">>>>Your Score:",currentScore)
 }

//  function play_quiz() {
 for (var i=0;i<questions.length;i++) {
   var currentQuestion = questions[i];
   quiz(currentQuestion.question,currentQuestion.answer)
   console.log(chalk.redBright("----------------------------------------\n"))
 }
 console.log("Your Score is: ", chalk.black.bold.bgYellowBright("   "+Score+"   "));
//  }

for (j=0;j<scoreList.length;j++) {
if (Score>scoreList[j].name_score) {console.log("Congratulation!!! " + name + " You have scored Highest!!!!!\nSend Me the Screenshot so that I can update the high score\n")
  break;
  }    
}

console.log("Thank You for playing the Quiz 😊");

