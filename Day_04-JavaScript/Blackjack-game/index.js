let firstCard = 10;
let secondCard = 11;

let sum = firstCard + secondCard + 6;
console.log(sum);

if (sum < 21) {
    console.log("Do you want to draw another card? 🙂")
} else if (sum === 21) {
    console.log("Whohoo! You've got a Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}
