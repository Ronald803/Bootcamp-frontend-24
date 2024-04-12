function checkPowerPoint() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;
      descriptor.value = function (...args: any[]) {
        if (this.ppAvailable > 0) {
          originalMethod.apply(this, args);
        } else {
          console.log(`${this.name} cannot attack, ${this.name} has no power points left!`);
        }
      };
      return descriptor;
    };
  }
class Pokemon {
    name: string;
    ppAvailable = 1;
    constructor(name: string, ppAvailable: number) {
      this.name = name;
      this.ppAvailable = ppAvailable;
    }
    
    @checkPowerPoint()
    figth(move: any) {
      console.log(`${this.name} used ${move?.name}!`);
      this.ppAvailable -= 1;
    }
  }
    
  const move = {name: 'thunderbolt', power: 90};
  const pikachu = new Pokemon('pikachu', 1);
  pikachu.figth(move);
  pikachu.figth(move);