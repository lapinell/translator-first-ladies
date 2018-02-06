"use strict";

let spanishWordArray = {
    "Merry":"Feliz",
    "Happy":"Feliz",
    "Christmas":"Navidad",
    "And":"y",
    "Year":"Ano",
    "Valentine":"de San Valentino",
    "holiday": "fiesta",
    "holidays": "fiestas",
    "halloween": "Vispera de Todos los Santos",
    "thanksgiving": "Accion de Gracias",
    "birthday": "Cumpleanos",
    "prosperous": "Prospero",
    "xmas": "Navidad",
    "x-mas": "Navidad"
};

// 1. call the englGreetingArray to get the array of user input
function translateToSpanish() = {
    let englishGreetingArray = ["Merry", "Christmas"];
    let translatedGreetingArray = [];  

    //2. Loop the following for the length of the user input array until all matching words are foung
    for (let i = 0; i < englishGreetingArray.length; i++) {
        // 2a. match array item to the words-object key

        let englWords = Object.keys(spanishWordArray);
        let spanishWords = Object.values(spanishWordArray);

        // 2b. output the value of the matching key
        for(let j = 0; j < englWords.length; j++){
        
            if (englishGreetingArray[i].toLowerCase() === englWords[j].toLowerCase()){
                let translWord = spanishWords[j];
                // 2c. store the value in a variable 
                console.log(translWord);
                // 2d. push that variable into the empty transl array
                translatedGreetingArray.push(translWord);
                console.log(translatedGreetingArray);

            } else {
                //2a2. put the 
                console.log("This ain't workin'");
            }
        }
    }
}

// 3. export the function to form.js
module.exports = spanish;
