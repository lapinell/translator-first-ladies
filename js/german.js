"use strict";


    let toGerman = {
    "merry":" fröhliche", 
    "christmas":" weihnachten", 
    "and":" und", 
    "happy":" frohes", 
    "new":" neues", 
    "year":" jahr",
    "valentine": " valentinstag",
    "holiday": " urlaub",
    "holidays": " ferien",
    "halloween": " halloween",
    "thanksgiving": " thanksgiving",
    "birthday": " geburtstag",
    "prosperous": " wohlhabend",
    "xmas": " weihnachten",
    "x-mas": " weihnachten"
    };

console.log("Translate to German: ", toGerman);



/* 
Working code */
var englishGreetingArray = ["merry", "christmas"]
let translatedGreetingArray = [];

console.log("Translated Greeting Array ", translatedGreetingArray);

function translatedToGerman() {

    for (var i = 0; i < englishGreetingArray.length; i++) {

        let englishGreetings = Object.keys(toGerman);
        console.log("English Greeting ", englishGreetings);
        let germanGreetings = Object.values(toGerman);

        console.log("German Greeting ", germanGreetings);

        for(let j = 0; j < englishGreetings.length; j++) {
            if (englishGreetingArray[i].toLowerCase() === englishGreetings[j].toLowerCase()) {
                let translatedWord = germanGreetings[j];

                console.log("Translated Word.", translatedWord);

                translatedGreetingArray.push(translatedWord);
                console.log("Translated Greeting: ", translatedGreetingArray);
            } else {

                console.log("Ich verstehe nicht.");
            }
        }
    }
    return translatedToGerman;
}

module.exports = translatedToGerman;

/*End of working code */


/*

var fromEnglish = document.getElementById("userGreeting").value;
console.log("words in the input button", fromEnglish);

let storeEnglishArray = fromEnglish.split(" ");
console.log("English Greeting in Array: ", storeEnglishArray);


//Is the first array word = merry then output frohliche

//let englishGreetingArray = ["happy", "holidays"];

var translatedWord = "";

for (var englishWords in storeEnglishArray) {

    for (var propertyGerman in toGerman) {
        translatedWord = translatedWord + toGerman[property];

        // do a conditional statement with if
    }
     console.log("translated word: ", translatedText);

}






//  if (storeEnglishArray[i] === toGerman[i]) {
//      var translatedGerman = Object.values(toGerman);
//      console.log("translated word: ", translatedGerman);
    
//  }

// toGerman[storeEnglishArray[0]] = "fröhliche";
// console.log("translated word: ", toGerman[storeEnglishArray[0]];



/*function arrayLoop()  {
for (let i = 0; i < toGerman.length; i++) {
    console.log("To German [i]", toGerman[i]);
    if (storeEnglishArray[i] === toGerman[i]); {
        var matchedWords = storeEnglishArray[i];
        console.log("Match English Input to Object words: ", matchedWords);

    }
}
};

console.log("Array Loop: ", arrayLoop()); 
*//*

function toTranslate(inEnglish) {
return toTranslate;
}*/


/* Next split the string
var fromEnglishArray = fromEnglish.split((/[, ]+/));

Next loop through the string 
for(var i = 0; i < length; i++) {
    if(fromEnglishArray[i] === "merry") {
        var storeMerry = fromEnglsihArray[i];
        storeMerry = "fröhliche";
    } else if
}
fromEnglish = document.getElementById("translatedText").innerHTML;

Next 

*/

/*var translateTo = {
    log: ['a', 'b', 'c'],
    get latest() {
      if (this.log.length == 0) {
        return undefined;
      }
      return this.log[this.log.length - 1];
    }
  }


console.log(translateTo.latest);

1. Call userGreeting and store in an Array. Console.log
console.log(englishGreetingArray); // ["Merry", "X-Mas"]

2. Match array to the Obj Keys
if (englishGreetingArray [i] === Object.keys(German words)) {}

3. Output the value of the matching key

4. Store value in a variable and push to translator Array.
} else {
    "Ich verstehe nicht"
}
} */

//