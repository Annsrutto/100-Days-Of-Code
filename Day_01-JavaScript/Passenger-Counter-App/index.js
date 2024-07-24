let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    console.log(count);
}

function save() {
    countEntry = count + " - "
    saveEl.textContent += countEntry
    countEl.textContent = 0
    count = 0
}


let welcomeEl = document.getElementById("welcome-el")
let name = ""
let greeting = "Welcome Back!"

welcomeEl.innerText = greeting + name
welcomeEl.innerText += "👋"
