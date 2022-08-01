var textDisplayEl =  document.getElementById("textDisplay")
var textResponseEl = document.getElementById("textResponse")
var formEl = document.getElementById("inputForm")
var scoreEl = document.getElementById("score")
var timerEl = document.getElementById("timer")
var btn1 =  document.getElementById("btn1")
var btn2 =  document.getElementById("btn2")
var btn3 =  document.getElementById("btn3")
var btn4 =  document.getElementById("btn4")
var btnStart = document.getElementById("btnStart")
var score = 0;
var time = 60;


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

var trivia3 = {
    question: "Strings values must be enclosed within _____.",
    answer1: "parentheses",
    answer2: "brackets",
    answer3: "commas",
    answer4: "periods",
    answer: '1'
}

// create list containing question objects
var questions = [trivia1, trivia2, trivia3]


var startTimer = function() {
    function timer () {
        time --;
        timerEl.innerHTML = time
        if (time <=0 )
            {                
                timerEl.innerHTML = 0;
                clearInterval(interval);
            }
        }
    var interval = setInterval(timer, 1000)    
}



// formEl.hide()  // hide buttons by default
formEl.style.display = "none"

function runGame () {
    // formEl.show()  // show buttons
    // btnStart.hide()  // hide start button

    formEl.style.display = "block"
    btnStart.style.display = "none"


    startTimer()  //start timer

    var i = 0;
    textDisplayEl.textContent = questions[i].question
    btn1.textContent = questions[i].answer1
    btn2.textContent = questions[i].answer2
    btn3.textContent = questions[i].answer3
    btn4.textContent = questions[i].answer4

    formEl.addEventListener("click", function (event) {
        event.stopPropagation()
        var answer = questions[i].answer
        if (event.target.id.slice(-1) === answer){
            textResponseEl.innerHTML = "Correct!"
            score ++
            scoreEl.innerHTML = score
        } else {
            textResponseEl.innerHTML = "Incorrect!"
            time = time - 5
        }
        i ++;
        if (i < questions.length) {
            textDisplayEl.textContent = questions[i].question
            btn1.textContent = questions[i].answer1
            btn2.textContent = questions[i].answer2
            btn3.textContent = questions[i].answer3
            btn4.textContent = questions[i].answer4
            var answer = questions[i].answer
        } else {
            console.log("end game")
            time = 0
            return
        }
    })

    console.log("runGame")
}


btnStart.addEventListener("click", runGame)






