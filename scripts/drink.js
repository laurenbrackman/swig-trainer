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
        this.size = 16;
    }

    getRecipe() {
        const [flavorTotal, creamTotal, pureeTotal, topoffTotal] = calculateRatios(this.category, this.size);
        let flavorList = [];
        let creamList = [];
        let pureeList = [];
        if(this.blended && (this.base=="Reviver" || this.base=="SF Reviver")){
            this.extras = this.base + " Concentrate";
            this.base = this.topoff;
            this.topoff = "";
        }
        else if(this.blended && this.base=="Cocoa"){
            this.extras = "Hot Cocoa Mix";
            this.base = "Water";
        }
        if(this.flavors){
            let flavorRatio = decimalToFraction(flavorTotal / this.flavors.length);
            flavorList = this.flavors.map(flavor => `${flavor} (${flavorRatio} pumps)`);
        }
        if(this.creams){
            let creamRatio = decimalToFraction(creamTotal / this.creams.length);
            creamList = this.creams.map(cream => `${cream} (${creamRatio} pumps)`);
        }
        if(this.purees){
            let pureeRatio = decimalToFraction(pureeTotal / this.purees.length);
            pureeList = this.purees.map(puree => `${puree} Puree (${pureeRatio} pumps)`);
        }
        return [this.getCupType(this.size),this.base, this.topoff, flavorList, creamList, pureeList, this.fruits, this.extras, this.blended ? "Blender" : ""]
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

    getCupType() {
        if (this.size == 12) {
            return this.category == "Hot Cocoa" ? "Paper" : "Kids";
        } 
        else if (this.size == 16) {
            return "Plastic"
        } 
        else if (this.size == 44) {
            return "Foam";
        }
        else {
            return (this.category == "Soda")? "Foam" : "Plastic";
        }
    }

    verifySize() {
        let newSize = this.size;
        if (this.category == "Hot Cocoa") {
            newSize = 12;
            console.log(`${this.category} converted ${this.size} to ${newSize}`)
        }
        else if (this.category == "Frozen Hot Cocoa") {
            newSize = 24;
            console.log(`${this.category} converted ${this.size} to ${newSize}`)
        }
        else if (this.category == "Reviver" || this.category == "Blended Reviver"){
            if (this.size < 16) {
                newSize = 16;
                console.log(`${this.category} converted ${this.size} to ${newSize}`)
            }
            else if (this.size > 32) {
                newSize = 32;
                console.log(`${this.category} converted ${this.size} to ${newSize}`)
            }
        }
        return newSize;
    }

    setCupSize(newsize) {
        this.size = newsize;
        this.size = this.verifySize();
    }

    displayRecipe() {
        const drinkDiv = document.getElementById("drink");
        const recipeDiv = document.getElementById("recipe");
    
        drinkDiv.textContent = `${this.size}oz ${this.name}`;
        const [flavors, creams, purees, topoff] = calculateRatios(this.category, this.size);
    
        let recipeHTML = "<ul>";
        recipeHTML += `<li><strong>Cup:</strong> ${this.getCupType(this.size)}</li>`;
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

        if(this.extras.length > 0) {
            if(this.category==="Blended Reviver"){
                this.extras = this.extras.replace("Concentrate", `Concentrate (${decimalToFraction(purees)} pumps)`);
            }   
            recipeHTML += `<li><strong>Extras:</strong> ${this.extras}</li>`; 
        }
    
        recipeHTML += "</ul>";
        recipeDiv.innerHTML = recipeHTML;
    }    
}