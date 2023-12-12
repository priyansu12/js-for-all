// for of

const testScores = [92, 87, 54, 63, 75, 59];

for (const scores of testScores) {
    console.log(scores);
}

const greetings = "Hello quick"
for (const greeting of greetings) {
    console.log(greeting);
}

// Maps

const map = new Map();
map.set('IN', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')
map.set('AUS', 'Australia')

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':- ', value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':- ', value);
    
// }