let userName = "Viorica";
userName === "Viorica" ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
let userQuestion = "Should I become a vegetarian?";
console.log(`Please, tell me: '${userQuestion}'`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
switch (randomNumber){
    case 0:
    eightBall = "Sure";
    break;
    case 1:
    eightBall = "Cannot predict now";
    break;
    case 2:
    eightBall = "Signs point to yes";
    break;
    case 3:
    eightBall = "My sources say no";
    break;
    case 4:
    eightBall = "Better not tell you now"
    break;
    case 5:
    eightBall = "Yes - definitely";
    break;
    case 6:
    eightBall = "Very doubtful";
    break;
    case 7:
    eightBall = "It is your choice";
    break;
}
console.log(`Here is your response: ${eightBall}`);