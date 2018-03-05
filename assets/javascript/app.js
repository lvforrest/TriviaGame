var usePick;
var timer;
var currentQuestion;
var score=0;
var question;
var totalQuestions;
var wrong;
var right;


var gameQuestions =[{

        question: "What was a popular comedy sitcom based out of Detroit?",
        answerChoice:[ "Friends", "Martin", "Living Single", "Rosanne"],
        answer: 1
    },

    {
        question: "What was a popular cartoon featuring a group of babies?",
        answerChoice:[ "Hey Arnold", "The Powder Puff Girls", "Rugrats", "Paw Patrol"],
        answer: 2
    },
    {
        question: "What show was Ross Geller from?",
        answerChoce:[ "Friends", "Modern Family", "Boy Meets World", "Sister Sister"],
        answer: 0
    },
    {
        question: "What popular sitcom was based out of Upper East Side New York?",
        answerChoice:[ "Friends", "Sex and the City", "Living Single", "The Nanny"],
        answer: 3
    },
    {
        question: "The Soup Nazi is character from ____?",
        answerChoice:[ "Martin", "Seinfield", "Living Single", "Home Improvement"],
        answer: 1
    },
    {
        question: "Go home Roger! is famous line from what show",
        answerChoice:[ "Madlock", "Seinfield", "Martin", "Sister Sister"],
        answer: 3
}];

function startGame(){
    $('.answer').show();
    $('#results').hide();
    $('.board').empty();
    $('.answer').on("click");
    $('#nextButton').on('click', newQuestion);
    $('.buttons .answer').on('click', guess)

    question = gameQuestions.slice();
    totalQuestions =gameQuestions.length();
    wrong = 0;
    right= 0;


}
function newQuestion(){
        if(wrong + right >= totalQuestions){
            gameEnds();
        } else {
        var question = Math.floor(Math.random() * gameQuestions.length);
        currentQuestion =gameQuestions[questionNumber];
        gameQuestions.splice(questionNumber, 1);
        resetTimer();
        $('#questions').html(gameQuestions.question);
        $('.answer').show().find(".answer").each(function(i){
            $(this).html(currentQuestion.answer[i]);
        });
        timer =setInterval(showTimer, 1000);
    }
}
function guess(){
    if($(this).data("answer") == currentQuestion.answerChoice) {
        right++;
        score+=5;
    } else {
        wrong++;
        score--;
    }
}




$(document).ready(startGame);