function logWithPrefix(prefix: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
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
 
class Calculator {
    @logWithPrefix("SUM")
    add(x: number, y: number): number {
        return x + y;
    }
 
    @logWithPrefix("SUBTRACT")
    subtract(x: number, y: number): number {
        return x - y;
    }
}
 
const calc = new Calculator();
console.log(calc.add(2, 3));
console.log(calc.subtract(5, 2));