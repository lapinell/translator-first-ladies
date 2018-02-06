"use strict";

console.log("test");


let italianWords = {
        "merry": "buon",
        "christmas": "natale",
        "and": "e",
        "happy": "felice",
        "new": "anno",
        "year": "nuovo",
        "valentine": "san valentino",
        "holiday": "vacanze",
        "holidays": "vacanze",
        "halloween": "halloween",
        "thanksgiving": "ringraziamento",
        "birthday": "compleanno", 
        "prosperous": "prospero",
        "xmas" : "natale",
        "x-mas" : "natale"
};

let translatedGreetingArray = [];

let englishGreetingArray = ['Merry', 'Christmas']; //take out


function translateToItalian(array) {

    let translatedGreetingArray = italianWords.values();
    let holidayObjectArray = italianWords.keys(); 
        
    for(let i = 0; i > userGreeting.length; i++) {
        if(userGreeting[i] === holidayObjectArray[i]) {
            let transWord = translatedGreetingArray[i];
        } else {
            console.log("Invalid holiday greeting. Please try a new greeting.");
        }
        translatedGreetingArray.push(transWord);

    }

console.log("italian", translatedGreetingArray);
return translatedGreetingArray;
    };







//     let dictionary = {
//         "Merry": {it: "Buon",
//                 fr: "joyeux",},
//         "Christmas": {it: "Natale",
//                     fr: "Noel"}
//     }
// let translator = $('body").translate({lang: "en", t: dictionary})');
// console.log(translator.long("merry"));