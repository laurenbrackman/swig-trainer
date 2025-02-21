import { Drink } from "./drink.js";
import {getRandomInt} from "./utils.js";

const drinks = [
    new Drink("Raspberry Dream", "Dr. Pepper", "", [], ['Coconut Cream'], ['Raspberry'], [], [], false),
new Drink("Texas Tab", "Dr. Pepper", "", ['Vanilla'], ['Coconut Cream'], [], [], [], false),
new Drink("DDD", "Diet Dr. Pepper", "", ['Coconut'], [], [], [], [], false),
new Drink("Spring Fling", "Dr. Pepper", "", ['Vanilla'], ['Coconut Cream'], ['Strawberry'], [], [], false),
new Drink("Dirty Dr. Pepper", "Dr. Pepper", "", ['Coconut'], [], [], [], [], false),
new Drink("Dirty S.O.P", "Dr. Pepper", "", ['Coconut', 'Peach'], [], [], [], [], false),
new Drink("Life's a Peach", "Dr. Pepper", "", ['Vanilla', 'Peach'], [, 'Half and Half'], [], [], [], false),
new Drink("Naughty & Nice", "Dr. Pepper", "", ['English Toffee'], ['Half and Half'], [], [], [], false),
new Drink("Princess Peach", "Dr. Pepper", "", ['Peach'], ['Coconut Cream'], [], [], [], false),
new Drink("Save Me Jade", "Diet Dr. Pepper", "", ['SF Coconut', 'SF Vanilla'], [], [], [], [], false),
new Drink("The Heartbreaker", "Dr. Pepper", "", ['Blackberry', 'Coconut'], ['Half and Half'], [], [], [], false),
new Drink("The Ring King", "Dr. Pepper", "", ['Cupcake'], ['Vanilla Cream'], ['Strawberry'], [], [], false),
new Drink("Malibu", "Dr. Pepper", "", ['Coconut', 'Vanilla'], [], [], [], [], false),
new Drink("Big Al", "Diet Coke", "", ['Coconut'], [], [], ['Fresh Lime'], [], false),
new Drink("The Founder", "Diet Coke", "", ['SF Coconut'], ['Coconut Cream'], [], ['Fresh Lime'], [], false),
new Drink("This Bliss", "Diet Coke", "", ['Cranberry'], [], [], ['Fresh Lime'], [], false),
new Drink("Just Peachy", "Coke Zero", "", ['Pineapple'], ['Coconut Cream'], ['Peach'], ['Fresh Lime'], [], false),
new Drink("Waikiki", "Coke", "", ['Pineapple'], ['Coconut Cream'], [], [], [], false),
new Drink("Cherry Bomb", "Pepsi", "", ['Cherry', 'Coconut'], ['Vanilla Cream'], [], [], [], false),
new Drink("Beach Babe", "Mountain Dew", "", ['Peach.', 'Raspberry'], ['Vanilla Cream'], [], [], [], false),
new Drink("Bloody Wild", "Mountain Dew", "", [], [], ['Mango', 'Strawberry'], [], [], false),
new Drink("Busta Limes", "Mountain Dew", "", [], [], ['Mango', 'Strawberry'], ['Fresh Lime'], [], false),
new Drink("Dew Gooder", "Mountain Dew", "", ['Pineapple'], ['Coconut Cream'], ['Raspberry'], ['Fresh Lime'], [], false),
new Drink("Endless Summer", "Mountain Dew", "", ['Pomegranate', 'Grapefruit'], [], [], ['Fresh Lime'], [], false),
new Drink("Guava Have It", "Mountain Dew", "", ['Guava', 'Strawberry'], ['Coconut Cream'], [], [], [], false),
new Drink("Jolly Elf", "Mountain Dew", "", ['Passion Fruit'], [], ['Strawberry'], ['Fresh Orange'], [], false),
new Drink("The Rocket", "Mountain Dew", "", ['Raspberry', 'Coconut', 'Blackberry'], ['Vanilla Cream'], [], [], [], false),
new Drink("Watermelon Sugar", "Watermelon", "", ['Mango'], ['Coconut Cream'], [], [], ['Passion Fruit Pearls'], false),
new Drink("Candy Girl", "Mountain Dew", "", ['Coconut'], [], [], ['Fresh Lime'], ['Frozen Strawberries'], false),
new Drink("Hula Girl", "Sprite", "Lemonade", ['Mango', 'Pineapple', 'Strawberry'], ['Coconut Cream'], [], [], [], false),
new Drink("Loop-T-Loop", "Watermelon", "", ['Peach', 'Strawberry'], [], [], [], [], false),
new Drink("Poppin' Pineapple", "Watermelon", "", ['Pineapple'], [], [], [], ['Strawberry Pearls'], false),
new Drink("Riptide", "Sprite", "", ['Cranberry'], [], ['Raspberry'], ['Fresh Lime'], [], false),
new Drink("Shark Attack", "Sprite", "Lemonade", ['Blue Raspberry'], [], [], [], ['Gummy Shark'], false),
new Drink("Unlucky Ducky", "Sprite", "Lemonade", ['Strawberry'], [], [], [], ['Gummy Shark'], false),
new Drink("Beach Bum", "Lemonade", "", ['Guava', 'Grapefruit'], [], [], ['Fresh Orange'], [], false),
new Drink("The Tropic", "Lemonade", "", ['Mango', 'Passion Fruit'], ['Vanilla Cream'], [], [], [], false),
new Drink("Snowball", "Sprite", "", ['Coconut'], ['Vanilla Cream'], [], [], [], false),
new Drink("All Star", "Reviver", "Lemonade", ['Strawberry', 'Guava'], ['Coconut Cream'], [], [], [], true),
new Drink("Cloud 9", "Reviver", "Mountain Dew", ['Blue Raspberry', 'Coconut', 'Pineapple'], ['Half and Half'], [], [], [], true),
new Drink("Daisy Duke", "Reviver", "Mountain Dew", ['Pineapple'], ['Coconut Cream'], ['Strawberry'], [], [], true),
new Drink("Flirty Flamingo", "Reviver", "Sprite", ['Grapefruit', 'Pineapple'], ['Coconut Cream'], ['Mango'], [], [], true),
new Drink("Peaches N Cream", "Reviver", "Sprite", [], ['Vanilla Cream'], ['Peach'], [], [], true),
new Drink("Polar Punch", "Reviver", "Ginger Ale", ['Raspberry', 'Blackberry', 'Strawberry'], ['Vanilla Cream'], [], [], [], true),
new Drink("Sucker Punch", "Reviver", "Lemonade", ['Grapefruit', 'Mango'], [], [], [], [], true),
new Drink("Rubber Ducky", "Reviver", "Lemonade", ['Peach', 'Pineapple'], ['Coconut Cream'], [], [], [], true),
new Drink("Drama Queen", "SF Reviver", "Lemonade", ['SF Strawberry', 'SF Peach', 'SF Coconut'], [], [], [], [], false),
new Drink("Mountain Man", "Reviver", "Mountain Dew", ['Blackberry', 'Coconut'], ['Half and Half'], [], ['Fresh Lime'], [], false),
new Drink("P.O.G.", "Reviver", "", ['Passion Fruit', 'Guava'], [], [], ['Fresh Orange'], [], false),
new Drink("Ride Or Die", "Reviver", "", ['Peach', 'Pineapple'], ['Coconut Cream'], [], [], [], false),
new Drink("Super Trooper", "Reviver", "Lemonade", ['Mango'], ['Coconut Cream'], ['Strawberry'], [], [], false),
new Drink("Surf's Up", "Reviver", "Lemonade", ['Peach', 'Mango', 'Raspberry'], [], [], ['Fresh Orange'], [], false),
new Drink("Weekender", "Reviver", "Sprite", ['Strawberry', 'Coconut'], ['Coconut Cream'], [], [], [], false),
new Drink("Berry Nice", "Sparkling Water", "", ['SF Strawberry'], [], [], ['Fresh Lime'], [], false),
new Drink("Mistletoe Madness", "Sparkling Water", "", ['Cranberry', 'SF Vanilla'], [], ['Strawberry'], ['Fresh Lemon'], [], false),
new Drink("Berry Swigmas", "Sparkling Water", "", ['Cranberry', 'SF Vanilla'], [], [], ['Fresh Orange'], [], false),
new Drink("Fruit Water", "Water", "", ['SF Vanilla', 'SF Coconut'], [], [], [], ['Frozen Mangos', 'Frozen Strawberries'], false),
new Drink("Mango Breeze", "Water", "", ['SF Vanilla', 'SF Coconut'], ['Coconut Cream'], ['Mango'], [], ['Frozen Mangos'], false),
new Drink("Strawberry Breeze", "Water", "", ['SF Vanilla', 'SF Coconut'], ['Coconut Cream'], ['Strawberry'], [], ['Frozen Strawberries'], false),
new Drink("Pretty in Pink", "Sparkling Water", "", ['Guava', 'Grapefruit'], [], [], ['Fresh Orange'], [], false),
new Drink("Sandy Cheeks", "Sparkling Water", "", ['SF Peach'], [], [], ['Fresh Lemon'], [], false),
new Drink("Summer Splash", "Sparkling Water", "", ['SF Pineapple'], [], ['Strawberry'], ['Fresh Lemon'], [], false),
new Drink("Tiki Tiki", "Water", "", ['SF Coconut'], [], [], ['Fresh Orange'], [], false),
new Drink("The Fighter", "Water", "", ['SF Peach', 'SF Vanilla', 'SF Pineapple'], [], ['Raspberry'], ['Fresh Lime'], [], false),
new Drink("Unbreakable", "Water", "", ['Grapefruit'], [], ['Mango'], ['Fresh Lemon'], [], false),
new Drink("Dream Cocoa", "Cocoa", "", ['Raspberry'], ['Coconut Cream'], [], [], [], false),
new Drink("The Nutcracker", "Cocoa", "", ['Hazelnut'], ['Vanilla Cream'], [], [], [], false),
new Drink("Fancy Cocoa", "Cocoa", "Water", ['Vanilla'], ['Coconut Cream'], [], [], [], true),
new Drink("Ninny Muggins", "Cocoa", "Water", ['English Toffee'], ['Vanilla Cream'], [], [], [], true),
new Drink("Serendipity", "Cocoa", "Water", ['Peppermint'], ['Coconut Cream'], [], [], [], true),
new Drink("Coco Cocoa", "Cocoa", "", ['Vanilla'], ['Coconut Cream'], [], [], [], false),
new Drink("Buttery Beer", "Root Beer", "", ['Butterscotch'], ['Vanilla Cream'], [], [], [], false),
new Drink("Happy Camper", "Root Beer", "", ['Toasted Marshmallow'], ['Half and Half'], [], [], [], false),
new Drink("Island Time", "Fresca", "", ['Passion Fruit'], ['Coconut Cream'], ['Mango'], ['Fresh Orange'], [], false),
new Drink("Pink Bahama", "", "", ['Peach', 'Strawberry', 'Raspberry'], [], [], ['Fresh Lemon'], [], false),
new Drink("Sleigh All Day", "Fresca", "Lemonade", ['Pomergranate', 'Peach'], [], ['Strawberry'], ['Fresh Lemon'], [], false),
new Drink("Daydreamer", "Ginger Ale", "", ['Pomegranate', 'Cranberry'], [], [], ['Fresh Lemon'], [], false),
new Drink("Orange You Glad", "", "", ['Orange Soda', 'Vanilla'], ['Half and Half'], [], [], [], false),
new Drink("Dizzle", "Sprite", "", ['Pineapple'], ['Coconut Cream'], ['Peach'], [], [], false),
new Drink("The Demi", "Sparkling Water", "", ['SF Raspberry', 'SF Pineapple', 'SF Coconut', 'SF Vanilla'], ['Coconut Cream'], [], [], [], false),
new Drink("Missionary", "Sprite", "", ["Tiger's Blood"], ['Coconut Cream'], [], [], [], false),
];

