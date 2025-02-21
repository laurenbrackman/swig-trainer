import { calculateRatios } from "./ratio.js";
import { decimalToFraction } from "./utils.js";

export class Drink {
    constructor(name, base, topoff, flavors, creams, purees, fruits, extras, blended) {
        this.name = name;
        this.base = base;
        this.topoff = topoff;
        this.flavors = flavors;
        this.creams = creams;
        this.purees = purees;
        this.fruits = fruits;
        this.extras = extras;
        this.blended = blended;
        this.category = this.determineCategory();
    }

    getRecipe(size) {
        return [this.getCupType(size),this.base, this.topoff, this.flavors, this.creams, this.fruits, this.extras, this.blended]
            .flat()
            .filter(item => item); 
    }

    determineCategory() {
        if (this.base === "Water" || this.base === "Sparkling Water") {
            return this.blended ? "Blended Soda" : "Refresher";
        } 
        if (this.base === "Reviver" || this.base === "SF Reviver") {
            return this.blended ? "Blended Reviver" : "Reviver";
        } 
        if (this.base === "Cocoa") {
            return this.blended ? "Frozen Hot Cocoa" : "Hot Cocoa";
        }
        return this.blended ? "Blended Soda" : "Soda";
    }

    getCupType(size) {
        if (size == 12) {
            return this.category == "Hot Cocoa" ? "Paper" : "Kids";
        } 
        else if (size == 16) {
            return "Plastic"
        } 
        else if (size == 44) {
            return "Foam";
        }
        else {
            return (this.category == "Soda")? "Foam" : "Plastic";
        }
    }

    verifySize(size) {
        let newSize = size;
        if (this.category == "Hot Cocoa") {
            newSize = 12;
        }
        else if (this.category == "Frozen Hot Cocoa") {
            newSize = 24;
        }
        else if (this.category == "Reviver" || this.category == "Blended Reviver"){
            if (size < 16) {
                newSize = 16;
            }
            else if (size > 32) {
                newSize = 32;
            }
        }
        return newSize
    }

    displayRecipe(size) {
        const drinkDiv = document.getElementById("drink");
        const recipeDiv = document.getElementById("recipe");
    
        drinkDiv.textContent = `${size}oz ${this.name}`;
        const [flavors, creams, purees, topoff] = calculateRatios(this.category, size);
    
        let recipeHTML = "<ul>";
        recipeHTML += `<li><strong>Cup:</strong> ${this.getCupType(size)}</li>`;
        recipeHTML += `<li><strong>Base:</strong> ${this.base}</li>`;
        
        if (topoff > 0) {
            recipeHTML += `<li><strong>Top-off:</strong> ${this.topoff} (${decimalToFraction(topoff)}oz)</li>`;
        }

        if (this.flavors.length > 0) {
            recipeHTML += `<li><strong>Flavors:</strong> <ul>`;
            this.flavors.forEach(flavor => {
                recipeHTML += `<li>${flavor} (${decimalToFraction(flavors / this.flavors.length)} pumps)</li>`;
            });
            recipeHTML += `</ul></li>`;
        }
    
        if (this.creams.length > 0) {
            recipeHTML += `<li><strong>Creams:</strong> <ul>`;
            this.creams.forEach(cream => {
                recipeHTML += `<li>${cream} (${decimalToFraction(creams)} pumps)</li>`;
            });
            recipeHTML += `</ul></li>`;
        }
    
        if (this.purees.length > 0) {
            recipeHTML += `<li><strong>Purees:</strong> <ul>`;
            this.purees.forEach(puree => {
                recipeHTML += `<li>${puree} Puree (${decimalToFraction(purees / this.purees.length)} pumps)</li>`;
            });
            recipeHTML += `</ul></li>`;
        }

        if(this.fruits.length > 0) {
            recipeHTML += `<li><strong>Fruits:</strong> ${this.fruits}</li>`;
        }

        if(this.category==="Blended Reviver"){
            recipeHTML += `<li><strong>Reviver Concentrate:</strong> ${purees} pumps</li>`;
        }

        if(this.extras.length > 0) {
            recipeHTML += `<li><strong>Extras:</strong> ${this.extras}</li>`;
        }
    
        recipeHTML += "</ul>";
        recipeDiv.innerHTML = recipeHTML;
    }    
}