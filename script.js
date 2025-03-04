// Select the message paragraph and buttons

let messageParagraph = document.getElementById("messageParagraph");

let part1Button = document.getElementById("part1");

let part2Button = document.getElementById("part2");

let part3Button = document.getElementById("part3");

let part4Button = document.getElementById("part4");



// Create player objects

let playerOne = {

    name: "Joe",

    score: 54

};



let playerTwo = {

    name: "Jane",

    score: 65

};



// Part 1: Display player information

part1Button.addEventListener("click", function() {

    messageParagraph.textContent = `Player One: ${playerOne.name}, Score: ${playerOne.score}`;

});



// Part 2: Modify player score

part2Button.addEventListener("click", function() {

    playerOne.score += 10; // Increase score by 10

    messageParagraph.textContent = `${playerOne.name}'s new score: ${playerOne.score}`;

});



// Part 3: Add a new property

part3Button.addEventListener("click", function() {

    playerOne.level = "Intermediate"; // Adding a new property

    messageParagraph.textContent = `${playerOne.name} is now at level: ${playerOne.level}`;

});



// Part 4: Create a new player object dynamically

part4Button.addEventListener("click", function() {

    let playerThree = {

        name: "Sam",

        score: 72

    };

    messageParagraph.textContent = `New Player: ${playerThree.name}, Score: ${playerThree.score}`;

});
