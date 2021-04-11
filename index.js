
//questions database
var questionlist=[
  {
    question:"Who won the most Ballon d or awards in the history of football? ",
    answer:"Lionel Messi",
    options:["Christiano Ronaldo","Lionel Messi","Xavi Hernandes","Diego Maradona"]
  },
  {
    question:"Which Country Won the 2018 FIFA Worldcup? ",
    answer:"France",
    options:["Germany","Italy","Brazil","France"]
  },
  {
    question:"What is the homeground for FC Barcelona named? ",
    answer:"Camp Nou",
    options:["Camp Nou","Santiago Bernabeu","Old Trafford","Anfield"]
  },
  {
    question:"Who scored maximum number of 200 in ODI Cricket? ",
    answer:"Rohit Sharma",
    options:["Chris Gayle","Rohit Sharma","Virat Kohli","Sehwag"]
  },
  {
    question:"Who scored maximum number runs in Cricket history? ",
    answer:"Sachin Tendulkar",
    options:["Sachin Tendulkar","Ricky Ponting","Virat Kohli","Sehwag"]
  },
  {
    question:"Which IPL team has more number of titles? ",
    answer:"Mumbai Indians",
    options:["Chennai SuperKings","Banglore Royal Challengers","Rajastan Royals","Mumbai Indians"]
  },
  {
    question:"Against which team Argentina lost 2014 FIFA Worldcup Final? ",
    answer:"Germany",
    options:["Germany","Brazil","Spain","Netherlands"]
  },
  {
    question:"Sachin scored his 100th century against? ",
    answer:"Bangaladesh",
    options:["Australia","England","Pakistan","Bangaladesh"]
  },
  {
    question:"Who scored maximum number of goals in a calander year? ",
    answer:"Lionel Messi",
    options:["Christiano Ronaldo","Lionel Messi","Xavi Hernandes","Diego Maradona"]
  },
  {
    question:"Who is the captain of current Indian football team? ",
    answer:"Sunil Chethri",
    options:["Sahal Samad","Jingan","Sunil Chethri","Bhutiya"]
  }
]
//game functions
answerCheck=function(questionIndex,userAnswer,score)
{

  if(questionlist[i].options[userAnswer]==questionlist[i].answer)
  {
    score=score+5;
    console.log(chalk.green.bold(`Congrats!!!Right answer`));
  }
  else
  {
    console.log(chalk.red.bold(`Ooops!!!Your answer is wrong.The right answer is ${questionlist[i].answer}`));
    score=score-2;
    if (score<0)
    {
      score=0;
    }

  }
  console.log(`Your current score is ${score}`);
  return score;
}
//user interactions
gameStatus=false;
const chalk = require('chalk');
var userInput=require('readline-sync');
console.log(chalk.blue.bold("Welocome to QuizSporty"));
console.log(chalk.yellow.bold("\nLets get introduce ourselves.\nHi.I'm your Quiz Master \'SportWiz\'"));
let userName=userInput.question("\nWhat's your name? ")
console.log(chalk.yellow.bold(`\nHi ${userName}.It's great to have you here!!!`));
console.log(chalk.yellow.bold(`Tighten your seatbelts.We are going to have fun!`));
console.log(chalk.yellow.bold("\nHere are our Rules........."));
console.log(chalk.yellow.bold("1-You will be given with 4 options.Choose the corresponding option number"));
console.log(chalk.yellow.bold("2-Each right answer carries 5 marks"));
console.log(chalk.yellow.bold("3-Each wrong answer has -2 marks"));
//Game interest
gameoptions=["Yes","Not now"];
let gameOn=userInput.keyInSelect(gameoptions,chalk.yellow.bold("Shall we start our game? "));
if (gameoptions[gameOn]=="Yes")
{
  gameStatus=true;
  console.log(chalk.yellow.bold("Great.Lets Start"));
}
else
{
  console.log("No Worries!Enjoy your day!!!")
}
while(gameStatus==true)
{
//game starts
let score=0;
for (i=0;i<questionlist.length;i++)
{
  userAnswer=userInput.keyInSelect(questionlist[i].options,chalk.yellow.bold(questionlist[i].question));
  newscore=answerCheck(i,userAnswer,score);
  score=newscore;
}
console.log(chalk.green.underline.bold(`Great!!!You have completed the QuizSporty.Your final score is ${score}`));
gameStatus=false;
}



