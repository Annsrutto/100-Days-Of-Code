let fighters = ['🦍', '🦧', '🦮', '🐒', '🐕‍🦺', '🐩', '🐈',
    '🐈‍⬛', '🐅', '🦓', '🫏', '🫎', '🐓', '🦃', '🦖', '🦎', '🦣', '🐘', '🦁', '🐯']

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function() {
    let randomTeamOne = Math.floor(Math.random() * fighters.length)
    let randomTeamTwo = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = fighters[randomTeamOne] + " vs " + fighters[randomTeamTwo]
})
