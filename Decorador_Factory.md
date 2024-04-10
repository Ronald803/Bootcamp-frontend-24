# Decorador Factory

## Introducción

Los decoradores en Typescript son una característica experimental, y aún está como propuesta en javascript.

En el contexto de Typescript, un decorador es un tipo especial de declaración que puede ser aplicado a calses métodos, propiedades y parámetros, y es llamada en tiempo de ejecución.

Los decoradores se aplican utilizando una sintaxis de arroba '@' seguida del nombre del decorador, seguido opcionalmente de paréntesis y argumentos

## Decoradores Factory

Si queremos configurar como un decorador es aplicado a una declaración podríamos utilizar un Decorator Factory o Fábrica de Decoradores.

Un Decorador Factory es una función que retorna una expresión que puede ser llamada por un decorador en tiempo de ejecución.

En lugar de aplicar un decorador directamente a una clase, método, propiedad o parámetro, se puede utilizar una función para generar el decorador que se aplicará. Esto proporciona una mayor flexibilidad al momento de definir decoradores más complejos que pueden necesitar argumentos o configuraciones específicas

Ejemplo:
```ts
function decoradorFactory(arg: string){
    return function(){
        console.log(`Imprimiendo el argumento ${arg}`)
    }
}
class NuevaClase{
    @decoradorFactory("argumento para el decorador")    // aplicando el decoradorFactory en este metodo
    metodo(){

    }
}
```