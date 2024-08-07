// Functions and objects
let person = {
    name: 'Anns',
    age: 26,
    country: 'Kenya'
}
console.log(person.country)

function logData() {
    console.log(person.name + ' is ' + person.age + ' years old and lives in ' + person.country)
}
logData()

//if else statements
let age = 26

if (age < 6) {
    console.log('Free');
} else if (age < 18) {
    console.log('Child Discount');
} else if (age < 27) {
    console.log('Student Discount');
} else if ( age < 67) {
    console.log('Full price');
} else if (age > 66) {
    console.log('Senior Citizen Discount');
}

// For loop
let largestCountries = ['China', 'India', 'USA', 'Indonesia', 'Pakistan']
console.log('The 5 largest countries in the world:')
for (let i = 0; i < largestCountries.length; i++) {
    console.log('- ' + largestCountries[i])
}

// Push(), pop(), shift(), unshift()
let largeCountries = ['Tuvalu', 'India', 'USA', 'Indonesia', 'Monaco']
console.log('The 5 largest countries in the world:', largeCountries)
largeCountries.pop()
largeCountries.push('Pakistan')
largeCountries.shift()
largeCountries.unshift('China')
console.log(largeCountries)
