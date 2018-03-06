var timer;
var currentQuestion;
var score=0;
var question;
var totalQuestions;
var wrong;
var right;
var answerChoice;

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
        question: "Go home Roger!",
        answerChoice:[ "Madlock", "Seinfield", "Martin", "Sister Sister"],
        answer: 3
}];

function startGame(){
    $('.answer').show();
    $('#results').hide();
    $('.board').empty();
    $('.answer').on("click");
    $('#nextButton').on('click', newQuestion);
    $('.buttons .answer').on('click', guess);

    question = gameQuestions.slice();
    totalQuestions =gameQuestions.length;
    console.log(gameQuestions);
    wrong = 0;
    right= 0;


}
function newQuestion(){
        console.log(newQuestion);
        if(wrong + right >= totalQuestions){
            gameEnds();
            
        } else {
        var question = Math.floor(Math.random() * gameQuestions.length);
            console.log(question);
        currentQuestion = gameQuestions[question];
        gameQuestions.slice(question, 1);
        // resetTimer();
        $('#questions').html(currentQuestion.question); 
        $('.answer').each(function(i){
            $(this).html(currentQuestion.answerChoice[i]);
            console.log (currentQuestion.answerChoice[i]);
        });
        // timer =setInterval(showTimer, 1000);
    }

}
function guess(){
    if (currentQuestion.answerChoice[currentQuestion.answer] == currentQuestion.answerChoice.answer){
            $()
        console.log(currentQuestion.answerChoice[currentQuestion.answer]);
        console.log($(this).text());
    }  else {
        wrong++;
        score--;
    }
}

// didn't get to make my timer, but the idea was to give the user x amount seconds per question and to alert them when time is up
// wanted to display a score table, results and reveal the timer
// wanted to incremnt the score as well as update the right/wrong answer count



$(document).ready(startGame);