const sizes = [12, 16, 24, 32, 44];
let recipeList = new Set();
let mySelections = new Set();
const selectionDiv = document.getElementById("selections");
const resultDiv = document.getElementById("result");

// Function to generate a new drink
function generateDrink() {
    clearSelections();
    let drink = drinks[getRandomInt(drinks.length)];
    let size = sizes[getRandomInt(sizes.length)];
    drink.setCupSize(size);
    recipeList = new Set(drink.getRecipe());
    drink.displayRecipe();
}

// Event listener for Generate button
document.getElementById("generate-btn").addEventListener("click", generateDrink);

// Event listener for ingredient selection
document.querySelectorAll(".category button").forEach(button => {
    button.addEventListener("click", function () {
        let value = this.textContent.trim(); 

        if (mySelections.has(value)) {
            mySelections.delete(value);
            this.style.opacity = "1";
        } else {
            mySelections.add(value);
            this.style.opacity = "0.5";
        }

        selectionDiv.innerText = "Your Answer: " + [...mySelections].join(", ");
    });
});

// Function to check if selections match recipe
function checkAnswer() {
    let correct = [...recipeList];
    let selected = [...mySelections];
    
    let allCorrect = selected.length === correct.length && selected.every(item => recipeList.has(item));

    if (allCorrect) {
        resultDiv.innerText = "✅ Correct!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerText = "❌ Incorrect!";
        resultDiv.style.color = "red";
    }
}

function clearSelections(){
    document.querySelectorAll(".category button").forEach(button => {
        button.style.opacity = "1";
    });

    mySelections.clear();
    selectionDiv.innerText = "";
    resultDiv.innerText = ""; // Clear result feedback

}

// Event listener for buttons
document.getElementById("check-answer-btn").addEventListener("click", checkAnswer);
document.getElementById("clear").addEventListener("click", clearSelections);
