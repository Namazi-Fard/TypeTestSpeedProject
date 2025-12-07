// set variables
const theTimer = document.querySelector(".timer");
const testArea = document.querySelector("#test-area");
// element reference and current text string
const originTextEl = document.querySelector("#origin-text p");

let originText = originTextEl ? originTextEl.innerHTML : "";

const testWrapper = document.querySelector(".test-wrapper");

const resetButton = document.querySelector("#reset");

const refresh = document.querySelector("#refresh");

// 100  words list
const defaultWords = [
  "bring",
  "the",
  "package",
  "inside",
  "close",
  "the",
  "window",
  "softly",
  "please",
  "water",
  "the",
  "plants",
  "remember",
  "to",
  "call",
  "mom",
  "finish",
  "the",
  "report",
  "today",
  "turn",
  "off",
  "the",
  "lights",
  "save",
  "your",
  "work",
  "frequently",
  "take",
  "a",
  "short",
  "break",
  "pack",
  "an",
  "extra",
  "sweater",
  "check",
  "the",
  "oil",
  "level",
  "finish",
  "your",
  "coffee",
  "first",
  "walk",
  "the",
  "dog",
  "tonight",
  "read",
  "before",
  "you",
  "sleep",
  "reply",
  "to",
  "that",
  "email",
  "plan",
  "lunch",
  "with",
  "friends",
  "start",
  "the",
  "meeting",
  "promptly",
  "unlock",
  "your",
  "creative",
  "potential",
  "keep",
  "learning",
  "every",
  "day",
  "water",
  "the",
  "garden",
  "daily",
  "share",
  "the",
  "dessert",
  "please",
  "wear",
  "sunscreen",
  "this",
  "morning",
  "charge",
  "your",
  "phone",
  "now",
  "feed",
  "the",
  "cat",
  "tonight",
  "check",
  "the",
  "tire",
  "pressure",
  "finish",
  "chores",
  "before",
  "dinner",
  "practice",
  "scales",
  "twenty",
  "minutes",
  "call",
  "your",
  "insurance",
  "agent",
  "bring",
  "extra",
  "batteries",
  "tomorrow",
  "update",
  "the",
  "contact",
  "list",
  "send",
  "the",
  "invoice",
  "today",
  "keep",
  "the",
  "change",
  "please",
  "close",
  "all",
  "browser",
  "tabs",
  "backup",
  "your",
  "files",
  "nightly",
  "enjoy",
  "the",
  "quiet",
  "morning",
  "embrace",
  "small",
  "daily",
  "wins",
  "listen",
  "more",
  "than",
  "speak",
  "breathe",
  "slowly",
  "and",
  "deeply",
  "taste",
  "before",
  "you",
  "salt",
  "learn",
  "one",
  "new",
  "thing",
  "ask",
  "for",
  "help",
  "early",
  "smile",
  "at",
  "strangers",
  "today",
  "hold",
  "the",
  "door",
  "open",
  "start",
  "small",
  "then",
  "scale",
  "save",
  "money",
  "for",
  "travel",
  "keep",
  "promises",
  "to",
  "yourself",
  "learn",
  "from",
  "every",
  "failure",
  "turn",
  "dreams",
  "into",
  "plans",
  "trust",
  "your",
  "gut",
  "instincts",
  "respect",
  "other",
  "peoples",
  "time",
  "keep",
  "a",
  "gratitude",
  "journal",
  "reduce",
  "one",
  "unnecessary",
  "expense",
  "try",
  "something",
  "new",
  "weekly",
  "celebrate",
  "small",
  "wins",
  "often",
  "send",
  "a",
  "thoughtful",
  "message",
  "replace",
  "sugar",
  "with",
  "fruit",
  "take",
  "scenic",
  "routes",
  "sometimes",
  "keep",
  "learning",
  "new",
  "skills",
  "cook",
  "with",
  "fresh",
  "ingredients",
  "forgive",
  "and",
  "move",
  "forward",
  "practice",
  "mindful",
  "breathing",
  "daily",
  "turn",
  "off",
  "notifications",
  "occasionally",
  "write",
  "down",
  "your",
  "goals",
  "refill",
  "the",
  "coffee",
  "beans",
  "visit",
  "family",
  "this",
  "weekend",
  "explore",
  "nearby",
  "hiking",
  "trails",
  "send",
  "birthday",
  "wishes",
  "early",
  "polish",
  "shoes",
  "before",
  "interview",
  "fix",
  "that",
  "leaky",
  "faucet",
  "donate",
  "gently",
  "used",
  "clothing",
  "prepare",
  "for",
  "rainy",
  "days",
  "keep",
  "an",
  "emergency",
  "kit",
  "replace",
  "the",
  "burnt",
  "bulb",
  "double-check",
  "the",
  "meeting",
  "attachments",
  "smile",
  "during",
  "phone",
  "calls",
  "share",
  "knowledge",
  "with",
  "others",
  "volunteer",
  "at",
  "local",
  "shelter",
  "wear",
  "comfortable",
  "walking",
  "shoes",
  "update",
  "your",
  "password",
  "regularly",
  "practice",
  "patience",
  "every",
  "morning",
  "protect",
  "plants",
  "from",
  "frost",
  "remember",
  "anniversaries",
  "and",
  "birthdays",
  "prepare",
  "healthy",
  "packed",
  "lunches",
  "include",
  "everyone",
  "in",
  "conversation",
  "trust",
  "but",
  "verify",
  "information",
  "read",
  "the",
  "fine",
  "print",
  "keep",
  "your",
  "promises",
  "always",
  "practice",
  "coding",
  "every",
  "day",
  "secure",
  "your",
  "online",
  "accounts",
  "cook",
  "extra",
  "for",
  "leftovers",
  "learn",
  "a",
  "new",
  "language",
  "paint",
  "the",
  "old",
  "fence",
  "replace",
  "worn",
  "out",
  "tires",
  "clean",
  "the",
  "coffee",
  "maker",
  "finish",
  "what",
  "you",
  "start",
  "stand",
  "up",
  "for",
  "yourself",
  "learn",
  "to",
  "forgive",
  "quickly",
  "keep",
  "a",
  "tidy",
  "workspace",
  "turn",
  "pages",
  "not",
  "screens",
  "organize",
  "cables",
  "behind",
  "desk",
  "sleep",
  "eight",
  "hours",
  "nightly",
];
var timer = [0, 0, 0, 0];
var timerRunnig = false;
var interval;
// Add leading zero to numbers 9 or below (purely for aesthetics)
function leadingZero(time) {
  if (time <= 9) {
    time = "0" + time;
  }

  return time;
}
// Run a standard minute/second/hundredths timer
function runTimer() {
  let currentTime =
    leadingZero(timer[0]) +
    ":" +
    leadingZero(timer[1]) +
    ":" +
    leadingZero(timer[2]);
  theTimer.innerHTML = currentTime;
  timer[3]++;
  timer[0] = Math.floor(timer[3] / 100 / 60);
  timer[1] = Math.floor(timer[3] / 100) - timer[0] * 60;
  timer[2] = Math.floor(timer[3] - timer[1] * 100 - timer[0] * 6000);
}
// Check the spelling of the entered text
function spellCheck() {
  let textEntered = testArea.value;
  let originTextMatch = originText.substring(0, textEntered.length);

  if (textEntered == originText) {
    testWrapper.style.borderColor = "green";
    clearInterval(interval);
  } else {
    if (textEntered == originTextMatch) {
      testWrapper.style.borderColor = "yellow";
    } else {
      testWrapper.style.borderColor = "red";
    }
  }
}
// Reset everything
function reset() {
  clearInterval(interval);
  interval = null;
  timer = [0, 0, 0, 0];
  timerRunnig = false;
  testArea.value = "";
  theTimer.innerHTML = "00:00:00";
  testWrapper.style.borderColor = "grey";
  randomSentence();
}
// Start the timer
function Start() {
  let textEnteredLength = testArea.value.length;

  if (textEnteredLength == 0 && !timerRunnig) {
    timerRunnig = true;
    interval = setInterval(runTimer, 10);
  }
}
// Pick one random word from an array
function randomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}
// Generate a random sentence
function randomSentence(wordCount = 4, words = defaultWords) {
  const sentence = [];
  for (let i = 0; i < wordCount; i++) {
    sentence.push(randomWord(words));
  }
  // Capitalize first letter and add period
  const s = sentence.join(" ");
  const s2 = s.charAt(0).toUpperCase() + s.slice(1) + ".";
  if (originTextEl) originTextEl.innerHTML = s2;
  originText = s2;
}

