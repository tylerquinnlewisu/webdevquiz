const questionNumber = document.querySelector(".question-number"); 
const questionText = document.querySelector(".question-text"); 
const optionContainer = document.querySelector(".option-container"); 
const answersIndicatorContainer = document.querySelector(".answers-indicator"); 
const homeBox = document.querySelector(".home-box"); 
const quizBox = document.querySelector(".quiz-box"); 
const resultBox = document.querySelector(".result-box"); 

let questionCounter = 0;
currentQuestion = " "; 
availableQuestions = []; 
availableOptions = []; 
correctAnswers = 0;
attempt = 0;




// Pushing questions into availableQuestions 
function setAvailableQuestions(){
    const totalQuestion = quiz.length; 
    for(i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i]); 
    }
}

//Set question number and question and options 
function getNewQuestion(){
    //set question number 
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length; 

    // set question text
    // get random question 
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]; 
    console.log(questionIndex); 
    currentQuestion = questionIndex; 
    questionText.innerHTML = currentQuestion.q; 


    // get the position of 'questionIndex' from the availableQuestion array; 
    const index1 = availableQuestions.indexOf(questionIndex); 
    console.log(index1); 

    //remove the 'questionIndex' from the availableQuestions array, so as to prevent repeats 
    availableQuestions.splice(index1,1); 

    //set options 
    //get the lengthof options 
    const optionLen = currentQuestion.options.length
    //push options into availableOptions array
    for(i=0;i<optionLen;i++){
        availableOptions.push(i); 
    }

    optionContainer.innerHTML = ''; 


    animationDelay = .1; 
    // create options in html 
    for(i=0; i<optionLen; i++){
        //random option
        const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)]; 
        //get the position of 'optionIndex' from the availableOptions 
        const index2 = availableOptions.indexOf(optonIndex); 
        //remove the 'optonIndex' from the availableOptions, so that the option does not repeat 
        availableOptions.splice(index2,1); 
        console.log(optonIndex); 
        console.log(availableOptions); 

        const option = document.createElement("div"); 
        option.innerHTML = currentQuestion.options[optonIndex]; 
        option.id = optonIndex;
        option.className = "option";
        option.style.animationDelay = animationDelay + 's';  
        animationDelay = animationDelay + .2; 
        optionContainer.appendChild(option); 
        option.setAttribute("onclick","getResult(this)"); 

    }

  
    questionCounter++; 
}

// get the result of current attempt question 
function getResult(element){
    const id = parseInt(element.id); 

    //get the answer by comparing the id of clicked option

    if(id === currentQuestion.answer){

        //set the green color to correct option 
        element.classList.add("correct"); 

        console.log("answer is correct"); 

        // add the indicator to correct mark 
        updateAnswerIndicator("correct");

        correctAnswers++; 
        console.log("correct: " + correctAnswers); 


    } else{

        //set the red color to correct option 
        element.classList.add("incorrect"); 

        console.log("answer incorrect"); 

        
        // add the indicator to incorrect mark
        updateAnswerIndicator("incorrect"); 



        //if the answer is incorrect, show the correct answer 
        const optionLen = optionContainer.children.length; 
        for(i=0;i<optionLen;i++){
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                optionContainer.children[i].classList.add("correct"); 

            }
        }

    }

    attempt++; 

    unclickableOptions(); 

}

//make all the options unclickable once the user selects an option 
function unclickableOptions(){
    const optionLen = optionContainer.children.length; 
    for(i=0; i<optionLen; i++){
        optionContainer.children[i].classList.add("already-answered"); 

    }

}



function answersIndicator(){
    answersIndicatorContainer.innerHTML = ''; 

    const totalQuestion = quiz.length; 
    for(i=0;i<totalQuestion;i++){
        const indicator = document.createElement("div"); 

        answersIndicatorContainer.appendChild(indicator); 
    }

}

function updateAnswerIndicator(markType){
    console.log(markType); 

    answersIndicatorContainer.children[questionCounter-1].classList.add(markType); 
}


function next(){
    if (questionCounter === quiz.length){
        console.log("quiz over"); 

        quizOver(); 

    } else{
        getNewQuestion(); 
    }
}

function quizOver(){
    //hide quizbox

    quizBox.classList.add("hide"); 
    
    //show result box

    resultBox.classList.remove("hide"); 

    quizResult(); 
}

// get the quiz result 
function quizResult(){
    resultBox.querySelector(".total-question").innerHTML = quiz.length; 
    resultBox.querySelector(".total-attempt").innerHTML = attempt; 
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers; 
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers
    const percentage = (correctAnswers/quiz.length)*100; 
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%"; 
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + quiz.length; 
    
}




window.onload = function(){

    
    setAvailableQuestions(); 
    getNewQuestion(); 


    // to create indicator of answers 
    answersIndicator(); 

    //homeBox.querySelector(".total-question").innerHTML = quiz.length; 



}
