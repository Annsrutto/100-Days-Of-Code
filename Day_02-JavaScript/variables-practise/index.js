let firstName = "Anns"
let lastName = "Rutto"

let fullName = firstName + " " + lastName

console.log(fullName);

let name = "Linda"
let greeting = "Hi there"

function greetingName() {
    console.log(greeting + ", " + name + "!");
}

greetingName();

let myPoints = 3

function add3Points() {
    myPoints += 3
    console.log(myPoints);
}

function remove1Point() {
    myPoints -= 1
    console.log(myPoints);
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
