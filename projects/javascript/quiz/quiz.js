      

      // variables ===========================================================================
      
      let mainContainer = document.querySelector(".main-container");

      let activeElement;

      let givenAnswer;
      let actualAnswer;
      let answerCorrect;

      let correctQuestions = 0;
      let answered = false;

      let questionIndex = 0;
      let pageNmbr = 1;



      //start page ============================================================================

      let startButton = document.createElement("button");
      startButton.innerHTML = "Start";
      startButton.classList.add("start-restart-button");



      // main quiz page framework =============================================================

      let quizContainer = document.createElement("div");
      quizContainer.classList.add("quiz-container");

      let title = document.createElement("h1");
      title.innerHTML = "Math Problems";

      let progress = document.createElement("p");

      let question = document.createElement("p");
      question.classList.add("question");


      // answers ==============================================================================

      //answer 1
      let answerContainer1 = document.createElement("div");
      answerContainer1.classList.add("answer-container");

      let answerNmbr1 = document.createElement("p");
      answerNmbr1.innerHTML = "1";
      answerNmbr1.classList.add("answer-nmbr-odd");

      let answer1 = document.createElement("p");
      answer1.classList.add("answer", "answer-odd");

      //answer 2
      let answerContainer2 = document.createElement("div");
      answerContainer2.classList.add("answer-container");

      let answerNmbr2 = document.createElement("p");
      answerNmbr2.innerHTML = "2";
      answerNmbr2.classList.add("answer-nmbr-even");

      let answer2 = document.createElement("p");
      answer2.classList.add("answer", "answer", "answer-even");

      //answer 3
      let answerContainer3 = document.createElement("div");
      answerContainer3.classList.add("answer-container");

      let answerNmbr3 = document.createElement("p");
      answerNmbr3.innerHTML = "3";
      answerNmbr3.classList.add("answer-nmbr-odd");

      let answer3 = document.createElement("p");
      answer3.classList.add("answer", "answer-odd");

      //answer 4
      let answerContainer4 = document.createElement("div");
      answerContainer4.classList.add("answer-container");

      let answerNmbr4 = document.createElement("p");
      answerNmbr4.innerHTML = "4";
      answerNmbr4.classList.add("answer-nmbr-even");

      let answer4 = document.createElement("p");
      answer4.classList.add("answer", "answer-even");

      //answer 5
      let answerContainer5 = document.createElement("div");
      answerContainer5.classList.add("answer-container");

      let answerNmbr5 = document.createElement("p");
      answerNmbr5.innerHTML = "5";
      answerNmbr5.classList.add("answer-nmbr-odd");

      let answer5 = document.createElement("p");
      answer5.classList.add("answer", "answer", "answer-odd");



      //progress buttons ===================================================

      let buttonContainer = document.createElement("div");
      buttonContainer.classList.add("progress-button-container");

      // let prevButton = document.createElement("button");
      // prevButton.innerHTML = "vorige";
      // prevButton.classList.add("progress-button");

      let nextButton = document.createElement("button");
      nextButton.innerHTML = "Volgende";
      nextButton.classList.add("progress-button");


      // end page ==========================================================

      let endResult = document.createElement("h2");
      endResult.classList.add("score-container");

      let restartButton = document.createElement("button");
      restartButton.innerText = "Restart";
      restartButton.classList.add("start-restart-button")


      // event listeners ========================================================================

      startButton.addEventListener("click", startQuiz);
      restartButton.addEventListener("click", restartQuiz)
      // prevButton.addEventListener("click", prevPage);
      nextButton.addEventListener("click", nextPage);

      answer1.addEventListener("click", checkAnswer);
      answer2.addEventListener("click", checkAnswer);
      answer3.addEventListener("click", checkAnswer);
      answer4.addEventListener("click", checkAnswer);
      answer5.addEventListener("click", checkAnswer);


      // quiz answers ===========================================================================

      const quizArr = [
        {
          question: "What is 49 - 32?",
          answers: {
            a: "13",
            b: "17",
            c: "-17",
            d: "16",
            e: "697",
          },
          correctAnswer: "17",
        },
        {
          question: "What is 70 - 14?",
          answers: {
            a: "18",
            b: "79",
            c: "56",
            d: "32",
            e: "34",
          },
          correctAnswer: "56",
        },
        {
          question: "What is 80 - 15?",
          answers: {
            a: "74",
            b: "65",
            c: "93",
            d: "40",
            e: "975",
          },
          correctAnswer: "65",
        },
        {
          question: "What is 10 - 20?",
          answers: {
            a: "-350",
            b: "-15",
            c: "-10",
            d: "-34",
            e: "-35",
          },
          correctAnswer: "-10",
        },
        {
          question: "What is 56 + 11?",
          answers: {
            a: "102",
            b: "37",
            c: "44",
            d: "67",
            e: "50",
          },
          correctAnswer: "67",
        },
        {
          question: "What is 21 - 16?",
          answers: {
            a: "170",
            b: "18",
            c: "5",
            d: "2",
            e: "26",
          },
          correctAnswer: "5",
        },
      ];



