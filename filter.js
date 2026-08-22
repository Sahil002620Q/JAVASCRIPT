// let numbers = [1, 2, 3, 4, 5, 6];

// let even = numbers.filter((x) => x%2 === 0 )

// console.log(even)

let numbers = [10, 15, 22, 31, 40, 53, 60];

let greaterThan30 = numbers.filter((x) => x > 30 )

console.log(greaterThan30)

greaterThan30.forEach(x => {
    console.log(x)
});