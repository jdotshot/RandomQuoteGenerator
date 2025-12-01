let firstSet = [
    "My name is Jimmy, and I like",
    "My name is Sarah, and I love",
    "My name is Tom, and I enjoy",
    "My name is Anna, and I adore",
    "My name is Mike, and I cherish"
]

let secondSet = [
    "to play football.",
    "to read books.",
    "to travel the world.",
    "to cook delicious meals.",
    "to watch movies."
]

let thirdSet = [
    "It's my favorite hobby!",
    "I do it every weekend.",
    "It brings me joy.",
    "I can't imagine life without it.",
    "It's a passion of mine."
]

function createRandomQuote() {
    let first = firstSet[Math.floor(Math.random() * firstSet.length)];
    let second = secondSet[Math.floor(Math.random() * secondSet.length)];
    let third = thirdSet[Math.floor(Math.random() * thirdSet.length)];

    let fullQuote = first + ' ' + second + ' ' + third
    document.getElementById("randomQuote").innerText = fullQuote;
    console.log(fullQuote)
}