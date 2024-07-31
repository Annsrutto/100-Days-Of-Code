// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
// let cards = [firstCard, secondCard];
// let sum = firstCard + secondCard;
// let hasBlackjack = false;
// let isAlive = true;

// let message = '';
// let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// //let sumEl = document.querySelector('#sum-el');
// let cardsEl = document.getElementById("cards-el");

// function getRandomCard() {
//     return 5;
// }

// function startGame() {
//     renderGame();
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: "
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//         console.log(cards)
//     }
//     sumEl.textContent = "Sum: " + sum;

//     if (sum <= 20) {
//         message = "Do you want to draw another card?"
//     } else if (sum === 21) {
//         message = "You've got a Blackjack!"
//         hasBlackjack = true;
//     } else {
//         message = "You're out of the game!"
//         isAlive = false;
//     }
//     messageEl.textContent = message;
// }

// function newCard() {
//     console.log("Drawing a new card from the deck!");
//     let card = getRandomCard(i);
//     sum += card;
//     cards.push(card);
//     console.log(cards)
//     renderGame();
// }

// // console.log(hasBlackjack);
// // console.log(isAlive);

// // console.log(message);




// //Arrays in JavaScript

// // let aboutMe = ["Anns", 26, true]
// // let newMessage = "I am a software Engineer"

// //Push() and Pop() function 
// // aboutMe.push(newMessage)
// // console.log(aboutMe)
// // aboutMe.pop();
// // console.log(aboutMe)
// // aboutMe.pop();
// // console.log(aboutMe)

// // For Loops
// // let cards = [9, 1, 8]
// // for (let i = 0; i < cards.length; i++) {
// //     console.log(cards[i])
// // }

// // let sentence = ["Hello", "my", "name", "is", "per"]
// // let greetingEl = document.getElementById("greeting-el")

// // for (let i = 0; i < sentence.length; i++) {
// //     greetingEl.textContent += sentence[i] + " "
// //     //console.log(sentence[i])
// // }

// Math.random
let randomNumber = Math.floor(Math.random() * 6) + 1
console.log(randomNumber);
// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber);
function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    console.log(randomNumber);
}
