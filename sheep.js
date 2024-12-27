"use strict"
console.log(`sheep class linked`)

class Sheep {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    getName() { return this._name }
    getColor() { return this._color }

    setName(newName) { this._name = newName }
    setColor(newColor) { this._color = newColor }

    toString() { 
        return `
        <pre>
        Name: ${this.getName()} ♥︎
        Color: ${this.getColor()} ♥︎
        </pre>
        `
    }
}