// Interesting fact that we cannot modify part of the String


let myString = 'Carlos B.'
console.log(myString)

myString[0] = 'c'
console.log(myString)

// To produce de desire change we need to do:
myString = 'c'+myString.substr(1);
console.log(myString)