var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function checkPowerPoint() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (this.ppAvailable > 0) {
                originalMethod.apply(this, args);
            }
            else {
                console.log(`${this.name} cannot attack, ${this.name} has no power points left!`);
            }
        };
        return descriptor;
    };
}
class Pokemon {
    constructor(name, ppAvailable) {
        this.ppAvailable = 1;
        this.name = name;
        this.ppAvailable = ppAvailable;
    }
    figth(move) {
        console.log(`${this.name} used ${move === null || move === void 0 ? void 0 : move.name}!`);
        this.ppAvailable -= 1;
    }
}
__decorate([
    checkPowerPoint(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Pokemon.prototype, "figth", null);
const move = { name: 'thunderbolt', power: 90 };
const pikachu = new Pokemon('pikachu', 1);
pikachu.figth(move);
pikachu.figth(move);
