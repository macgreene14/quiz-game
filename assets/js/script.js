var textDisplayEl = $("#textDisplay")
var textResponse = $("#textResponse")
var formEl = $("#inputForm")
var scoreEl = $("#score")
var timerEl = $("#timer")
var btn1 =  $("#btn1")
var btn2 =  $("#btn2")
var btn3 =  $("#btn3")
var btn4 =  $("#btn4")
var btnStart = $("#btnStart")
var time = 60;
var i = 0;
var score = 0;   


var trivia1 = {
    question: "Commonly used data types do not include;",
    answer1: "boolean",
    answer2: "alerts",
    answer3: "strings",
    answer4: "numbers",
    answer: '2'
}

var trivia2 = {
    question: "Arrays in Javscipt can be used to store everything but________.",
    answer1: "elements",
    answer2: "objects",
    answer3: "strings",
    answer4: "apis",
    answer: '4'
}

var questions = [trivia1, trivia2]

// only show start button
btn1.hide();
btn2.hide();
btn3.hide();
btn4.hide();
btnStart.show();

function timer (interval) {
    time --; //decrement time
    timerEl.text(time); //post updated time to el
    if (time <= 0) {   //if time is over,
        gameOver(interval)
        return
    }
}

function displayQuestion(i) {
    q = questions[i]
    textDisplayEl.text(q.question)
    btn1.text(q.answer1)
    btn2.text(q.answer2)
    btn3.text(q.answer3)
    btn4.text(q.answer4)
}

function gameOver(interval) {
    score = 0; //reset score everytime game is replayed
    time = 60;  //reset time everytime game is replayed
    i = 0;
    clearInterval(interval);
    textDisplayEl.text("Game Over!")
    textResponse.text("")
    time = 0
    btn1.hide();
    btn2.hide();
    btn3.hide();
    btn4.hide();
    btnStart.text("Play Again?")
    btnStart.show();

}

function runGame() {
    i = 0;
    time = 60;
    score = 0;   

    displayQuestion(i) 

    // start timer countdown 
    var interval = window.setInterval(timer, 1000);
    timerEl.text(time)
    scoreEl.text(score)

    // hide start button, show quiz buttons
    btn1.show();
    btn2.show();
    btn3.show();
    btn4.show();
    btnStart.hide();

    formEl.on("click", function(event) {
        event.stopPropagation()
        btnInput = event.target.id  //get text value of button clicked
        btnVal = btnInput.slice(-1)  //grab number from text value


        if (btnVal == questions[i].answer){
            textResponse.text("Correct!")
            console.log("correct!");
            score += 1 ;
            scoreEl.text(score)
            console.log(1)


        } else {
            textResponse.text("Wrong!")
            console.log("Incorrect!");
            time = time - 5;
            console.log(2)

        }

        i ++ ;
        // console.log(i)
        // verify questions are in queue
        if (i === questions.length) {
            console.log(3)

            gameOver(interval)
            return
        } 
        displayQuestion(i)         

    })     

}


btnStart.on("click", runGame)






