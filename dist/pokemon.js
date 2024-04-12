"use strict";
class Pokemon {
    constructor(name, ppAvailable) {
        this.ppAvailable = 1;
        this.name = name;
        this.ppAvailable = ppAvailable;
    }
    //@checkPowerPoint()
    figth(move) {
        console.log(`${this.name} used ${move === null || move === void 0 ? void 0 : move.name}!`);
        this.ppAvailable -= 1;
    }
}
const move = { name: 'thunderbolt', power: 90 };
const pikachu = new Pokemon('pikachu', 1);
pikachu.figth(move);
pikachu.figth(move);