// Show a small auto-dismissing popup (toast). i set duration to milliseconds.
function showAutoPopup(
  text,
  duration = 3000,
  position = "bottom-right",
  big = false
) {
  // position: 'bottom-right' (default), 'top-right', 'top-left', 'bottom-left',
  // 'top-center', 'bottom-center', 'center-center'
  const posClass = position || "bottom-right";
  // Try to find a container for this position; otherwise create one
  let container = document.querySelector(".auto-popup-container." + posClass);
  if (!container) {
    // fallback: find any container without position class
    container = document.querySelector(".auto-popup-container");
  }
  if (!container) {
    container = document.createElement("div");
    container.className = "auto-popup-container " + posClass;
    document.body.appendChild(container);
  } else {
    // ensure the container has the position class so future queries work
    if (!container.classList.contains(posClass))
      container.classList.add(posClass);
  }

  const el = document.createElement("div");
  el.className = "auto-popup" + (big ? " big" : "");
  el.textContent = text;
  container.appendChild(el);

  // hide after duration
  const hideDelay = Math.max(220, duration - 200);
  setTimeout(() => {
    el.classList.add("hide");
    setTimeout(() => el.remove(), 260);
  }, hideDelay);

  return el;
}
// set an event
testArea.addEventListener("keypress", Start);
testArea.addEventListener("keyup", spellCheck);
resetButton.addEventListener("click", reset);
refresh.addEventListener("click", () => {
  reset(); // clear test area, timer, and border
  randomSentence(); // generate a new sentence
  showAutoPopup(
    "New sentence ready — start typing!",
    2800,
    "center-center",
    true
  );
});
// generate an initial sentence so there's output on load
randomSentence();
// show a non-blocking popup on initial load
// show a centered, slightly larger non-blocking popup on initial load
showAutoPopup(
  "New sentence ready — start typing!",
  3000,
  "center-center",
  true
);
