export class Person {
    _id: string;
    name: string;
    age: number;
    height: number;

    static people: Person[] = [
        new Person('Teo', 10, 100),
        new Person('Ti', 11, 150),
        new Person('Tun', 13, 110),
    ]

    constructor(name: string, age: number, height: number) {
        this._id = Math.round(Math.random() * 100000) + ''
        this.name = name;
        this.age = age;
        this.height = height;
    }
}
