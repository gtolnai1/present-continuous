// Present Continuous Practice App with Dynamic Instructions, Punctuation, and Score Tracking

const sentences = [
  // Original 6 sentences (affirmative)
  { type: "affirmative", correct: ["I", "am", "eating", "an", "apple", "."], distractors: ["run", "cat", "?"] },
  { type: "affirmative", correct: ["She", "is", "reading", "a", "book", "."], distractors: ["dog", "jump", "?"] },
  { type: "affirmative", correct: ["They", "are", "playing", "football", "."], distractors: ["sing", "banana", "?"] },
  { type: "affirmative", correct: ["We", "are", "drawing", "."], distractors: ["swim", "car", "?"] },
  { type: "affirmative", correct: ["He", "is", "writing", "."], distractors: ["bike", "dance", "?"] },
  { type: "affirmative", correct: ["You", "are", "singing", "."], distractors: ["tree", "walk", "?"] },

  // 50 additional sentences (affirmative, negative, question)
  // Affirmative (17)
  { type: "affirmative", correct: ["I", "am", "cooking", "dinner", "."], distractors: ["book", "blue", "?"] },
  { type: "affirmative", correct: ["She", "is", "watching", "TV", "."], distractors: ["run", "?"] },
  { type: "affirmative", correct: ["He", "is", "driving", "to", "work", "."], distractors: ["apple", "sing", "?"] },
  { type: "affirmative", correct: ["We", "are", "walking", "."], distractors: ["dance", "red", "?"] },
  { type: "affirmative", correct: ["They", "are", "studying", "English", "."], distractors: ["car", "jump", "?"] },
  { type: "affirmative", correct: ["You", "are", "drinking", "coffee", "."], distractors: ["tree", "swim", "?"] },
  { type: "affirmative", correct: ["My", "mom", "is", "cleaning", "the", "house", "."], distractors: [ "fly", "?"] },
  { type: "affirmative", correct: ["The", "teacher", "is", "writing", "on", "the", "board", "."], distractors: ["dog", "?"] },
  { type: "affirmative", correct: ["Students", "are", "taking", "a", "test", "."], distractors: ["banana", "laugh", "?"] },
  { type: "affirmative", correct: ["I", "am", "working", "on", "my", "computer", "."], distractors: ["fish", "?"] },
  { type: "affirmative", correct: ["She", "is", "talking", "on", "the", "phone", "."], distractors: [ "sleep", "?"] },
  { type: "affirmative", correct: ["It", "is", "raining", "outside", "."], distractors: ["happy", "milk", "?"] },
  { type: "affirmative", correct: ["The", "sun", "is", "shining", "."], distractors: ["pizza", "fast", "?"] },
  { type: "affirmative", correct: ["Children", "are", "playing", "."], distractors: ["cold", "pen", "?"] },
  { type: "affirmative", correct: ["My", "brother", "is", "sleeping", "."], distractors: ["orange", "?"] },
  { type: "affirmative", correct: ["We", "are", "eating", "lunch", "."], distractors: ["mouse", "loud", "?"] },
  { type: "affirmative", correct: ["The", "baby", "is", "crying", "."], distractors: ["heavy", "cake", "?"] },

  // Negative (17)
  { type: "negative", correct: ["I", "am", "not", "watching", "TV", "."], distractors: ["happy", "dog", "?"] },
  { type: "negative", correct: ["She", "is", "not", "cooking", "today", "."], distractors: ["run", "blue", "?"] },
  { type: "negative", correct: ["He", "is", "not", "working", "now", "."], distractors: ["cat", "big", "?"] },
  { type: "negative", correct: ["We", "are", "not", "playing", "football", "."], distractors: ["book", "hot", "?"] },
  { type: "negative", correct: ["They", "are", "not", "studying", "."], distractors: ["car", "small", "?"] },
  { type: "negative", correct: ["You", "are", "not", "listening", "to", "music", "."], distractors: ["tree", "cold", "?"] },
  { type: "negative", correct: ["My", "sister", "is", "not", "reading", "."], distractors: ["fish", "new", "?"] },
  { type: "negative", correct: ["The", "children", "are", "not", "sleeping", "."], distractors: ["red", "fast", "?"] },
  { type: "negative", correct: ["I", "am", "not", "drinking", "coffee", "."], distractors: ["chair", "old", "?"] },
  { type: "negative", correct: ["She", "is", "not", "talking", "on", "the", "phone", "."], distractors: ["green", "slow", "?"] },
  { type: "negative", correct: ["We", "are", "not", "walking", "to", "school", "."], distractors: ["milk", "long", "?"] },
  { type: "negative", correct: ["It", "is", "not", "snowing", "."], distractors: ["yellow", "heavy", "?"] },
  { type: "negative", correct: ["The", "dog", "is", "not", "barking", "."], distractors: ["pen", "quiet", "?"] },
  { type: "negative", correct: ["My", "dad", "is", "not", "driving", "."], distractors: ["cake", "thin", "?"] },
  { type: "negative", correct: ["The", "students", "are", "not", "writing", "."], distractors: ["orange", "easy", "?"] },
  { type: "negative", correct: ["You", "are", "not", "wearing", "a", "coat", "."], distractors: ["mouse", "short", "?"] },
  { type: "negative", correct: ["They", "are", "not", "eating", "dinner", "."], distractors: ["loud", "clean", "?"] },

  // Question (16)
  { type: "question", correct: ["Are", "you", "watching", "TV", "?"], distractors: ["book", "red", "."] },
  { type: "question", correct: ["Is", "she", "cooking", "dinner", "?"], distractors: ["run", "big", "."] },
  { type: "question", correct: ["Are", "they", "studying", "English", "?"], distractors: ["cat", "hot", "."] },
  { type: "question", correct: ["Is", "he", "working", "today", "?"], distractors: ["tree", "new", "."] },
  { type: "question", correct: ["Are", "we", "going", "to", "the", "park", "?"], distractors: ["fish", "cold", "."] },
  { type: "question", correct: ["Is", "it", "raining", "?"], distractors: ["chair", "fast", "."] },
  { type: "question", correct: ["Are", "you", "drinking", "coffee", "?"], distractors: ["dog", "small", "."] },
  { type: "question", correct: ["Is", "the", "baby", "sleeping", "?"], distractors: ["green", "old", "."] },
  { type: "question", correct: ["Are", "the", "children", "playing", "outside", "?"], distractors: ["milk", "quiet", "."] },
  { type: "question", correct: ["Is", "your", "mom", "cleaning", "?"], distractors: ["yellow", "easy", "."] },
  { type: "question", correct: ["Are", "you", "listening", "to", "music", "?"], distractors: ["pen", "heavy", "."] },
  { type: "question", correct: ["Is", "the", "teacher", "writing", "?"], distractors: ["cake", "long", "."] },
  { type: "question", correct: ["Are", "they", "walking", "?"], distractors: ["orange", "thin", "."] },
  { type: "question", correct: ["Is", "she", "talking", "on", "the", "phone", "?"], distractors: ["mouse", "loud", "."] },
  { type: "question", correct: ["Are", "you", "wearing", "a", "jacket", "?"], distractors: ["blue", "short", "."] },
  { type: "question", correct: ["Is", "the", "sun", "shining", "?"], distractors: ["happy", "clean", "."] }
];

