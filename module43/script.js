const display = document.getElementById("display");
const question = document.getElementById("question");
const startBtn = document.getElementById("starts");
const countdownOverlay = document.getElementById("countdown");
const resultModal = document.getElementById("result");
const modalBackground = document.getElementById("modal-background");

// variables
let userText = "";
let errorCount = 0;
let startTime;
let questionText = "";

// Load and display question
fetch("./texts.json")
  .then((res) => res.json())
  .then((data) => {
    questionText = data[Math.floor(Math.random() * data.length)];
    question.innerHTML = questionText;
  });

// checks the user typed character and displays accordingly
const typeController = (e) => {
  const newLetter = e.key;

  // Handle backspace press
  if (newLetter == "Backspace") {
    userText = userText.slice(0, userText.length - 1);
    return display.removeChild(display.lastChild);
  }

  // these are the valid character we are allowing to type
  const validLetters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890!@#$%^&*()_+-={}[]'\".,?";

  // if it is not a valid character like Control/Alt then skip displaying anything
  if (!validLetters.includes(newLetter)) {
    return;
  }

  userText += newLetter;

  const newLetterCorrect = validate(newLetter);

  if (newLetterCorrect) {
    display.innerHTML += `<span class="green">${newLetter === " " ? "▪" : newLetter}</span>`;
  } else {
    display.innerHTML += `<span class="red">${newLetter === " " ? "▪" : newLetter}</span>`;
    errorCount++;
  }

  // check if given question text is equal to user typed text
  if (questionText === userText) {
    gameOver();
  }
  //if got any error then gameover on finish
  // else if (key === "Enter") {
  //   gameOver();
  // }
};

const validate = (key) => {
  if (key === questionText[userText.length - 1]) {
    return true;
  }
  return false;
};

// FINISHED TYPING
const gameOver = () => {
  document.removeEventListener("keydown", typeController);
  // the current time is the finish time
  // so total time taken is current time - start time
  const finishTime = new Date().getTime();
  const timeTaken = Math.floor((finishTime - startTime) / 1000);

  // show result modal
  resultModal.innerHTML = "";
  resultModal.classList.toggle("hidden");
  modalBackground.classList.toggle("hidden");
  // clear user text
  display.innerHTML = "";
  // make it inactive
  display.classList.add("inactive");
  // show result
  resultModal.innerHTML += `
    <h1>Finished!</h1>
    <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
    <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
    <p id="wpm"> </p>
    <button onclick="closeModal()">Close</button>
  `;

  addHistory(questionText, timeTaken, errorCount);

  // restart everything
  startTime = null;
  errorCount = 0;
  //resest counter
  document.getElementById("show-time").innerText = 0;
  //reset wpm
  document.getElementById("wpm").innerText = "Speed Count: 0 WPM";
  //reset question
  fetch("./texts.json")
    .then((res) => res.json())
    .then((data) => {
      questionText = data[Math.floor(Math.random() * data.length)];
      question.innerHTML = questionText;
    });

  
  userText = "";
  display.classList.add("inactive");
};



const closeModal = () => {
  modalBackground.classList.toggle("hidden");
  resultModal.classList.toggle("hidden");
  //add class
};

const start = () => {
  // If already started, do not start again
  if (startTime) return;

  let count = 4;
  countdownOverlay.style.display = "flex";

  const startCountdown = setInterval(() => {
    countdownOverlay.innerText = count;
    // if count is 0 then start the game
    //clear the hover effect
    

    // finished timer
    if (count == 0) {
      // -------------- START TYPING -----------------
      document.addEventListener("keydown", typeController);
      countdownOverlay.style.display = "none";
      display.classList.remove("inactive");

      clearInterval(startCountdown);
      startTime = new Date().getTime();
    }
    count--;
  }, 1000);
};

// START Countdown

startBtn.addEventListener("click", start);

// If history exists, show it
displayHistory();

// Show typing time spent
setInterval(() => {
  if (startTime) {
    const currentTime = new Date().getTime();
    const timeUsed = (currentTime - startTime) / 1000;
    const timeSpent = Math.floor(timeUsed);
    document.getElementById("show-time").innerText = `${startTime ? timeSpent: 0} seconds`;
  }
}, 1000);



// setInterval(() => {
//   const currentTime = new Date().getTime();
//   const timeSpent = (currentTime - startTime) / 1000;


//   document.getElementById("show-time").innerHTML = `${startTime ? timeSpent : 0} seconds`;
// }, 1000);




//word per minute calculator
const wpm = () => {
  const time = document.getElementById("show-time").innerText;
  const words = document.getElementById("display").innerText;
  // console.log(words);
  // console.log(display.innerText.length);
  //convert string to number\
  const times = parseInt(time);
  // console.log(times);
  const wordsPerMinute = Math.floor(display.innerText.length / 5 / times * 60);
  // console.log(wordsPerMinute);
  // console.log(time);
  
  if (times!=0 && wordsPerMinute<20) {
    document.getElementById("wpm").innerHTML = `<div>Speed Count: <span class="text-red-500" >${wordsPerMinute}</span> WPM</div>`;
  }
  else if (times!=0) {
    document.getElementById("wpm").innerHTML = `<div>Speed Count: <span class="text-green-500" >${wordsPerMinute}</span> WPM</div>`;
  }
  // alert(wordsPerMinute);
};

setInterval(() => {
  wpm();
}, 1000);


