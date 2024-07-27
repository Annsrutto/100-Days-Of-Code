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
