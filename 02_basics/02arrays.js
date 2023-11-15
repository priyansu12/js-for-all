const marvelHeroes = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvelHeroes.push(dc)
// console.log(marvelHeroes[3][1])

// const allHeros = marvelHeroes.concat(dc)
// console.log(allHeros)

// const all_new_heroes = [...marvelHeroes, ...dc]
// console.log(all_new_heroes)

// const anotherArray = [1,2,3, [1,2,4], 3, [2,2,3]]
// const another_new_array = anotherArray.flat(Infinity)
// console.log(another_new_array)

// console.log(Array.isArray("Priyansu"))
// console.log(Array.from("Priyansu"))

const newArray1 = Array.from({name: "Priyansu"})
console.log(newArray1)

let score1 = 12;
let score2 = 13;
let score3 = 14;

console.log(Array.of(score1, score2, score3))