// cloning primitive types & modifying them

// Strings
'use strict'

let a = 'a'
let b = a 

a = 'aa'

console.log(a)
console.log(b)

b = 'bb'

console.log('=============')
console.log(a)
console.log(b)



// booleans

let f = true 
let t = f

f = false

console.log(t)
console.log(f)