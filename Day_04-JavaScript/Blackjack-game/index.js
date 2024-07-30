let firstCard = 10;
let secondCard = 1;

let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
console.log(sum);

let message = '';


if (sum <= 20) {
    message = "Do you want to draw another card? 🙂"
} else if (sum === 21) {
    message = "Whohoo! You've got a Blackjack! 🥳"
    hasBlackjack = true;
} else {
    message = "You're out of the game! 😭"
    isAlive = false;
}

console.log(hasBlackjack);
console.log(isAlive);

console.log(message);
