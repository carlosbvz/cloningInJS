'use strict'
let clone = require('clone');

let obj = {
	name: 'Carlos',
	tel:  89936228
}
// Doing this, both objets will share the same references to its values
// hence, modifying one will modify the other one:
let copyObj = obj

copyObj.name = 'Charlie'

console.log(obj)
console.log(copyObj)

// Copy object using JSON.parse
console.log('==============')
let jsonObj = JSON.parse(JSON.stringify(obj))
jsonObj.name = "Json"
console.log(jsonObj)

// With nested objets:
let deepObj = {
	members: {
		carlos: {
			tel: 89898989,
			address: 'Heredia, Costa Rica'
		},
		charlie: {
			tel: 12233445,
			address: 'San Jose, Costa Rica'
		}
	}
}
let copyDeepObj = JSON.parse(JSON.stringify(deepObj))
copyDeepObj.members.carlos.tel = 11111111
console.log(deepObj)
console.log(copyDeepObj)

// With an array of nested objets:
let arrayNestedObj = [
	{
		members: {
			carlos: {
				tel: 89898989,
				address: 'Heredia, Costa Rica'
			},
			charlie: {
				tel: 12233445,
				address: 'San Jose, Costa Rica'
			}
		}
	},
	{
		members: {
			julio: {
				tel: 11111111,
				address: 'Cartago, Costa Rica'
			},
			Jules: {
				tel: 22222222,
				address: 'Limon, Costa Rica'
			}
		}
	}
]
let copyArrayNestedObj = JSON.parse(JSON.stringify(arrayNestedObj))
copyArrayNestedObj[0].members.carlos.tel = 34455667
console.log('=================')
console.log(arrayNestedObj[0].members.carlos.tel)
console.log(copyArrayNestedObj[0].members.carlos.tel)


// Issues with Date() and JSON.parse
let today = new Date()
let objectWithDate = {
	name: 'Carlos',
	date: today
}
let copyObjectWithDate = JSON.parse(JSON.stringify(objectWithDate))
let cloneObjectWithDate = clone(objectWithDate)
console.log('=================')
console.log(typeof(objectWithDate.date))
console.log(typeof(copyObjectWithDate.date))
console.log(typeof(cloneObjectWithDate.date))
console.log(cloneObjectWithDate.date)
console.log(cloneObjectWithDate.date.getTime())