//functions ===============================================================================

      //insert HTML ============================================================================


      function insertContent(){
      progress.innerHTML = pageNmbr + "/" + quizArr.length;
      question.innerHTML = quizArr[questionIndex].question;
      answer1.innerHTML = quizArr[questionIndex].answers.a;
      answer2.innerHTML = quizArr[questionIndex].answers.b;
      answer3.innerHTML = quizArr[questionIndex].answers.c;
      answer4.innerHTML = quizArr[questionIndex].answers.d;
      answer5.innerHTML = quizArr[questionIndex].answers.e;
      }

      //main quiz page framework ================================================================

      function quizBuilder() {
        mainContainer.appendChild(quizContainer);
        quizContainer.appendChild(title);
        quizContainer.appendChild(progress);
        quizContainer.appendChild(question);

        //answer 1
        quizContainer.appendChild(answerContainer1);
        answerContainer1.appendChild(answerNmbr1);
        answerContainer1.appendChild(answer1);

        // answer 2
        quizContainer.appendChild(answerContainer2);
        answerContainer2.appendChild(answerNmbr2);
        answerContainer2.appendChild(answer2);

        // answer 3
        quizContainer.appendChild(answerContainer3);
        answerContainer3.appendChild(answerNmbr3);
        answerContainer3.appendChild(answer3);

        // answer 4
        quizContainer.appendChild(answerContainer4);
        answerContainer4.appendChild(answerNmbr4);
        answerContainer4.appendChild(answer4);

        // answer 5
        quizContainer.appendChild(answerContainer5);
        answerContainer5.appendChild(answerNmbr5);
        answerContainer5.appendChild(answer5);

        // next prev buttons

        mainContainer.appendChild(buttonContainer);
        // buttonContainer.appendChild(prevButton);
        buttonContainer.appendChild(nextButton);
        
        insertContent()
      }

      // navigation functions ===================================================================

      function nextPage() {
        if ((pageNmbr < quizArr.length) && (answered == true)) {
          clearMarkUp();
          answered = false; 

          questionIndex++;
          pageNmbr++;
          //remove progressArr[questionIndex-1]
          //add progressArr[questionIndex]
          //wellicht met quizBuilder?
          insertContent();
        }

        if ((pageNmbr == 6) && (answered == true)){
          showResults()
        }
      }

      // function prevPage() {
      //   if (pageNmbr > 1) {
      //     questionIndex--;
      //     pageNmbr--;
      //     progress.innerHTML = pageNmbr + "/6";
      //     question.innerHTML = quizArr[questionIndex].question;
      //     answer1.innerHTML = quizArr[questionIndex].answers.a;
      //     answer2.innerHTML = quizArr[questionIndex].answers.b;
      //     answer3.innerHTML = quizArr[questionIndex].answers.c;
      //     answer4.innerHTML = quizArr[questionIndex].answers.d;
      //     answer5.innerHTML = quizArr[questionIndex].answers.e;
      //   }
      // }



      // quiz functionality ===========================================================================

      function checkAnswer() {
        activeElement = this;
        givenAnswer = this.innerHTML;

        if (answered == false) {
          answered = true;

          if (givenAnswer == quizArr[questionIndex].correctAnswer) {
            answerCorrect = true;
            correctQuestionCount();

          } else {
            answerCorrect = false;
            retrieveAnswers();
          }
          answerMarkUp();
        }
      }

      function retrieveAnswers() {
      answerElements = quizContainer.querySelectorAll(".answer");
      answerElementsArr = Array.from(answerElements);
      answerElementsArr.forEach(getCorrectAnswer);      
      }

      function getCorrectAnswer(element) {
        let answerToCheck = element.innerHTML;

        if (answerToCheck == quizArr[questionIndex].correctAnswer) {
          actualAnswer = element;
        }
      }
      
      
      
      function correctQuestionCount() {
        correctQuestions++;
      }

      function answerMarkUp() {
        if (answerCorrect == true) {
          activeElement.classList.add("green");
          activeElement.previousElementSibling.classList.add("green");
          actualAnswer = activeElement
        }

        if (answerCorrect == false) {
          activeElement.classList.add("red");
          activeElement.previousElementSibling.classList.add("red");
          actualAnswer.classList.add("green");
          actualAnswer.previousElementSibling.classList.add("green");
  
        }
      }

      function clearMarkUp() {
        activeElement.classList.remove("red", "green");
        activeElement.previousElementSibling.classList.remove("red", "green");
        actualAnswer.classList.remove("red", "green");
        actualAnswer.previousElementSibling.classList.remove("red", "green");
      }

      function showResults(){
        quizContainer.remove();
        nextButton.remove();

        mainContainer.append(endResult);
        endResult.innerText = "Je hebt " + correctQuestions + " van de " + quizArr.length + " vragen goed!"
        mainContainer.append(restartButton)
      }



      //start and stop functions ==================================================================

      function startScreen() {
        mainContainer.append(startButton)
      }

      function startQuiz() {
        startButton.remove();
        quizBuilder();
      }

      function restartQuiz(){
        endResult.remove();
        restartButton.remove();
        clearMarkUp()
        startScreen();
        answered = false;   
        correctAnswers = 0;
        pageNmbr = 1
        questionIndex = 0
      }


      //make it rain =============================================================================

      startScreen()






   



