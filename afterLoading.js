const fs = require('fs');

let obj = fs.readFileSync('obj.txt', 'utf8', function(err, data) {
    if(err) {
        throw err;
    } else {
        return data;
    }
})

obj = JSON.parse(obj);

console.log(obj);