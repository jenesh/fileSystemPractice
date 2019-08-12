const fs = require('fs');

let arr = ['hello', 'my', 'name', 'is', 'John', 'Cena'];

let randomNumber = Math.floor(Math.random() * 5);
console.log(randomNumber);

let randomWord = arr[]

class Hangman {
    constructor(word) {
        this.word = word;
    }
}

let obj = new Hangman()

fs.writeFile('obj.txt', JSON.stringify(obj), (err) => {
    if (err) throw error;
    console.log(`copied ${obj}`);
})

// const readMe = readFileSync('readMe.txt', 'utf8');
// fs.writeFileSync('writeMe.txt', readMe);

fs.readFile('readMe.txt' , 'utf8', function(err, data) {
    console.log(data);
    fs.writeFile('writeMe.txt', data, (err) => {
        if(err) {
            throw err;
        } else {
            console.log('Saved!');
        }
    });
});

// fs.unlink('writeMe.txt', (err) => {
//     if (err) throw err;
//     console.log('writeMe.txt was deleted.');
// });

// console.log('I go first');

// fs.mkdir('coolFolder', (err) => {
//     if (err) throw err;
//     console.log('New Directory created');
// });

// fs.rmdir('coolFolder', (err) => {
//     if (err) throw err;
// })





