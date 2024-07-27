let homeScore = 0;
let guestScore = 0;

const homeScoreEl = document.getElementById("homeScore");
const guestScoreEl = document.getElementById("guestScore");

console.log(guestScoreEl);

function updateScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        homeScoreEl.textContent = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        guestScoreEl.textContent = guestScore; 
    }
}

// function addHome1() {
//     count1 += 1
//     countHome.textContent = count1
//     console.log(count1);
// }

// function addHome2() {
//     count1 += 2
//     countHome.textContent = count1
//     console.log(count1);
// }

// function addHome3() {
//     count1 += 3
//     countHome.textContent = count1 
//     console.log(count1);
// }

// function addGuest1() {
//     count2 += 1
//     countGuest.textContent = count2
//     console.log(count2);
// }

// function addGuest2() {
//     count2 += 2
//     countGuest.textContent = count2
//     console.log(count2);
// }

// function addGuest3() {
//     count2 += 3
//     countGuest.textContent = count2
//     console.log(count2);
// }