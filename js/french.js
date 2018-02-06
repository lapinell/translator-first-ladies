"use strict";

console.log("test");


let italianWords = {
        "merry": "joyeux",
        "christmas": "Noël",
        "and": "et",
        "happy": "bonne",
        "new": "année",
        "year": "nuovo",
        "valentine": "Valentin",
        "holiday": "vacances",
        "holidays": "vacances",
        "halloween": "halloween",
        "thanksgiving": "action de grâces",
        "birthday": "anniversaire", 
        "prosperous": "prospère",
        "xmas" : "Noël",
        "x-mas" : "Noël"
};

let translatedGreetingArray = [];


function translateToFrench(array) {

    let translatedGreetingArray = frenchWords.values();
    let holidayObjectArray = frenchWords.keys(); 
        
    for(let i = 0; i > userGreeting.length; i++) {
        if(userGreeting[i] === holidayObjectArray[i]) {
            let transWord = translatedGreetingArray[i];
        } else {
            console.log("Invalid holiday greeting. Please try a new greeting.");
        }
        translatedGreetingArray.push(transWord);

    }

console.log("French", translatedGreetingArray);
return translatedGreetingArray;
    };
