"use strict";

let german = require('./translateToGerman');
let italian = require('./translateToItalian');
let french = require('./translateToFrench');
let spanish = require('./translateToSpanish');

let Languages = {
    german,
    italian,
    french,
    spanish
};



let greetingTranslator = () => {
    //1. find which language is selected

    const spanishSelection = document.getElementById("spanishTranslation").checked; //returns a boolean: true or false
    const frenchSelection = document.getElementById("frenchTranslation").checked;
    const italianSelection = document.getElementById("italianTranslation").checked;
    const germanSelection = document.getElementById("germanTranslation").checked;

    console.log("spanish", spanishSelection);
    console.log("french", frenchSelection);
    console.log("italian", italianSelection);
    console.log("german", germanSelection);

    //2. Need js to grab the value of the text area and store in a string

    const userGreeting = document.getElementById("userGreeting").value;

    console.log("user greeting:", userGreeting);

    //2b. Turn the string into an array

    let englishGreetingArray = userGreeting.split(" "); // this var will be called into the appropriate toTranslateLanguage.js file and translated

    // let translatedGreetingArray = englishGreetingArray; //this is the variable the translation.js will output

    // console.log("translatedGreetingArray variable:", translatedGreetingArray);

    // translatedGreetingArray = [];

    //3. Take the array items and translate them

    switch(true) {
        case spanishSelection:
            console.log("user picked:", "spanish"); 
            spanish(englishGreetingArray);
            break;
        case frenchSelection:
            console.log("user picked:", "french"); 
            french(englishGreetingArray);
            break;
        case italianSelection:
            console.log("user picked:", "italian"); 
            italian(englishGreetingArray);
            break;
        case germanSelection:
            console.log("user picked:", "german");
            german(englishGreetingArray);
            break;
        default:
            console.log("language somehow not chosen...");
    }

    let translatedGreetingArray = [];
    let translatedGreeting = translatedGreetingArray.join(' ');
    console.log("translated string:", translatedGreeting);

    //4. Print the translation to the id="translatedText" DOM section

    document.getElementById("translatedText").innerText = translatedGreeting;
};

// greetingTranslator();

//5. Use the translate button to init all of the above.

let translateButton = document.getElementById("translateButton");

translateButton.addEventListener("click", greetingTranslator, false);


module.exports = Languages;