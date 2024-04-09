/*

Intro:

    All 2 users liked the idea of the community. We should go
    forward and introduce some order. We are in Germany after all.
    Let's add a couple of admins.

    Initially we only had users in the in-memory database. After
    introducing Admins, we need to fix the types so that
    everything works well together.

Exercise:

    Type "Person" is missing, please define it and use
    it in persons array and logPerson function in order to fix
    all the TS errors.

*/

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

class Person implements User{
    constructor(public name,public age,public occupation){}
}

const persons: Person[] /* <- Person[] */ = [
    new Person('Max Mustermann',25,'Chimney sweep'),
    new Person('Jane Doe',32,'Administrator'),
    new Person('Kate Müller',23,'Astronaut'),
    new Person('Bruce Willis',64,'World saver')
];

function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);