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
  { type: "affirmative", correct: ["I", "am", "working", "on", "my", "project", "."], distractors: ["run", "cat", "?"] },
  { type: "affirmative", correct: ["He", "is", "fixing", "his", "bike", "."], distractors: ["dog", "jump", "?"] },
  { type: "affirmative", correct: ["We", "are", "shopping", "."], distractors: ["sing", "banana", "?"] },
  { type: "affirmative", correct: ["She", "is", "painting", "a", "picture", "."], distractors: ["swim", "car", "?"] },
  { type: "affirmative", correct: ["They", "are", "dancing", "."], distractors: ["bike", "dance", "?"] },
  { type: "affirmative", correct: ["You", "are", "listening", "to", "music", "."], distractors: ["tree", "walk", "?"] },
  { type: "affirmative", correct: ["My", "dad", "is", "washing", "the", "car", "."], distractors: ["book", "blue", "?"] },
  { type: "affirmative", correct: ["The", "children", "are", "playing", "in", "the", "park", "."], distractors: ["run", "?"] },

  // Negative (17)
  { type: "negative", correct: ["I", "am", "not", "sleeping", "."], distractors: ["run", "cat", "?"] },
  { type: "negative", correct: ["She", "is", "not", "eating", "pizza", "."], distractors: ["dog", "jump", "?"] },
  { type: "negative", correct: ["They", "are", "not", "watching", "TV", "."], distractors: ["sing", "banana", "?"] },
  { type: "negative", correct: ["We", "are", "not", "playing", "football", "."], distractors: ["swim", "car", "?"] },
  { type: "negative", correct: ["He", "is", "not", "reading", "a", "book", "."], distractors: ["bike", "dance", "?"] },
  { type: "negative", correct: ["You", "are", "not", "drawing", "."], distractors: ["tree", "walk", "?"] },
  { type: "negative", correct: ["My", "mom", "is", "not", "cooking", "dinner", "."], distractors: [ "fly", "?"] },
  { type: "negative", correct: ["The", "teacher", "is", "not", "writing", "on", "the", "board", "."], distractors: ["dog", "?"] },
  { type: "negative", correct: ["Students", "are", "not", "taking", "a", "test", "."], distractors: ["banana", "laugh", "?"] },
  { type: "negative", correct: ["I", "am", "not", "working", "on", "my", "project", "."], distractors: ["run", "cat", "?"] },
  { type: "negative", correct: ["He", "is", "not", "fixing", "his", "bike", "."], distractors: ["dog", "jump", "?"] },
  { type: "negative", correct: ["We", "are", "not", "shopping", "."], distractors: ["sing", "banana", "?"] },
  { type: "negative", correct: ["She", "is", "not", "painting", "a", "picture", "."], distractors: ["swim", "car", "?"] },
  { type: "negative", correct: ["They", "are", "not", "dancing", "."], distractors: ["bike", "dance", "?"] },
  { type: "negative", correct: ["You", "are", "not", "listening", "to", "music", "."], distractors: ["tree", "walk", "?"] },
  { type: "negative", correct: ["My", "dad", "is", "not", "washing", "the", "car", "."], distractors: ["book", "blue", "?"] },
  { type: "negative", correct: ["The", "children", "are", "not", "playing", "in", "the", "park", "."], distractors: ["run", "?"] },

  // Question (16)
  { type: "question", correct: ["Am", "I", "eating", "an", "apple", "?"], distractors: ["run", "cat", "."] },
  { type: "question", correct: ["Is", "she", "reading", "a", "book", "?"], distractors: ["dog", "jump", "."] },
  { type: "question", correct: ["Are", "they", "playing", "football", "?"], distractors: ["sing", "banana", "."] },
  { type: "question", correct: ["Are", "we", "drawing", "?"], distractors: ["swim", "car", "."] },
  { type: "question", correct: ["Is", "he", "writing", "?"], distractors: ["bike", "dance", "."] },
  { type: "question", correct: ["Are", "you", "singing", "?"], distractors: ["tree", "walk", "."] },
  { type: "question", correct: ["Am", "I", "cooking", "dinner", "?"], distractors: ["book", "blue", "."] },
  { type: "question", correct: ["Is", "she", "watching", "TV", "?"], distractors: ["run", "."] },
  { type: "question", correct: ["Is", "he", "driving", "to", "work", "?"], distractors: ["apple", "sing", "."] },
  { type: "question", correct: ["Are", "we", "walking", "?"], distractors: ["dance", "red", "."] },
  { type: "question", correct: ["Are", "they", "studying", "English", "?"], distractors: ["car", "jump", "."] },
  { type: "question", correct: ["Are", "you", "drinking", "coffee", "?"], distractors: ["tree", "swim", "."] },
  { type: "question", correct: ["Is", "my", "mom", "cleaning", "the", "house", "?"], distractors: [ "fly", "."] },
  { type: "question", correct: ["Is", "the", "teacher", "writing", "on", "the", "board", "?"], distractors: ["dog", "."] },
  { type: "question", correct: ["Are", "students", "taking", "a", "test", "?"], distractors: ["banana", "laugh", "."] },
  { type: "question", correct: ["Am", "I", "working", "on", "my", "project", "?"], distractors: ["run", "cat", "."] }
];

