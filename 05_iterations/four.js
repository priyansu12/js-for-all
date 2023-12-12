const myObj = {
    js: 'javascript',
    py: 'python',
    rb: 'ruby',
    java: 'java'
}

// for in more often used for destructuring the objects
for (const key in myObj) {
    console.log(key, ':- ', myObj[key]);
}

const programming = ["js", "py", "rb", "java"]

for (const key in programming) {
    console.log(key, ':- ', programming[key]);
}

const map = new Map();
map.set('IN', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')
map.set('AUS', 'Australia')

for (const key in map) {
    console.log(key, ':- ', map[key]);
}