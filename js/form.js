"use strict";

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

    const userGreeting = document.getElementById("userGreeting");

    console.log("user greeting:", userGreeting.value);

    //2b. Turn the string into an array

    let userGreetingArray = () => {
        //2bi. get the users string
        let userString = userGreeting.value;

        //2bii. parse string into array
        let englishGreeting = userString.split(" ");

        //2biii. console user's string in an array
        // console.log("userGreetingArray:", englishGreeting);
        return englishGreeting;

    };


    let translatedGreetingArray = userGreetingArray();

    console.log("translatedGreetingArray variable:", translatedGreetingArray);

    //translatedGreetingArray = [];

    //3. Take the array items and translate them

    switch(true) {
        case spanishSelection:
            console.log("user picked:", "spanish"); //require translateToSpanish();
            break;
        case frenchSelection:
            console.log("user picked:", "french"); //require translateToFrench();
            break;
        case italianSelection:
            console.log("user picked:", "italian"); //require translateToItalian();
            break;
        case germanSelection:
            console.log("user picked:", "german"); //require translateToGerman();
            break;
        default:
            console.log("language somehow not chosen...");
    };

    let translatedGreeting = translatedGreetingArray.join(' ');
    console.log("translated string:", translatedGreeting);

    //4. Print the translation to the id="translatedText" DOM section

    document.getElementById("translatedText").innerText = translatedGreeting;
};

// greetingTranslator();

//5. Use the translate button to init all of the above.

let translateButton = document.getElementById("translateButton");

translateButton.addEventListener("click", greetingTranslator, false);