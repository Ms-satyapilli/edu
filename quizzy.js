const questions = [
    {
        question: " What is the 16-bit compiler allowable range for integer constants?",
        optionA: "-3.4e38 to 3.4e38",
        optionB: "-32767 to 32768",
        optionC: "-32668 to 32667",
        optionD: "-32768 to 32767",
        correctOption: "optionD"
    },

    {
        question: "What is required in each C program?",
        optionA: "The program does not require any function.",
        optionB: "The program must have at least one function.",
        optionC: "Input data",
        optionD: "Output data",
        correctOption: "optionB"
    },

    {
        question: "Which of the following comment is correct when a macro definition includes arguments?",
        optionA: "There should be only one blank between the macro name and the opening parenthesis.",
        optionB: "All the comments are correct.",
        optionC: "There should be at least one blank between the macro name and the opening parenthesis.",
        optionD: "The opening parenthesis should immediately follow the macro name.",
        correctOption: "optionD"
    },

    {
        question: "What is a lint?",
        optionA: "C compiler",
        optionB: "Interactive debugger",
        optionC: "Analyzing tool",
        optionD: "C interpreter",
        correctOption: "optionC"
    },

    {
        question: 'What is the output of this statement printf("%d", (a++))?',
        optionA: "Garbage",
        optionB: "Error message",
        optionC: "The value of (a + 1)",
        optionD: "The current value of a",
        correctOption: "optionD"
    },

    {
        question: "What does this declaration mean? int x : 4;  ",
        optionA: "X is a four-bit integer.",
        optionB: "X is a four-digit integer.",
        optionC: "X cannot be greater than a four-digit integer.",
        optionD: "None of the these",
        correctOption: "optionA"
    },

    {
        question: "Why is a macro used in place of a function?",
        optionA: "It reduces execution time.",
        optionB: "It reduces code size.",
        optionC: "It increases code size.",
        optionD: "It increases execution time.",
        correctOption: "optionC"
    },

    {
        question: " In the C language, the constant is defined _______.",
        optionA: "Anywhere, but starting on a new line.",
        optionB: "Before main",
        optionC: "After main",
        optionD: "None of the these.",
        correctOption: "optionA"
    },

    {
        question: "How many times will the following loop execute? for(j = 1; j <= 10; j = j-1)  ",
        optionA: "Forever",
        optionB: "never",
        optionC: "0",
        optionD: "10",
        correctOption: "optionD"
    },

    {
        question: "A pointer is a memory address. Suppose the pointer variable has p address 1000, and that p is declared to have type int*, and an int is 4 bytes long. What address is represented by expression p + 2?",
        optionA: "1002",
        optionB: "1004",
        optionC: "1006",
        optionD: "1008",
        correctOption: "optionD"
    },

    {
        question: "Which one of the following is a loop construct that will always be executed once?",
        optionA: "for",
        optionB: "while",
        optionC: "do while",
        optionD: "switch",
        correctOption: "optionC"
    },

    {
        question: "Which of the following best describes the ordering of destructor calls for stack-resident objects in a routine?",
        optionA: "The first object destroyed is the last object destroyed; last created is first destroyed.",
        optionB: "Objects are destroyed in the order they appear in memory, the object with the lowest memory address is destroyed first.",
        optionC: "The first object created is the first object destroyed; last created is last destroyed.",
        optionD: "The order is undefined and may vary from compiler to compiler.",
        correctOption: "optionA"
    },


    {
        question: "How many characters can a string hold when declared as follows? char name[20]:  ",
        optionA: "18",
        optionB: "20",
        optionC: "19",
        optionD: "none",
        correctOption: "optionB"
    },

    {
        question: "Directives are translated by the",
        optionA: "Compiler",
        optionB: "Linker",
        optionC: "Editor",
        optionD: "Pre-processor",
        correctOption: "optionD"
    },

    {
        question: "How many bytes does 'int = D' use?",
        optionA: "2 or 4",
        optionB: "0",
        optionC: "1",
        optionD: "10",
        correctOption: "optionA"
    },

    {
        question: "What feature makes C++ so powerful?",
        optionA: "Easy implementation",
        optionB: "Reusing the old code",
        optionC: "Easy memory management",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "Which of the following will copy the null-terminated string that is in array src into array dest?",
        optionA: "strcpy(dest, src);",
        optionB: "dest = src;",
        optionC: "dest == src;",
        optionD: "strcpy( src,dest);",
        correctOption: "optionA"
    },

    {
        question: "Each instance of a class has a different set of",
        optionA: "Class interfaces",
        optionB: "Methods",
        optionC: "Return types",
        optionD: "Attribute values",
        correctOption: "optionD"
    },

  

]



let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}