// Instruction data for each type
const instructionData = {
  affirmative: {
    text: 'Form an <strong>affirmative</strong> sentence in the Present Continuous. Alkoss állító mondatot! ',
    class: 'instruction-affirmative',
    icon: '🟢'
  },
  negative: {
    text: 'Form a <strong>negative</strong> sentence in the Present Continuous. Alkoss tagadó mondatot!',
    class: 'instruction-negative',
    icon: '🔴'
  },
  question: {
    text: 'Form a <strong>question</strong> in the Present Continuous. alkoss kérdő mondatot!',
    class: 'instruction-question',
    icon: '🟡'
  }
};

let currentSentence = {};
let userSentence = [];
let usedIndexes = [];
let wordButtons = [];
let currentIndex = 0;
let score = 0;
let total = 0;

function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickSentence() {
  if (usedIndexes.length === sentences.length) usedIndexes = [];
  let idx;
  do {
    idx = Math.floor(Math.random() * sentences.length);
  } while (usedIndexes.includes(idx));
  usedIndexes.push(idx);
  currentIndex = usedIndexes.length;
  return sentences[idx];
}

function updateInstruction(type) {
  const box = document.getElementById("instruction-box");
  const data = instructionData[type];
  if (box && data) {
    box.className = data.class;
    box.innerHTML = `<span class="instruction-icon">${data.icon}</span> <span id="instruction-text">${data.text}</span>`;
  }
}

