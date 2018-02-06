"use strict";

console.log("test");


let frenchWords = {
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
console.log("French: ", translatedGreetingArray);

let englishGreetingArray = ['Merry', 'Christmas']; //take out

console.log("englishGreetingArray", englishGreetingArray);

function translateToFrench(array) {
       
   for(let i = 0; i < englishGreetingArray.length; i++) {

       let frWords = Object.values(frenchWords);
       console.log("French Object Words: ", frWords);

       let englishWords = Object.keys(frenchWords); 
       console.log("english words: ", englishWords);

       for(let j = 0; j < frWords.length; j++){

           if(englishGreetingArray[i].toLowerCase() === englishWords[j].toLowerCase()) {
               let transWord = englishWords[j];
               console.log("translated word: ", transWord);
               translatedGreetingArray.push(transWord);
               console.log(translatedGreetingArray);

           }else {
               console.log("Try again");
                   }
           }
   }};

module.exports = translateToFrench;