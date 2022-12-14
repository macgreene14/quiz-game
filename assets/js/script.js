var textDisplayEl =  document.getElementById("textDisplay")
var textResponseEl = document.getElementById("textResponse")
var nameInputEl = document.getElementById("validationDefault01")
var formEl = document.getElementById("inputForm")
var scoreFormEl = document.getElementById("scoreForm")
var btnScore = document.getElementById("btnScore")
var nameEl = document.getElementById("name")
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
    question: "Commonly used data types do not include _____.",
    answer1: "boolean",
    answer2: "alerts",
    answer3: "strings",
    answer4: "numbers",
    answer: '2'
}

var trivia2 = {
    question: "Arrays in Javscipt can be used to store everything but _____.",
    answer1: "numbers",
    answer2: "objects",
    answer3: "strings",
    answer4: "APIs",
    answer: '4'
}

var trivia3 = {
    question: "Strings values must be enclosed within _____.",
    answer1: "quotation marks",
    answer2: "brackets",
    answer3: "commas",
    answer4: "periods",
    answer: '1'
}

var trivia4 = {
    question: "jQuery is an example of a _____.",
    answer1: "database",
    answer2: "Web API",
    answer3: "programming language",
    answer4: "form element",
    answer: '2'
}

var trivia5 = {
    question: "A very useful tool used during development and debugging for printign content to the debugger is: ",
    answer1: "javascript",
    answer2: "terminal/bash",
    answer3: "console.log",
    answer4: "for loops",
    answer: '3'
}

// create list containing question objects
var questions = [trivia1, trivia2, trivia3, trivia4, trivia5]


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

formEl.style.display = "none"
scoreFormEl.style.display = "none"

function runGame () {
    startTimer()  //start timer

    formEl.style.display = "block"
    btnStart.style.display = "none"
    scoreFormEl.style.display = "none"
    timerEl.innerHTML = time
    scoreEl.innerHTML = 0



    var i = 0;
    textDisplayEl.textContent = questions[i].question
    btn1.textContent = questions[i].answer1
    btn2.textContent = questions[i].answer2
    btn3.textContent = questions[i].answer3
    btn4.textContent = questions[i].answer4

    formEl.addEventListener("click", function (event) {
        // event.stopPropagation()
        var answer = questions[i].answer
        if (event.target.id.slice(-1) === answer){
            textResponseEl.innerHTML = "Correct!"
            score ++
            scoreEl.innerHTML = score
        } else {
            textResponseEl.innerHTML = "Incorrect! -5 Seconds"
            time = time - 5
        }
        i ++;
        if (i < questions.length && time > 0) {
            //set button content per object storage
            textDisplayEl.textContent = questions[i].question
            btn1.textContent = questions[i].answer1
            btn2.textContent = questions[i].answer2
            btn3.textContent = questions[i].answer3
            btn4.textContent = questions[i].answer4
            var answer = questions[i].answer
        } else {
            // questions out or time is up, end game
            console.log("end game")
            textDisplayEl.innerHTML = "All Done! Your Score:  " + score

            btnStart.style.display = "none"
            formEl.style.display = "none"
            textResponseEl.style.display = "none"
            scoreFormEl.style.display = "block"
            time = 0
            return
        }
        
    })

    console.log("run game")
}

function addScore (event) {
    event.preventDefault()
    // btnScore.style.display = "none"
    // scoreFormEl.style.display = "none"
    // btnStart.style.display = "block"

    var storedScore = JSON.parse(localStorage.getItem("scorecard"))
    console.log(storedScore)

    // convert json to string for storing locally
    var inputScore = nameInputEl.value
    var payload = JSON.stringify({"name" : inputScore, "score" : score})
    console.log(payload)
    localStorage.setItem("scorecard", payload)

    newElement = document.createElement("p")
    newElement.classList.add("scorestyle")
    newElement.textContent = "Previous Score: " + storedScore['score'] + " -" + storedScore['name']
    document.body.appendChild(newElement)


    newElement = document.createElement("p")
    newElement.classList.add("scorestyle")
    newElement.textContent = "Your Score: " + score + " -" + inputScore
    document.body.appendChild(newElement)


    return

}

btnStart.addEventListener("click", runGame)
scoreFormEl.addEventListener("submit", addScore, {once: true})







