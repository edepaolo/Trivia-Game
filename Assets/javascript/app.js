var incrementation = 10;
var timer;
var count = 0;
var userAnswers = [];
var answers = ["3", "4", "five", "six"]
var score = 0
var wrong = 0

//Trivia questions
var questions = [
    {
        question: "What comes after the number 2?",
        answers: ["3", "4", "5"],
        correctAnswer: "3"
    },
    {
        question: "What comes after the number 3?",
        answers: ["3", "4", "5"],
        correctAnswer: "4"
    },
    {
        question: "What comes after the number four?",
        answers: ["five", "six", "seven"],
        correctAnswer: "five"
    },
    {
        question: "What comes after the number five?",
        answers: ["four", "five", "six"],
        correctAnswer: "six"
    }
];

function countDown() {
    incrementation -= 1;
    $('#timer').text('')
    $("#timer").text(incrementation);
    if (incrementation == 0) { 
        clearInterval(timer)
        
        incrementation = 10

        outOfTime();
    }
}

function outOfTime() {
    userAnswers.push(null)

    clearInterval(timer)
        
        incrementation = 10

        $("#timer").text('')
        $("#timer").text(incrementation)

        console.log(incrementation)
    
    $('#question').empty()
    $('#answers').empty()
    $('#submits').empty()
    // $('body').empty()

    count += 1

    if (count < answers.length) {

        timer = setInterval(() => {
            countDown()
        }, 1000);

        var questionDiv = $("<div>").text(questions[count].question).attr("id", "currentQuestion");
        $("#question").append(questionDiv);
        console.log(questions[count].answers);
        var curAnswers = questions[count].answers;

        for (i = 0; i < curAnswers.length; i++) {
            $("#answers").append("<input type = 'radio' name = 'answer' class='answer-button' data-ans='" + curAnswers[i] + "' id='button'" + i
                + "'>" + "<label for='button" + i + "'>" + curAnswers[i] + "</label>")
        }
        var answer = questions[count].correctAnswer
        var submitButton = $('<input id = "submit" type="button" value="Submit Answer"/>');
        $("#submits").append(submitButton);
    } else {
        $('#question').empty()
        $('#answers').empty()
        $('#submits').empty()

        for (i = 0; i < answers.length; i++) {
            if (answers[i] == userAnswers[i]) {
                score += 1
            } else {
                wrong += 1
            }
        }

        $('#question').append('You have gotten this many right: ' + score + ' and this many wrong: ' + wrong)
    }
}


$("#startButton").on("click", function (event) {

    console.log(questions[3]);
    event.preventDefault()
    
    timer = setInterval(() => {
        countDown()
    }, 1000);
    var questionDiv = $("<div>").text(questions[count].question).attr("id", "currentQuestion");
    $("#question").append(questionDiv);
    console.log(questions[count].answers);

    var curAnswers = questions[count].answers;
    for (i = 0; i < curAnswers.length; i++) {
        $("#answers").append("<input type = 'radio' name = 'answer' class='answer-button' data-ans='" + curAnswers[i] + "' id='button'" + i
            + "'>" + "<label for='button" + i + "'>" + curAnswers[i] + "</label>")
    }
    var answer = questions[count].correctAnswer
    var submitButton = $('<input id = "submit" type="button" value="Submit Answer"/>');
    $("#submits").append(submitButton);

})

$(document).on('click', '#submit', (event) => {
    event.preventDefault()
    // console.log("you hit the submit button")

    clearInterval(timer)

    var userAnswer = $("input[type='radio']:checked").attr('data-ans')
    console.log(userAnswer)

    
    userAnswers.push(userAnswer)
    console.log(userAnswers);
    $('#question').empty()
    $('#answers').empty()
    $('#submits').empty()
    // $('body').empty()
    count += 1

    if (count < answers.length) {

        var questionDiv = $("<div>").text(questions[count].question).attr("id", "currentQuestion");
        $("#question").append(questionDiv);
        console.log(questions[count].answers);
        var curAnswers = questions[count].answers;

        for (i = 0; i < curAnswers.length; i++) {
            $("#answers").append("<input type = 'radio' name = 'answer' class='answer-button' data-ans='" + curAnswers[i] + "' id='button'" + i
                + "'>" + "<label for='button" + i + "'>" + curAnswers[i] + "</label>")
        }
        var answer = questions[count].correctAnswer
        var submitButton = $('<input id = "submit" type="button" value="Submit Answer"/>');
        $("#submits").append(submitButton);

        incrementation = 10

        timer = setInterval(() => {
            countDown()
        }, 1000);
    } else {
        $('#question').empty()
        $('#answers').empty()
        $('#submits').empty()

        for (i = 0; i < answers.length; i++) {
            if (answers[i] == userAnswers[i]) {
                score += 1
            } else {
                wrong += 1
            }
        }

        $('#question').append('You have gotten this many right: ' + score + ' and this many wrong: ' + wrong)
    }
})