function renderSentence() {
  currentSentence = pickSentence();
  userSentence = [];
  document.getElementById("feedback").textContent = "";
  document.getElementById("user-sentence").textContent = "";
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("check-btn").disabled = false;
  updateInstruction(currentSentence.type);

  let words = currentSentence.correct.concat(currentSentence.distractors);
  words = shuffle(words);
  const area = document.getElementById("sentence-area");
  area.innerHTML = "";
  wordButtons = [];
  words.forEach((word, i) => {
    const btn = document.createElement("button");
    btn.textContent = word;
    btn.className = "word-btn" + (word === "." || word === "?" ? " word-punct" : "");
    btn.onclick = () => selectWord(i, word, btn);
    btn.setAttribute("aria-label", word);
    area.appendChild(btn);
    wordButtons.push(btn);
  });

  updateScorePanel();
  updateUserSentence();
}

function selectWord(idx, word, btn) {
  if (btn.classList.contains("selected")) {
    btn.classList.remove("selected");
    const pos = userSentence.findIndex(item => item.idx === idx);
    if (pos !== -1) userSentence.splice(pos, 1);
  } else {
    btn.classList.add("selected");
    userSentence.push({ idx, word });
  }
  updateUserSentence();
}

function updateUserSentence() {
  const userWords = userSentence.map(item => item.word);
  const display = userWords.length ? userWords.join(" ") : "Click the words in order to build your sentence.";
  document.getElementById("user-sentence").textContent = display;
}

function checkAnswer() {
  const userWords = userSentence.map(item => item.word);
  const correctWords = currentSentence.correct;
  const feedback = document.getElementById("feedback");
  const checkBtn = document.getElementById("check-btn");
  const nextBtn = document.getElementById("next-btn");
  total++;
  if (arraysEqual(userWords, correctWords)) {
    score++;
    feedback.innerHTML = "✅ Correct!";
    feedback.className = "feedback-correct";
    checkBtn.disabled = true; // Only disable when correct
    nextBtn.style.display = "inline-block";
  } else if (userWords.length !== correctWords.length) {
    feedback.innerHTML = "This is not the correct solution. Try again";
    feedback.className = "feedback-incorrect";
    checkBtn.disabled = false; // Keep enabled after incomplete/incorrect
    nextBtn.style.display = "none";
  } else {
    feedback.innerHTML = `❌ Incorrect.<br>Your answer: <span class="user-answer">${userWords.join(" ")}</span><br>Correct answer: <span class="correct-answer">${correctWords.join(" ")}</span>`;
    feedback.className = "feedback-incorrect";
    checkBtn.disabled = false; // Keep enabled after incorrect
    nextBtn.style.display = "none";
  }
  updateScorePanel();
}


function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function clearAnswer() {
  userSentence = [];
  wordButtons.forEach(btn => btn.classList.remove("selected"));
  updateUserSentence();
}

function nextSentence() {
  renderSentence();
}

function updateScorePanel() {
  // Optional: Add a score/progress display if you add it to your HTML
}

document.getElementById("check-btn").onclick = checkAnswer;
document.getElementById("next-btn").onclick = nextSentence;

// Initial render
window.onload = renderSentence;


