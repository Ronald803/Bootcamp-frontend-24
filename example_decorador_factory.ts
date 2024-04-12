function logWithPrefix(prefix: string) {
    return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]) {
            console.log(`${prefix}: ${propertyKey} with arguments: ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            console.log(`${prefix}: ${propertyKey} returned: ${result}`);
            return result;
        };
 
        return descriptor;
    };
}
function WithTax(rate: number) {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
 
    descriptor.value = function (...args: any[]) {
      const result = original.apply(this, args);
      return (result * (1 + rate)).toFixed(2);
    };
    return descriptor;
  };
}
 
class Calculator {
    @logWithPrefix("SUM")
    add(x: number, y: number): number {
        return x + y;
    }
 
    @logWithPrefix("SUBTRACT")
    @WithTax(0.5)
    subtract(x: number, y: number): number {
        return x - y;
    }
}
 
const calc = new Calculator();
console.log(calc.add(2, 3));
console.log(calc.subtract(5, 2));