// Shuffle the questions at the start
function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledSentences = shuffle(sentences);
let currentSentenceIndex = 0;
let selectedWords = [];
let wordButtons = [];
const sentenceArea = document.getElementById("sentence-area");
const userSentence = document.getElementById("user-sentence");
const checkBtn = document.getElementById("check-btn");
const nextBtn = document.getElementById("next-btn");
const feedback = document.getElementById("feedback");
const instructionBox = document.getElementById("instruction-box");

function renderSentence() {
  sentenceArea.innerHTML = "";
  userSentence.innerHTML = "";
  feedback.innerHTML = "";
  selectedWords = [];
  wordButtons = [];
  checkBtn.disabled = false;
  // Next button is always enabled and visible
  nextBtn.disabled = false;

  const sentence = shuffledSentences[currentSentenceIndex];
  let words = sentence.correct.concat(sentence.distractors);
  words = shuffle(words);

  words.forEach((word, idx) => {
    const btn = document.createElement("button");
    btn.className = "word-btn";
    btn.textContent = word;
    btn.addEventListener("click", () => selectWord(word, idx));
    wordButtons.push(btn);
    sentenceArea.appendChild(btn);
  });

  // Show dynamic instruction
  let instruction = "";
  if (sentence.type === "affirmative") {
    instruction = "Make an <b>affirmative</b> sentence.";
  } else if (sentence.type === "negative") {
    instruction = "Make a <b>negative</b> sentence.";
  } else if (sentence.type === "question") {
    instruction = "Make a <b>question</b>.";
  }
  instructionBox.innerHTML = instruction;
}

function selectWord(word, idx) {
  // If already selected, remove from selectedWords
  const selectedIdx = selectedWords.indexOf(word + "|" + idx);
  if (selectedIdx > -1) {
    selectedWords.splice(selectedIdx, 1);
    wordButtons[idx].classList.remove("selected");
  } else {
    selectedWords.push(word + "|" + idx);
    wordButtons[idx].classList.add("selected");
  }
  updateUserSentence();
}

function updateUserSentence() {
  // Only show the words (not the indices)
  const words = selectedWords.map(wi => wi.split("|")[0]);
  userSentence.textContent = words.join(" ");
}

function checkAnswer() {
  const sentence = shuffledSentences[currentSentenceIndex];
  const userWords = selectedWords.map(wi => wi.split("|")[0]);
  if (userWords.length === 0) {
    feedback.innerHTML = "Please select words to form a sentence.";
    // Keep checkBtn enabled
    return;
  }
  if (arraysEqual(userWords, sentence.correct)) {
    feedback.innerHTML = "<span style='color:green'>Correct!</span>";
    // Keep checkBtn enabled for further attempts if desired
    // Next button is always available
  } else {
    feedback.innerHTML = "<span style='color:red'>Try again!</span>";
    // Keep checkBtn enabled so students can try again
  }
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function nextSentence() {
  currentSentenceIndex = (currentSentenceIndex + 1) % shuffledSentences.length;
  renderSentence();
}

checkBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", nextSentence);

// On load, always show nextBtn
nextBtn.style.display = "inline-block";
renderSentence();
