// VÁLTOZOK TIPUSAI
console.log(typeof(2)); // number
console.log(typeof(true)); // boolean
console.log(typeof('Aladár')); // string
console.log(typeof({name:'Béla', age: 42})); // object
console.log(typeof(function f(a, b) {return a + b})); // function
console.log(typeof(nonexisting)); // undefined

// NUMBERS (számok)
let a = 0.1 + 0.2
console.log(0.1 + 0.2)
console.log((0.1 + 0.2).toFixed(2)) // kerekites
console.log(typeof(a.toFixed(2))) // string lesz a tipusa

// STRING (szövegek)
let FirtsName = 'John'
let LastName = 'Doe'
console.log('hello' + FirstName + ' ' + LastName)
console.log(`Hello ${FirtsName} ${LastName}`)

let kocka = 'kocka'
let has = 'has'
let doboz = kocka + has
console.log(doboz)

//BOOLEAN
console.log('boolean')
console.log(typeof true)
console.log(Boolean(0)) // false
console.log(Boolean(1)) // true
console.log(Boolean("")) // false
console.log(Boolean("a")) // true

// object
let person = {
    name: "Eminem",
    age: 39,
    isStudent: false
}

console.log(person)
console.log(typeof person)
console.log(person.name)
console.log(person.age)
console.log(person.isStudent)
console.log(typeof person)

let xy;
console.log(xy); // undefined
console.log(typeof xy); // undefined


