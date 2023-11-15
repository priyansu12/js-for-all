const name = "Priyansu";
const repoCount = 12;
// console.log(name + repoCount);
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`)

const gameName = new String('Priyansu')
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('y'))

console.log(gameName.split('')) //puts in an array of strings

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(1, 4)
console.log(anotherString)

const newString1 = "   treat  " //excess spaces
console.log(newString1.trim());
console.log(newString1.trimLeft());
console.log(newString1.trimRight());
console.log(newString1)

const url = "https://www.google.com/priyansu@122";
console.log(url.startsWith('https'))
console.log(url.replace('@1', '12'))

console.log(url.includes('priyansu'))