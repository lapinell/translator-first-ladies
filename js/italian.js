"use strict";

console.log("test");


let italianWords = {
        "merry": "Buon",
        "christmas": "Natale",
        "and": "e",
        "happy": "Felice",
        "new": "Anno",
        "year": "Nuovo",
        "valentine": "San Valentino",
        "holiday": "Vacanze",
        "holidays": "Vacanze",
        "halloween": "Halloween",
        "thanksgiving": "Ringraziamento",
        "birthday": "Compleanno", 
        "prosperous": "Prospero",
        "xmas" : "Natale",
        "x-mas" : "Natale"
};

let translatedGreetingArray = [];
let englishGreetingArray = ['Merry', 'Christmas', 'and', 'happy', 'new', 'year']; //take out

console.log("englishGreetingArray", italianWords);

function translateToItalian() {
        // console.log("Italian is checked as the translating language");

    for(let i = 0; i < englishGreetingArray.length; i++) {

        let itWords = Object.values(italianWords);
        console.log("Italian Object Words: ", itWords);

        let englishWords = Object.keys(italianWords); 
        console.log("english words: ", englishWords);

        for(let j = 0; j < itWords.length; j++){
            if(italianWords[i].toLowerCase() === englishWords[j].toLowerCase()) {
                let transWord = itWords[i];
                console.log("translated word: ", transWord);
                translatedGreetingArray.push(transWord);
                console.log(translatedGreetingArray);
            }
        }
    }
    return translateToItalian;
}


module.exports = translateToItalian;