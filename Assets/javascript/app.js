var incrementation = 30;
var timer;
var count = 0;
var userAnswer = [];
var answers = ["3","4", "five", "six"]
var questions = [
    {
        question: "What comes after the number 2?",
        answers: ["3", "4", "5"]
    },
    {
        question: "What comes after the number 3?",
        answers: ["3", "4", "5"]
    },
    {
        question: "What comes after the number four?",
        answers: ["five", "six", "seven"]
    },
    {
        question: "What comes after the number five?",
        answers: ["four", "five", "six"]
    }
];

$("#startButton").on("click", function (event) {
    event.preventDefault()
    var questionDiv = $("<div>").text(questions[count].question).attr("id","currentQuestion");
    $("#question").append(questionDiv);
    console.log(questions[count].answers);
    var curAnswers = questions[count].answers;
    for (i = 0; i < curAnswers.length; i ++) {
        $("#answers").append("<input type = 'radio' class='answer-button' id='button'"
      + "'>"+ curAnswers[i])

    }
})